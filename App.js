import React, { useState } from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';
import Header from './src/components/Header';
import ChatList from './src/components/ChatList';
import StatusList from './src/components/StatusList';
import CallsList from './src/components/CallsList';
import ChatBox from './src/components/ChatBox';

export default function App() {
  const [activeTab, setActiveTab] = useState('CHATS');
  const [selectedChat, setSelectedChat] = useState(null);

  const handleChatPress = (chat) => {
    setSelectedChat(chat);
  };

  const handleBack = () => {
    setSelectedChat(null);
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'CHATS':
        return <ChatList onChatPress={handleChatPress} />;
      case 'STATUS':
        return <StatusList />;
      case 'CALLS':
        return <CallsList />;
      default:
        return <ChatList onChatPress={handleChatPress} />;
    }
  };

  // If a chat is selected, show the ChatBox (Fullscreen)
  if (selectedChat) {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" backgroundColor="#075E54" />
        <ChatBox chat={selectedChat} onBack={handleBack} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#075E54" />
      <Header currentTab={activeTab} onTabPress={setActiveTab} />
      {renderContent()}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
