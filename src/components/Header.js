import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { MaterialIcons, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { Colors } from '../constants/Colors';

const Header = () => {
    return (
        <View style={styles.container}>
            <View style={styles.topRow}>
                <Text style={styles.logo}>WhatsApp</Text>
                <View style={styles.iconGroup}>
                    <TouchableOpacity style={styles.iconButton}>
                        <MaterialIcons name="photo-camera" size={24} color={Colors.textPrimary} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.iconButton}>
                        <MaterialIcons name="search" size={24} color={Colors.textPrimary} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.iconButton}>
                        <MaterialIcons name="more-vert" size={24} color={Colors.textPrimary} />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.searchBarContainer}>
                <View style={styles.searchBar}>
                    <MaterialIcons name="search" size={20} color={Colors.textSecondary} />
                    <Text style={styles.searchPlaceholder}>Search...</Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.background,
        paddingTop: 10,
    },
    topRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingVertical: 12,
    },
    logo: {
        color: Colors.textPrimary,
        fontSize: 24,
        fontWeight: '700',
    },
    iconGroup: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    iconButton: {
        marginLeft: 20,
    },
    searchBarContainer: {
        paddingHorizontal: 16,
        paddingVertical: 10,
    },
    searchBar: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#202C33',
        paddingHorizontal: 15,
        paddingVertical: 8,
        borderRadius: 25,
    },
    searchPlaceholder: {
        color: Colors.textSecondary,
        marginLeft: 10,
        fontSize: 16,
    },
});

export default Header;
