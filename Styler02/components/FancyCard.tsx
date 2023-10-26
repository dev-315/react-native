import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const FancyCard = () => {
    return (
        <View>
            <Text style={styles.headingText}>Fancy Card</Text>
            <View style={[styles.card, styles.cardElevated]}>
                <Image
                    source={{
                        uri: 'https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w300/2023/10/free-images.jpg',
                    }}
                    style={styles.cardImage}
                />
                <View style={styles.cardBody}>
                    <Text style={styles.cardTitle}>Image</Text>
                    <Text style={styles.cardLabel}>Image1, Image</Text>
                    <Text style={styles.cardDescription}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus reprehenderit odit velit quibusdam dicta hic rem provident excepturi minus quidem?</Text>
                    <Text style={styles.cardFooter}>12 mins away</Text>

                </View>
            </View>
        </View>
    )
}

export default FancyCard

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 8,
    },
    card: {},
    cardElevated: {},
    cardImage: {
        height: 180
    },
    cardBody: {},
    cardTitle: {},
    cardLabel: {},
    cardDescription: {},
    cardFooter: {},
})