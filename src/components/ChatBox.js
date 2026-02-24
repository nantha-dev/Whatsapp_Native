import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput, FlatList, KeyboardAvoidingView, Platform } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const ChatBox = ({ chat, onBack }) => {
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([
        { id: '1', text: 'Hey there!', sender: 'other', time: '12:45 PM' },
        { id: '2', text: 'How is it going?', sender: 'other', time: '12:46 PM' },
        { id: '3', text: 'I am doing great, thanks for asking!', sender: 'me', time: '12:47 PM' },
    ]);

    const sendMessage = () => {
        if (message.trim().length === 0) return;

        const newMessage = {
            id: Date.now().toString(),
            text: message,
            sender: 'me',
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        };

        setMessages([...messages, newMessage]);
        setMessage('');
    };

    const renderMessage = ({ item }) => (
        <View style={[
            styles.messageContainer,
            item.sender === 'me' ? styles.myMessage : styles.otherMessage
        ]}>
            <Text style={styles.messageText}>{item.text}</Text>
            <Text style={styles.messageTime}>{item.time}</Text>
        </View>
    );

    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior={Platform.OS === 'ios' ? 'padding' : undefined}
            keyboardVerticalOffset={90}
        >
            {/* Custom Header */}
            <View style={styles.header}>
                <TouchableOpacity onPress={onBack} style={styles.backButton}>
                    <MaterialIcons name="arrow-back" size={24} color="#fff" />
                    <Image source={{ uri: chat.avatar }} style={styles.avatar} />
                </TouchableOpacity>
                <View style={styles.headerInfo}>
                    <Text style={styles.name}>{chat.name}</Text>
                    <Text style={styles.status}>online</Text>
                </View>
                <View style={styles.iconGroup}>
                    <MaterialIcons name="videocam" size={24} color="#fff" style={styles.icon} />
                    <MaterialIcons name="call" size={24} color="#fff" style={styles.icon} />
                    <MaterialIcons name="more-vert" size={24} color="#fff" style={styles.icon} />
                </View>
            </View>

            {/* Chat Background/Messages */}
            <Image
                source={{ uri: 'https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png' }}
                style={styles.background}
            />

            <FlatList
                data={messages}
                renderItem={renderMessage}
                keyExtractor={(item) => item.id}
                contentContainerStyle={styles.messageList}
            />

            {/* Input Area */}
            <View style={styles.inputArea}>
                <View style={styles.inputContainer}>
                    <MaterialIcons name="insert-emoticon" size={24} color="#666" style={styles.inputIcon} />
                    <TextInput
                        style={styles.input}
                        placeholder="Type a message"
                        value={message}
                        onChangeText={setMessage}
                        multiline
                    />
                    <MaterialIcons name="attach-file" size={24} color="#666" style={styles.inputIcon} />
                    <MaterialIcons name="photo-camera" size={24} color="#666" style={styles.inputIcon} />
                </View>
                <TouchableOpacity style={styles.sendButton} onPress={sendMessage}>
                    <MaterialIcons name={message.trim() ? "send" : "mic"} size={24} color="#fff" />
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E5DDD5',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#075E54',
        paddingTop: 45,
        paddingBottom: 10,
        paddingHorizontal: 10,
    },
    backButton: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    avatar: {
        width: 38,
        height: 38,
        borderRadius: 19,
        marginLeft: 5,
    },
    headerInfo: {
        flex: 1,
        marginLeft: 10,
    },
    name: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    status: {
        color: '#fff',
        fontSize: 12,
        opacity: 0.8,
    },
    iconGroup: {
        flexDirection: 'row',
    },
    icon: {
        marginLeft: 15,
    },
    background: {
        ...StyleSheet.absoluteFillObject,
        opacity: 0.1,
        zIndex: -1,
    },
    messageList: {
        padding: 10,
        paddingBottom: 20,
    },
    messageContainer: {
        maxWidth: '80%',
        padding: 10,
        borderRadius: 10,
        marginBottom: 10,
        elevation: 1,
    },
    myMessage: {
        alignSelf: 'flex-end',
        backgroundColor: '#DCF8C6',
        borderTopRightRadius: 0,
    },
    otherMessage: {
        alignSelf: 'flex-start',
        backgroundColor: '#fff',
        borderTopLeftRadius: 0,
    },
    messageText: {
        fontSize: 16,
        color: '#303030',
    },
    messageTime: {
        fontSize: 11,
        color: '#666',
        alignSelf: 'flex-end',
        marginTop: 4,
    },
    inputArea: {
        flexDirection: 'row',
        padding: 10,
        alignItems: 'flex-end',
    },
    inputContainer: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#fff',
        borderRadius: 25,
        paddingHorizontal: 10,
        paddingVertical: 5,
        alignItems: 'center',
        elevation: 2,
    },
    input: {
        flex: 1,
        fontSize: 16,
        maxHeight: 100,
        paddingHorizontal: 10,
    },
    inputIcon: {
        marginHorizontal: 5,
    },
    sendButton: {
        backgroundColor: '#075E54',
        width: 50,
        height: 50,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 5,
        elevation: 2,
    },
});

export default ChatBox;
