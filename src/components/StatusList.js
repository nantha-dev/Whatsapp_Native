import React from 'react';
import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

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
                        <MaterialIcons name="add" size={16} color="#fff" />
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
            />

            <View style={styles.fabContainer}>
                <TouchableOpacity style={styles.miniFab}>
                    <MaterialIcons name="edit" size={20} color="#075E54" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.fab}>
                    <MaterialIcons name="photo-camera" size={24} color="#fff" />
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    myStatusContainer: {
        flexDirection: 'row',
        padding: 15,
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
        borderColor: '#25D366',
    },
    avatar: {
        width: 52,
        height: 52,
        borderRadius: 26,
    },
    addIconContainer: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        backgroundColor: '#25D366',
        borderRadius: 10,
        width: 20,
        height: 20,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: '#fff',
    },
    textContainer: {
        flex: 1,
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    time: {
        fontSize: 14,
        color: '#666',
        marginTop: 2,
    },
    sectionHeader: {
        backgroundColor: '#f4f4f4',
        paddingVertical: 8,
        paddingHorizontal: 15,
        color: '#666',
        fontWeight: 'bold',
        fontSize: 14,
    },
    itemContainer: {
        flexDirection: 'row',
        padding: 15,
        alignItems: 'center',
    },
    fabContainer: {
        position: 'absolute',
        bottom: 20,
        right: 20,
        alignItems: 'center',
    },
    miniFab: {
        backgroundColor: '#e9edef',
        width: 45,
        height: 45,
        borderRadius: 22.5,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 15,
        elevation: 3,
    },
    fab: {
        backgroundColor: '#25D366',
        width: 60,
        height: 60,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 5,
    },
});

export default StatusList;
