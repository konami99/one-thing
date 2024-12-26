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
import { useRef, useState } from "react"
import { Modal, TextInput } from 'react-native'
import { TrueSheet } from "@lodev09/react-native-true-sheet"

const Home = () => {
  const { user } = useAuth();
  const [modalVisible, setModalVisible] = useState(false);
  const sheet = useRef(null);

  const present = async () => {
    await sheet.current?.present();
  }

  const dismiss = async () => {
    await sheet.current?.dismiss();
  }
  
  const onLogout = async() => {
    const { error } = await supabase.auth.signOut();
    if ( error) {
      Alert.alert('Sign out', 'Error signing out')
    }
  }

  const onPress = () => {
    setModalVisible(true);
  }

  const onSubmit = async() => {
    //console.log(user.id)
    /*
    const { data, error } = await supabase
      .from('Goal')
      .select()
      .eq('userId', user.id)
    */
    console.log('insert')
    const { data, error } = await supabase
      .from('Goal')
      .insert({
        name: 'Jump',
        createdAt: new Date(),
        updatedAt: new Date(),
        frequency: 3,
        minCount: 3,
        minUnit: 'pages',
        frequencyRange: 1,
        streak: 0,
        count: 0,
        color: 'white',
        enabled: true,
        userId: user.id,
      })
      .select()
    console.log(error)
    console.log(data)
  }

  return (
    <ScreenWrapper>
      <View style={styles.container}>
        <View style={styles.titleSection}>
          <Text style={styles.title}>Habits</Text>
          <TrueSheet
            ref={sheet}
            sizes={['auto', 'large']}
            cornerRadius={24}
          >
           
            <Text style={styles.modalText}>I want to</Text>
            <View
              pagingEnabled={true}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              style={styles.inputView}
            >
              <TextInput
                style={styles.inputItem}
                placeholder="Activity"
              />
              <Text style={styles.inputItem}>Drink water</Text>
            </View>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>Hide Modal</Text>
            </Pressable>
            <Button 
              title="Getting Started" 
              buttonStyle={{marginHorizontal: wp(3)}} 
              onPress={onSubmit}
            />
            <Button onPress={dismiss} title="Dismiss" />
          </TrueSheet>
          <Pressable onPress={present}>
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
  inputItem: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ccc',
    height: 40,
    marginRight: 12,
    borderWidth: 1,
    padding: 10,
    width: wp(20),
    textAlign: 'center',
    backgroundColor: 'white',
    borderRadius: 15,
    borderWidth: 3,
    borderColor: theme.colors.primaryDark,
  },
  inputView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
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
    //alignItems: 'center',
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
    fontSize: hp(4),
    textAlign: 'left'
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