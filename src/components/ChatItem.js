import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const ChatItem = ({ chat, onChatPress }) => {
    return (
        <TouchableOpacity style={styles.container} onPress={() => onChatPress(chat)}>
            <Image source={{ uri: chat.avatar }} style={styles.avatar} />
            <View style={styles.content}>
                <View style={styles.header}>
                    <Text style={styles.name}>{chat.name}</Text>
                    <Text style={styles.time}>{chat.time}</Text>
                </View>
                <View style={styles.footer}>
                    <Text style={styles.lastMessage} numberOfLines={1}>
                        {chat.lastMessage}
                    </Text>
                    {chat.unreadCount > 0 && (
                        <View style={styles.unreadBadge}>
                            <Text style={styles.unreadText}>{chat.unreadCount}</Text>
                        </View>
                    )}
                </View>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 15,
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    avatar: {
        width: 60,
        height: 60,
        borderRadius: 30,
        marginRight: 15,
    },
    content: {
        flex: 1,
        borderBottomWidth: 0.5,
        borderBottomColor: '#eee',
        paddingBottom: 15,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 5,
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000',
    },
    time: {
        fontSize: 14,
        color: '#666',
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    lastMessage: {
        fontSize: 15,
        color: '#666',
        flex: 1,
        marginRight: 10,
    },
    unreadBadge: {
        backgroundColor: '#25D366',
        borderRadius: 10,
        width: 20,
        height: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    unreadText: {
        color: '#fff',
        fontSize: 12,
        fontWeight: 'bold',
    },
});

export default ChatItem;
