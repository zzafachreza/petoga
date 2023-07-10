import { Alert, StyleSheet, Text, View, Image, FlatList, ActivityIndicator, Dimensions, ImageBackground, TouchableWithoutFeedback, TouchableNativeFeedback, Linking, BackHandler } from 'react-native'
import React, { useState, useEffect, useRef } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { apiURL, getData, MYAPP, storeData } from '../../utils/localStorage';
import { colors, fonts, windowHeight, windowWidth } from '../../utils';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { Icon } from 'react-native-elements/dist/icons/Icon';
import { useIsFocused } from '@react-navigation/native';
import axios from 'axios';
import 'intl';
import 'intl/locale-data/jsonp/en';
import moment from 'moment';
import 'moment/locale/id';
import MyCarouser from '../../components/MyCarouser';

export default function Home({ navigation, route }) {

  const [user, setUser] = useState({});
  const isFocus = useIsFocused();
  const [data, setData] = useState([]);
  const [open, setOpen] = useState(false);
  const [comp, setComp] = useState({});

  const _getTransaction = async () => {
    axios.post(apiURL + 'company').then(res => {

      setComp(res.data.data);

    });
  }


  useEffect(() => {
    if (isFocus) {
      _getTransaction();
    }
  }, [isFocus]);

  const __renderItem = ({ item }) => {
    return (
      <TouchableWithoutFeedback onPress={() => navigation.navigate('InfoPdf', item)}>
        <View style={{
          flex: 1,
          width: 170,
          height: 120,
          padding: 10,
          borderWidth: 1,
          borderRadius: 10,
          borderColor: colors.primary,
          margin: 5,
        }}>
          <Image source={{
            uri: item.image
          }} style={{
            width: '100%',
            height: 60,
            resizeMode: 'contain',
            marginBottom: 10,
          }} />
          <Text style={{
            fontFamily: fonts.secondary[600],
            fontSize: 12,
            textAlign: 'center'
          }}>{item.nama_rs}</Text>
        </View>
      </TouchableWithoutFeedback>
    )
  }


  return (

    <SafeAreaView style={{
      flex: 1,
      backgroundColor: colors.white
    }}>
      <View style={{
        padding: 20,
        backgroundColor: colors.white,
        flexDirection: 'row'
      }}>
        <View style={{
          flex: 1,
        }}>
          <Text style={{
            fontFamily: fonts.secondary[400],
            fontSize: 16,
            color: colors.black
          }}>Selamat datang di PETOGA</Text>
        </View>
        <TouchableNativeFeedback onPress={() => Alert.alert(MYAPP, 'Kamy yakin akan keluar aplikasi ?', [
          { text: 'TIDAK' },
          {
            text: 'KELUAR',
            onPress: () => {
              BackHandler.exitApp();
            }
          }
        ])}>
          <Image source={require('../../assets/exit.png')} style={{
            width: 50,
            height: 50
          }} />
        </TouchableNativeFeedback>
      </View>
      <MyCarouser />


      <View style={{
        flex: 1,
        justifyContent: 'center',
      }}>
        <View style={{
          flexDirection: 'row'
        }}>
          <TouchableNativeFeedback onPress={() => navigation.navigate('Materi', {
            judul: 'Daftar Tanaman',
            kategori: 'Tanaman'
          })}>
            <View style={{
              margin: 10,
              backgroundColor: colors.primary,
              borderRadius: 10,
              flex: 1,
              padding: 20,
              justifyContent: 'center',
              alignItems: 'center'
            }}>
              <Image source={require('../../assets/A1.png')} style={{
                width: 100,
                height: 100
              }} />
              <Text style={{
                marginTop: 10,
                fontFamily: fonts.secondary[600],
                fontSize: 15,
                color: colors.white
              }}>Daftar Tanaman</Text>
            </View>
          </TouchableNativeFeedback>
          <TouchableNativeFeedback onPress={() => navigation.navigate('Materi', {
            judul: 'Daftar Penyakit',
            kategori: 'Penyakit'
          })}>
            <View style={{
              margin: 10,
              backgroundColor: colors.secondary,
              borderRadius: 10,
              flex: 1,
              padding: 20,
              justifyContent: 'center',
              alignItems: 'center'
            }}>
              <Image source={require('../../assets/A2.png')} style={{
                width: 100,
                height: 100
              }} />
              <Text style={{
                marginTop: 10,
                fontFamily: fonts.secondary[600],
                fontSize: 15,
                color: colors.white
              }}>Daftar Penyakit</Text>
            </View>
          </TouchableNativeFeedback>

        </View>
        <View style={{
          flexDirection: 'row'
        }}>
          <TouchableNativeFeedback onPress={() => navigation.navigate('Materi', {
            judul: 'Cara Penggunaan',
            kategori: 'Penggunaan'
          })}>
            <View style={{
              margin: 10,
              backgroundColor: colors.secondary,
              borderRadius: 10,
              flex: 1,
              padding: 20,
              justifyContent: 'center',
              alignItems: 'center'
            }}>
              <Image source={require('../../assets/A3.png')} style={{
                width: 100,
                height: 100
              }} />
              <Text style={{
                marginTop: 10,
                fontFamily: fonts.secondary[600],
                fontSize: 15,
                color: colors.white
              }}>Cara Penggunaan</Text>
            </View>
          </TouchableNativeFeedback>
          <TouchableNativeFeedback onPress={() => navigation.navigate('Pencarian')}>
            <View style={{
              margin: 10,
              backgroundColor: colors.primary,
              borderRadius: 10,
              flex: 1,
              padding: 20,
              justifyContent: 'center',
              alignItems: 'center'
            }}>
              <Image source={require('../../assets/A4.png')} style={{
                width: 100,
                height: 100
              }} />
              <Text style={{
                marginTop: 10,
                fontFamily: fonts.secondary[600],
                fontSize: 15,
                color: colors.white
              }}>Pencarian</Text>
            </View>
          </TouchableNativeFeedback>

        </View>
      </View>





    </SafeAreaView >
  )
}

const styles = StyleSheet.create({})