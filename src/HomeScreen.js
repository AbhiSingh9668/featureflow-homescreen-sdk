import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

export default function HomeScreen({
  buttonColor = '#2563eb',
  title = 'Home Screen',
  buttonText = 'Test SDK',
  onPress,
}) {
  const handlePress = () => {
    if (onPress) {
      onPress()
    } else {
      console.warn('SDK test')
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <TouchableOpacity  style={[styles.button, { backgroundColor: buttonColor }]} onPress={handlePress}>
        <Text style={styles.buttonText}>{buttonText}</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f9fafb',
  },
  title: {
    fontSize: 22,
    fontWeight: '600',
    marginBottom: 16,
    color: '#1f2937',
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
  },
})
