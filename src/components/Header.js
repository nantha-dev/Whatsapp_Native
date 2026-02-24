import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialIcons, Ionicons } from '@expo/vector-icons';

const Header = ({ currentTab, onTabPress }) => {
    return (
        <View style={styles.container}>
            <View style={styles.topRow}>
                <Text style={styles.logo}>WhatsApp</Text>
                <View style={styles.iconGroup}>
                    <TouchableOpacity>
                        <MaterialIcons name="photo-camera" size={24} color="#fff" style={styles.icon} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <MaterialIcons name="search" size={24} color="#fff" style={styles.icon} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <MaterialIcons name="more-vert" size={24} color="#fff" style={styles.icon} />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.tabBar}>
                <TouchableOpacity style={styles.cameraTab}>
                    <MaterialIcons name="groups" size={24} color="rgba(255,255,255,0.7)" />
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.tab, currentTab === 'CHATS' && styles.activeTab]}
                    onPress={() => onTabPress('CHATS')}
                >
                    <Text style={[styles.tabText, currentTab === 'CHATS' && styles.activeTabText]}>CHATS</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.tab, currentTab === 'STATUS' && styles.activeTab]}
                    onPress={() => onTabPress('STATUS')}
                >
                    <Text style={[styles.tabText, currentTab === 'STATUS' && styles.activeTabText]}>STATUS</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.tab, currentTab === 'CALLS' && styles.activeTab]}
                    onPress={() => onTabPress('CALLS')}
                >
                    <Text style={[styles.tabText, currentTab === 'CALLS' && styles.activeTabText]}>CALLS</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#075E54',
        paddingTop: 50, // Adjust for status bar
    },
    topRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 15,
        paddingVertical: 10,
    },
    logo: {
        color: '#fff',
        fontSize: 22,
        fontWeight: 'bold',
    },
    iconGroup: {
        flexDirection: 'row',
    },
    icon: {
        marginLeft: 20,
    },
    tabBar: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    cameraTab: {
        width: '10%',
        alignItems: 'center',
        paddingVertical: 10,
    },
    tab: {
        width: '30%',
        alignItems: 'center',
        paddingVertical: 10,
    },
    tabText: {
        color: 'rgba(255,255,255,0.7)',
        fontWeight: 'bold',
        fontSize: 14,
    },
    activeTab: {
        borderBottomWidth: 3,
        borderBottomColor: '#fff',
    },
    activeTabText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 14,
    },
});

export default Header;
