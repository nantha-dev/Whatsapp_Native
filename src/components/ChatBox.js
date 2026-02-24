import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput, FlatList, KeyboardAvoidingView, Platform, SafeAreaView } from 'react-native';
import { MaterialIcons, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { Colors } from '../constants/Colors';

const ChatBox = ({ chat, onBack }) => {
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([
        { id: '1', text: 'Hey there! Have you seen the new redesign?', sender: 'other', time: '12:45 PM' },
        { id: '2', text: 'It looks amazing! So modern and sleek.', sender: 'other', time: '12:46 PM' },
        { id: '3', text: 'I am doing great, thanks for asking! Let\'s build the future.', sender: 'me', time: '12:47 PM' },
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
            <View style={styles.messageFooter}>
                <Text style={styles.messageTime}>{item.time}</Text>
                {item.sender === 'me' && (
                    <MaterialCommunityIcons name="check-all" size={16} color={Colors.accent} style={{ marginLeft: 4 }} />
                )}
            </View>
        </View>
    );

    return (
        <SafeAreaView style={styles.safeArea}>
            <KeyboardAvoidingView
                style={styles.container}
                behavior={Platform.OS === 'ios' ? 'padding' : undefined}
                keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 0}
            >
                {/* Custom Header */}
                <View style={styles.header}>
                    <View style={styles.headerLeft}>
                        <TouchableOpacity onPress={onBack} style={styles.backButton}>
                            <MaterialIcons name="arrow-back" size={24} color={Colors.textPrimary} />
                        </TouchableOpacity>
                        <Image source={{ uri: chat.avatar }} style={styles.avatar} />
                        <View style={styles.headerInfo}>
                            <Text style={styles.name}>{chat.name}</Text>
                            <Text style={styles.status}>online</Text>
                        </View>
                    </View>
                    <View style={styles.iconGroup}>
                        <TouchableOpacity style={styles.headerIcon}>
                            <MaterialIcons name="videocam" size={24} color={Colors.textPrimary} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.headerIcon}>
                            <MaterialIcons name="call" size={24} color={Colors.textPrimary} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.headerIcon}>
                            <MaterialIcons name="more-vert" size={24} color={Colors.textPrimary} />
                        </TouchableOpacity>
                    </View>
                </View>

                {/* Chat Background/Messages */}
                <View style={styles.chatArea}>
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
                </View>

                {/* Input Area */}
                <View style={styles.inputArea}>
                    <View style={styles.inputContainer}>
                        <TouchableOpacity>
                            <MaterialIcons name="add" size={24} color={Colors.textPrimary} style={styles.inputIcon} />
                        </TouchableOpacity>
                        <TextInput
                            style={styles.input}
                            placeholder="Message"
                            placeholderTextColor={Colors.textSecondary}
                            value={message}
                            onChangeText={setMessage}
                            multiline
                        />
                        <TouchableOpacity>
                            <MaterialIcons name="insert-emoticon" size={24} color={Colors.textPrimary} style={styles.inputIcon} />
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity style={styles.sendButton} onPress={sendMessage}>
                        <MaterialIcons name={message.trim() ? "send" : "mic"} size={24} color="#0B141B" />
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: Colors.surface,
    },
    container: {
        flex: 1,
        backgroundColor: Colors.background,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: Colors.surface,
        paddingVertical: 10,
        paddingHorizontal: 12,
        borderBottomWidth: 0.5,
        borderBottomColor: Colors.border,
    },
    headerLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
    },
    backButton: {
        padding: 4,
    },
    avatar: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginLeft: 4,
    },
    headerInfo: {
        marginLeft: 12,
    },
    name: {
        color: Colors.textPrimary,
        fontSize: 16,
        fontWeight: 'bold',
    },
    status: {
        color: Colors.unreadBadge,
        fontSize: 12,
    },
    iconGroup: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    headerIcon: {
        marginLeft: 18,
    },
    chatArea: {
        flex: 1,
        position: 'relative',
    },
    background: {
        ...StyleSheet.absoluteFillObject,
        opacity: 0.05,
        zIndex: -1,
        backgroundColor: '#0B141B',
    },
    messageList: {
        padding: 16,
        paddingBottom: 24,
    },
    messageContainer: {
        maxWidth: '85%',
        paddingHorizontal: 12,
        paddingVertical: 8,
        borderRadius: 12,
        marginBottom: 8,
        elevation: 1,
    },
    myMessage: {
        alignSelf: 'flex-end',
        backgroundColor: '#005C4B',
        borderTopRightRadius: 2,
    },
    otherMessage: {
        alignSelf: 'flex-start',
        backgroundColor: '#202C33',
        borderTopLeftRadius: 2,
    },
    messageText: {
        fontSize: 15,
        color: Colors.textPrimary,
        lineHeight: 20,
    },
    messageFooter: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        marginTop: 2,
    },
    messageTime: {
        fontSize: 11,
        color: 'rgba(233, 237, 239, 0.6)',
    },
    inputArea: {
        flexDirection: 'row',
        padding: 10,
        alignItems: 'center',
        backgroundColor: Colors.surface,
    },
    inputContainer: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#202C33',
        borderRadius: 24,
        marginHorizontal: 4,
        paddingHorizontal: 12,
        paddingVertical: 8,
        alignItems: 'center',
    },
    input: {
        flex: 1,
        fontSize: 16,
        color: Colors.textPrimary,
        maxHeight: 120,
        paddingHorizontal: 12,
    },
    inputIcon: {
        opacity: 0.8,
    },
    sendButton: {
        backgroundColor: Colors.unreadBadge,
        width: 48,
        height: 48,
        borderRadius: 24,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 4,
        elevation: 2,
    },
});

export default ChatBox;
