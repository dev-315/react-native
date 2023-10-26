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
                    <Text style={styles.cardTitle}>Nature</Text>
                    <Text style={styles.cardLabel}>Uttar Pradesh, India</Text>
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
    card: {
        width: 350,
        height: 360,
        borderRadius: 8,
        marginVertical: 12,
        marginHorizontal: 30,
    },
    cardElevated: {
        backgroundColor: '#ffffff',
        elevation: 3,
        shadowOffset: {
            width: 1,
            height: 1
        }
    },
    cardImage: {
        height: 180,
        marginBottom: 8,
        borderTopLeftRadius: 6,
        borderTopRightRadius: 8
    },
    cardBody: {
        flex:1,
        flexGrow: 1,
        paddingHorizontal: 12
    },
    cardTitle: {
        color: '#000000',
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 4
    },
    cardLabel: {
        color: '#000000',
        fontSize: 14,
        marginBottom: 6
    },
    cardDescription: {
        color: '#242B2E',
        fontSize: 12,
        marginTop: 6,
        marginBottom: 12,
        flexShrink: 1
    },
    cardFooter: {
        color: '#000000'
    },
})