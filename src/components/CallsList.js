import React from 'react';
import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Colors } from '../constants/Colors';

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
                    color={item.missed ? '#F0505C' : Colors.unreadBadge}
                    style={styles.callIcon}
                />
                <Text style={styles.time}>{item.time}</Text>
            </View>
        </View>
        <MaterialIcons
            name={item.video ? 'videocam' : 'call'}
            size={24}
            color={Colors.unreadBadge}
        />
    </TouchableOpacity>
);

const CallsList = () => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.linkContainer}>
                <View style={styles.iconCircle}>
                    <MaterialIcons name="link" size={24} color={Colors.background} />
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
                contentContainerStyle={{ paddingBottom: 100 }}
            />

            <TouchableOpacity style={styles.fab}>
                <MaterialIcons name="add-call" size={24} color={Colors.background} />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.background,
    },
    linkContainer: {
        flexDirection: 'row',
        padding: 16,
        alignItems: 'center',
    },
    iconCircle: {
        width: 52,
        height: 52,
        borderRadius: 26,
        backgroundColor: Colors.unreadBadge,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 15,
    },
    textContainer: {
        flex: 1,
    },
    name: {
        fontSize: 17,
        fontWeight: 'bold',
        color: Colors.textPrimary,
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
        color: Colors.textSecondary,
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
    avatar: {
        width: 52,
        height: 52,
        borderRadius: 26,
        marginRight: 15,
    },
    fab: {
        position: 'absolute',
        bottom: 24,
        right: 20,
        backgroundColor: Colors.unreadBadge,
        width: 56,
        height: 56,
        borderRadius: 16,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 5,
    },
});

export default CallsList;
