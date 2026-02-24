import React, { useState } from 'react';
import { StyleSheet, View, StatusBar, SafeAreaView } from 'react-native';
import Header from './src/components/Header';
import ChatList from './src/components/ChatList';
import StatusList from './src/components/StatusList';
import CallsList from './src/components/CallsList';
import ChatBox from './src/components/ChatBox';
import BottomNav from './src/components/BottomNav';
import { Colors } from './src/constants/Colors';

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
        <StatusBar barStyle="light-content" backgroundColor="#121B22" />
        <ChatBox chat={selectedChat} onBack={handleBack} />
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={Colors.background} />
      <Header />
      <View style={styles.content}>
        {renderContent()}
      </View>
      <BottomNav activeTab={activeTab} onTabPress={setActiveTab} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  content: {
    flex: 1,
  }
});
