import React from 'react';
import { FlatList, StyleSheet, View, TouchableOpacity } from 'react-native';
import ChatItem from './ChatItem';
import { MaterialIcons } from '@expo/vector-icons';

const DATA = [
    {
        id: '1',
        name: 'John Doe',
        lastMessage: 'Hey, how are you?',
        time: '12:45 PM',
        avatar: 'https://i.pravatar.cc/150?u=1',
        unreadCount: 2,
    },
    {
        id: '2',
        name: 'Jane Smith',
        lastMessage: 'Did you see the new update?',
        time: '11:30 AM',
        avatar: 'https://i.pravatar.cc/150?u=2',
        unreadCount: 0,
    },
    {
        id: '3',
        name: 'Tech Group',
        lastMessage: 'Alice: Let\'s meet at 5',
        time: '10:15 AM',
        avatar: 'https://i.pravatar.cc/150?u=3',
        unreadCount: 5,
    },
    {
        id: '4',
        name: 'Bob Wilson',
        lastMessage: 'Sure, sounds good!',
        time: 'Yesterday',
        avatar: 'https://i.pravatar.cc/150?u=4',
        unreadCount: 0,
    },
    {
        id: '5',
        name: 'Sarah Connor',
        lastMessage: 'Are we still on for the meeting?',
        time: 'Yesterday',
        avatar: 'https://i.pravatar.cc/150?u=5',
        unreadCount: 0,
    },
    {
        id: '6',
        name: 'Mike Ross',
        lastMessage: 'I sent you the documents.',
        time: 'Yesterday',
        avatar: 'https://i.pravatar.cc/150?u=6',
        unreadCount: 1,
    },
    {
        id: '7',
        name: 'Emma Stone',
        lastMessage: 'See you later!',
        time: '2/15/26',
        avatar: 'https://i.pravatar.cc/150?u=7',
        unreadCount: 0,
    },
    {
        id: '8',
        name: 'Chris Pratt',
        lastMessage: 'Check out this photo!',
        time: '2/14/26',
        avatar: 'https://i.pravatar.cc/150?u=8',
        unreadCount: 0,
    },
];

const ChatList = ({ onChatPress }) => {
    return (
        <View style={styles.container}>
            <FlatList
                data={DATA}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => <ChatItem chat={item} onChatPress={onChatPress} />}
            />
            <TouchableOpacity style={styles.fab}>
                <MaterialIcons name="message" size={24} color="#fff" />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    fab: {
        position: 'absolute',
        bottom: 20,
        right: 20,
        backgroundColor: '#25D366',
        width: 60,
        height: 60,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
});

export default ChatList;
