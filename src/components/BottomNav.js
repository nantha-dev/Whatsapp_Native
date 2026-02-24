import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Colors } from '../constants/Colors';

const BottomNav = ({ activeTab, onTabPress }) => {
    const tabs = [
        { id: 'CHATS', label: 'Chats', icon: 'chat' },
        { id: 'STATUS', label: 'Updates', icon: 'circle-slice-8' },
        { id: 'COMMUNITIES', label: 'Communities', icon: 'account-group' },
        { id: 'CALLS', label: 'Calls', icon: 'phone' },
    ];

    return (
        <View style={styles.container}>
            {tabs.map((tab) => (
                <TouchableOpacity
                    key={tab.id}
                    style={styles.tab}
                    onPress={() => onTabPress(tab.id)}
                >
                    <View style={[
                        styles.iconContainer,
                        activeTab === tab.id && styles.activeIconContainer
                    ]}>
                        <MaterialCommunityIcons
                            name={tab.icon}
                            size={24}
                            color={activeTab === tab.id ? Colors.white : Colors.tabInactive}
                        />
                    </View>
                    <Text style={[
                        styles.label,
                        { color: activeTab === tab.id ? Colors.textPrimary : Colors.tabInactive, fontWeight: activeTab === tab.id ? 'bold' : 'normal' }
                    ]}>
                        {tab.label}
                    </Text>
                </TouchableOpacity>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: Colors.surface,
        paddingVertical: 10,
        borderTopWidth: 0.5,
        borderTopColor: Colors.border,
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    tab: {
        alignItems: 'center',
        flex: 1,
    },
    iconContainer: {
        paddingHorizontal: 16,
        paddingVertical: 4,
        borderRadius: 20,
    },
    activeIconContainer: {
        backgroundColor: '#202C33',
    },
    label: {
        fontSize: 12,
        marginTop: 4,
    },
});

export default BottomNav;
