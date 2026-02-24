import React from 'react';
import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Colors } from '../constants/Colors';

const STATUS_DATA = [
    {
        id: '1',
        name: 'Jane Smith',
        time: '25 minutes ago',
        avatar: 'https://i.pravatar.cc/150?u=2',
        viewed: false,
    },
    {
        id: '2',
        name: 'Bob Wilson',
        time: 'Today, 10:30 AM',
        avatar: 'https://i.pravatar.cc/150?u=4',
        viewed: true,
    },
    {
        id: '3',
        name: 'Sarah Connor',
        time: 'Today, 8:15 AM',
        avatar: 'https://i.pravatar.cc/150?u=5',
        viewed: true,
    },
];

const StatusItem = ({ item }) => (
    <TouchableOpacity style={styles.itemContainer}>
        <View style={[styles.avatarContainer, !item.viewed && styles.unreadBorder]}>
            <Image source={{ uri: item.avatar }} style={styles.avatar} />
        </View>
        <View style={styles.textContainer}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.time}>{item.time}</Text>
        </View>
    </TouchableOpacity>
);

const StatusList = () => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.myStatusContainer}>
                <View style={styles.avatarContainer}>
                    <Image source={{ uri: 'https://i.pravatar.cc/150?u=me' }} style={styles.avatar} />
                    <View style={styles.addIconContainer}>
                        <MaterialIcons name="add" size={16} color={Colors.background} />
                    </View>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.name}>My status</Text>
                    <Text style={styles.time}>Tap to add status update</Text>
                </View>
            </TouchableOpacity>

            <Text style={styles.sectionHeader}>Recent updates</Text>

            <FlatList
                data={STATUS_DATA}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => <StatusItem item={item} />}
                contentContainerStyle={{ paddingBottom: 100 }}
            />

            <View style={styles.fabContainer}>
                <TouchableOpacity style={styles.miniFab}>
                    <MaterialIcons name="edit" size={20} color={Colors.textPrimary} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.fab}>
                    <MaterialIcons name="photo-camera" size={24} color={Colors.background} />
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.background,
    },
    myStatusContainer: {
        flexDirection: 'row',
        padding: 16,
        alignItems: 'center',
    },
    avatarContainer: {
        width: 60,
        height: 60,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 15,
    },
    unreadBorder: {
        borderWidth: 2,
        borderColor: Colors.unreadBadge,
    },
    avatar: {
        width: 52,
        height: 52,
        borderRadius: 26,
    },
    addIconContainer: {
        position: 'absolute',
        bottom: 0,
        right: 2,
        backgroundColor: Colors.unreadBadge,
        borderRadius: 12,
        width: 22,
        height: 22,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: Colors.background,
    },
    textContainer: {
        flex: 1,
    },
    name: {
        fontSize: 17,
        fontWeight: 'bold',
        color: Colors.textPrimary,
    },
    time: {
        fontSize: 14,
        color: Colors.textSecondary,
        marginTop: 2,
    },
    sectionHeader: {
        paddingVertical: 12,
        paddingHorizontal: 16,
        color: Colors.textSecondary,
        fontWeight: '600',
        fontSize: 13,
        textTransform: 'uppercase',
    },
    itemContainer: {
        flexDirection: 'row',
        padding: 16,
        alignItems: 'center',
    },
    fabContainer: {
        position: 'absolute',
        bottom: 24,
        right: 20,
        alignItems: 'center',
    },
    miniFab: {
        backgroundColor: '#202C33',
        width: 44,
        height: 44,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 16,
        elevation: 3,
    },
    fab: {
        backgroundColor: Colors.unreadBadge,
        width: 56,
        height: 56,
        borderRadius: 16,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 5,
    },
});

export default StatusList;
