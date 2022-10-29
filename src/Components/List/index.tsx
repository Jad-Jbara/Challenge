import React, { useEffect, useState } from 'react'
import { FlatList, FlatListProps, RefreshControl } from 'react-native'


type Props = {
  store: any
  fetchCall: string
  RowComponent: React.ReactNode
  listData: any[]
  canLoadMore: boolean
} & FlatListProps<any>
const List = (props: Props) => {
  const { RowComponent, store, fetchCall, listData, canLoadMore = true } = props
  const [offset, setOffset] = useState(0)
  const [data, setData] = useState(listData.slice())
  const [refreshing, setRefreshing] = useState(false)

  const onEndReached = async () => {
    if (!canLoadMore) {
      return
    }
    const data = await store[fetchCall]({ page: offset })
    if (data) {
      setData(listData => [...listData, ...data])
      setOffset(offset => offset + 1)
    }
  }

  const fetchDataAgain = async () => {
    setRefreshing(true)
    const data = await store[fetchCall]({ page: 0 })
    setData(data)
    setOffset(0)
    setRefreshing(false)
  }

  useEffect(() => {
    fetchDataAgain()
  }, [])

  const renderItem = ({ item, index }) => {
    return (
      <RowComponent
        item={item}
      />
    )
  }

  return (
    <FlatList
      refreshControl={<RefreshControl
        refreshing={refreshing}
        onRefresh={fetchDataAgain}
      />}
      renderItem={renderItem}
      onEndReached={onEndReached}
      data={data.slice()}
      {...props}
    />
  )
}

export default List
