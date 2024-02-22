import { View, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import TopHeader from '../components/common/TopHeader'

export default function MyAccountScreen() {
  return (
    <SafeAreaView className='px-5'>
      <TopHeader title='Meu Perfil' />
    </SafeAreaView>
  )
}