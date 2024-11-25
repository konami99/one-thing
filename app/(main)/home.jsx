import { setStatusBarHidden } from "expo-status-bar"
import ScreenWrapper from "../../components/ScreenWrapper"
import { useAuth } from "../../contexts/AuthContext"
import { supabase } from "../../lib/supabase"
import { StyleSheet, Text, View } from "react-native"
import { hp, wp } from '../../helpers/common'
import { theme } from '../../constants/theme'
import Button from '../../components/Button'

const Home = () => {
  const { setAuth } = useAuth();
  
  const onLogout = async() => {
    const { error } = await supabase.auth.signOut();
    if ( error) {
      Alert.alert('Sign out', 'Error signing out')
    }
  }

  return (
    <ScreenWrapper>
      <View style={styles.container}>
        <Text style={styles.title}>Habits</Text>
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
      </View>
    </ScreenWrapper>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: wp(5)
  },
  header: {
    flexDirection: 'row',
    height: hp(4),
    //alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
    //marginHorizontal: wp(4),
    dates: {
      flexDirection: 'row',
      width: '65%',
      justifyContent: 'space-between',
    }
  },
  title: {
    color: theme.colors.text,
    fontSize: hp(5),
    fontWeight: theme.fonts.bold,
    marginBottom: 20,
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