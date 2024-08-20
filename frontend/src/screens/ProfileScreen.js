import { View, Text, StyleSheet } from 'react-native'
import {React,useState} from 'react'


// compoents
import Screen from '../components/Screen/Screen';
import ProfileImage from '../components/ProfileImage/ProfileImage';
import UserInfo from '../components/UserInfo/UserInfo';
import AppButton from '../components/Button/AppButton'





const ProfileScreen = ({navigation}) => {
  const [phone, setPhone] = useState('96034 56878');
  const [email, setEmail] = useState('test@abs.com');
  const [password, setPassword] = useState('******');




  const handleLogout = () => {
    // navigation.navigate("Login")l
    navigation.reset({
      index: 0,
      routes: [{ name: 'Login' }],
    });
  };


  return (
    
    <View style={styles.container}>
      <ProfileImage />
      <Text style={styles.name}>Md Ashfaque</Text>
      <UserInfo label="Phone Number" value={phone} onChangeText={setPhone} />
      <UserInfo label="Email" value={email} onChangeText={setEmail} />
      <UserInfo label="Password" value={password} onChangeText={setPassword} />
       <AppButton title="update" color="secondary"/>
       <AppButton title="Logout" onPress={handleLogout}/>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,

  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
  },
});

export default ProfileScreen