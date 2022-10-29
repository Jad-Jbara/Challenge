import React from 'react'
import { Image, Linking, Text, View } from 'react-native'

import ReadMore from '@fawazahmed/react-native-read-more'
import Hyperlink from 'react-native-hyperlink'

import Keys from 'constants/Keys'
import styles from './styles'
import AlertStore from 'stores/AlertStore'



const Article = ({ item }: any) => {
  const { multimedia, snippet, source, lead_paragraph, byline, web_url, section_name } = item
  const image = Array.isArray(multimedia) ? multimedia[0]?.url : null

  const onHyperlinkPress = (url: string) => {
    AlertStore.open({
      title: `Open link?`,
      description: `${url}\nThis will open the article in an external link, outside the application.\nThis application is not responsible for the content dispalyed on the website.`,
      onConfirm: async () => {
        await Linking.openURL(url)
      }
    })
  }

  return (
    <View style={styles.container}>
      {image && <Image
        source={{ uri: `${Keys.IMAGE_BASE_URL}${image}` }}
        style={styles.image}
        onError={err => console.error(err)}
      />}
      <Text style={styles.snippet}>{snippet}</Text>
      <View style={styles.section}>
        <Text style={styles.sectionText}>{section_name} </Text>
        <Text style={styles.byText}>{byline?.original}</Text>
      </View>
      <Hyperlink
        onPress={onHyperlinkPress}
      >
        <Text style={styles.seeMore}>{web_url}</Text>
      </Hyperlink>
      <Hyperlink>
        <Text style={styles.source}>Source: {source}</Text>
      </Hyperlink>
      <ReadMore
        numberOfLines={3}
        style={styles.leadParagraph}
        seeMoreStyle={styles.seeMore}
        seeLessStyle={styles.seeLess}>
        {lead_paragraph}
      </ReadMore>
    </View>
  )
}

export default React.memo(Article)
