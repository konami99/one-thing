import { setStatusBarHidden } from "expo-status-bar"
import ScreenWrapper from "../../components/ScreenWrapper"
import { useAuth } from "../../contexts/AuthContext"
import { supabase } from "../../lib/supabase"
import { Alert, StyleSheet, Text, View } from "react-native"
import { hp, wp } from '../../helpers/common'
import { theme } from '../../constants/theme'
import Button from '../../components/Button'
import { ScrollView, Pressable } from "react-native"
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { useState } from "react"
import { Modal } from 'react-native'

const Home = () => {
  const { setAuth } = useAuth();
  const [modalVisible, setModalVisible] = useState(false);
  
  const onLogout = async() => {
    const { error } = await supabase.auth.signOut();
    if ( error) {
      Alert.alert('Sign out', 'Error signing out')
    }
  }

  const onPress = () => {
    setModalVisible(true);
  }

  return (
    <ScreenWrapper>
      <View style={styles.container}>
        <View style={styles.titleSection}>
          <Text style={styles.title}>Habits</Text>
          <Modal
            animationType="fade"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              setModalVisible(!modalVisible)
            }}>
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Text style={styles.modalText}>Hello World!</Text>
                <Pressable
                  style={[styles.button, styles.buttonClose]}
                  onPress={() => setModalVisible(!modalVisible)}>
                  <Text style={styles.textStyle}>Hide Modal</Text>
                </Pressable>
              </View>
            </View>
          </Modal>
          <Pressable onPress={onPress}>
            <FontAwesome5 name="plus" size={24} color="black" />
          </Pressable>
        </View>
        <View style={styles.header}>
          <Text>November</Text>
          <View style={styles.header.dates}>
            <View>
              <Text>19</Text>
              <Text>Tu</Text>
            </View>
            <View>
              <Text>19</Text>
              <Text>Tu</Text>
            </View>
            <View>
              <Text>19</Text>
              <Text>Tu</Text>
            </View>
            <View>
              <Text>19</Text>
              <Text>Tu</Text>
            </View>
            <View>
              <Text>19</Text>
              <Text>Tu</Text>
            </View>
            <View>
              <Text>19</Text>
              <Text>Tu</Text>
            </View>
            <View>
              <Text>19</Text>
              <Text>Tu</Text>
            </View>
          </View>
        </View>

        <ScrollView>
          <View style={styles.habitItem}>
            <Text>habit 1</Text>
          </View>
        </ScrollView>
      </View>
    </ScreenWrapper>
  )
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    height: hp(80),
    width: wp(90),
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },

  habitItem: {
    backgroundColor: theme.colors.primaryDark,
    height: hp(17),
    borderRadius: 20,
  },
  container: {
    flex: 1,
    paddingHorizontal: wp(5)
  },
  titleSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: hp(8),
    marginBottom: 20,
  },
  header: {
    flexDirection: 'row',
    height: hp(4),
    //alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 30,
    //marginHorizontal: wp(4)
    dates: {
      flexDirection: 'row',
      width: '60%',
      justifyContent: 'space-between',
      marginRight: 18,
    }
  },
  title: {
    //height: hp(8),
    color: theme.colors.text,
    fontSize: hp(5),
    fontWeight: theme.fonts.bold,
    //marginBottom: 20,
  },
  avatarImage: {
    height: hp(4.3),
    width: hp(4.3),
    borderRadius: theme.radius.sm,
    borderCurve: 'continuous',
    borderColor: theme.colors.gray,
    borderWidth: 3
  },
  icons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 18
  },
  listStyle: {
    paddingTop: 20,
    paddingHorizontal: wp(4)
  },
  noPosts: {
    fontSize: hp(2),
    textAlign: 'center',
    color: theme.colors.text
  },
  pill: {
    position: 'absolute',
    right: -10,
    top: -4,
    height: hp(2.2),
    width: hp(2.2),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    backgroundColor: theme.colors.roseLight
  },
  pillText: {
    color: 'white',
    fontSize: hp(1.2),
    fontWeight: theme.fonts.bold
  }
})

export default Home;