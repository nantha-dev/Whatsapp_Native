import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Colors } from '../constants/Colors';

const ChatItem = ({ chat, onChatPress }) => {
    return (
        <TouchableOpacity style={styles.container} onPress={() => onChatPress(chat)}>
            <View style={styles.avatarContainer}>
                <Image source={{ uri: chat.avatar }} style={styles.avatar} />
                {chat.id === '1' && <View style={styles.statusRing} />}
            </View>
            <View style={styles.content}>
                <View style={styles.header}>
                    <Text style={styles.name}>{chat.name}</Text>
                    <Text style={[styles.time, chat.unreadCount > 0 && styles.activeTime]}>{chat.time}</Text>
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
        paddingHorizontal: 16,
        paddingVertical: 12,
        alignItems: 'center',
        backgroundColor: Colors.background,
    },
    avatarContainer: {
        position: 'relative',
        marginRight: 16,
    },
    avatar: {
        width: 52,
        height: 52,
        borderRadius: 26,
    },
    statusRing: {
        position: 'absolute',
        top: -2,
        left: -2,
        right: -2,
        bottom: -2,
        borderRadius: 30,
        borderWidth: 2,
        borderColor: Colors.unreadBadge,
    },
    content: {
        flex: 1,
        justifyContent: 'center',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 4,
    },
    name: {
        fontSize: 17,
        fontWeight: '600',
        color: Colors.textPrimary,
    },
    time: {
        fontSize: 12,
        color: Colors.textSecondary,
    },
    activeTime: {
        color: Colors.unreadBadge,
        fontWeight: 'bold',
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    lastMessage: {
        fontSize: 14,
        color: Colors.textSecondary,
        flex: 1,
        marginRight: 10,
    },
    unreadBadge: {
        backgroundColor: Colors.unreadBadge,
        borderRadius: 12,
        minWidth: 22,
        height: 22,
        paddingHorizontal: 6,
        justifyContent: 'center',
        alignItems: 'center',
    },
    unreadText: {
        color: '#0B141B',
        fontSize: 12,
        fontWeight: 'bold',
    },
});

export default ChatItem;
