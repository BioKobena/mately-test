import { TouchableOpacity, Text, View } from 'react-native'
import { buttonStyle } from '@/styles/styles'

type SimulateProps = {
  handleCreateTask: () => void;
}

const Simulate = ({ handleCreateTask }: SimulateProps) => (
  <View style={buttonStyle.container}>
    <TouchableOpacity style={buttonStyle.buttonPress} onPress={handleCreateTask} activeOpacity={0.7}>
      <Text style={buttonStyle.textButton}>Simulate</Text>
    </TouchableOpacity>
  </View>
)

export default Simulate