import React from 'react';
import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const CALLS_DATA = [
    {
        id: '1',
        name: 'John Doe',
        time: 'February 23, 11:45 PM',
        avatar: 'https://i.pravatar.cc/150?u=1',
        incoming: true,
        missed: false,
        video: false,
    },
    {
        id: '2',
        name: 'Emma Stone',
        time: 'February 22, 10:30 AM',
        avatar: 'https://i.pravatar.cc/150?u=7',
        incoming: false,
        missed: false,
        video: true,
    },
    {
        id: '3',
        name: 'Mike Ross',
        time: 'February 21, 8:15 PM',
        avatar: 'https://i.pravatar.cc/150?u=6',
        incoming: true,
        missed: true,
        video: false,
    },
];

const CallItem = ({ item }) => (
    <TouchableOpacity style={styles.itemContainer}>
        <Image source={{ uri: item.avatar }} style={styles.avatar} />
        <View style={styles.textContainer}>
            <Text style={styles.name}>{item.name}</Text>
            <View style={styles.callDetails}>
                <MaterialIcons
                    name={item.incoming ? 'call-received' : 'call-made'}
                    size={16}
                    color={item.missed ? '#FF0000' : '#25D366'}
                    style={styles.callIcon}
                />
                <Text style={styles.time}>{item.time}</Text>
            </View>
        </View>
        <MaterialIcons
            name={item.video ? 'videocam' : 'call'}
            size={24}
            color="#075E54"
        />
    </TouchableOpacity>
);

const CallsList = () => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.linkContainer}>
                <View style={styles.iconCircle}>
                    <MaterialIcons name="link" size={24} color="#fff" />
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.name}>Create call link</Text>
                    <Text style={styles.time}>Share a link for your WhatsApp call</Text>
                </View>
            </TouchableOpacity>

            <Text style={styles.sectionHeader}>Recent</Text>

            <FlatList
                data={CALLS_DATA}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => <CallItem item={item} />}
            />

            <TouchableOpacity style={styles.fab}>
                <MaterialIcons name="add-call" size={24} color="#fff" />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    linkContainer: {
        flexDirection: 'row',
        padding: 15,
        alignItems: 'center',
    },
    iconCircle: {
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: '#25D366',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 15,
    },
    textContainer: {
        flex: 1,
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    callDetails: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 2,
    },
    callIcon: {
        marginRight: 5,
    },
    time: {
        fontSize: 14,
        color: '#666',
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
    avatar: {
        width: 60,
        height: 60,
        borderRadius: 30,
        marginRight: 15,
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
    },
});

export default CallsList;
