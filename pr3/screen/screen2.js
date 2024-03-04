import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Animated } from 'react-native';

export default function App() {
    const position = new Animated.ValueXY({x: 0, y: 0})
    Animated.spring(position, {
        toValue: {x: 200, y: 500},
        // duration: 5000,
        // speed: 2,
        bounciness: 600,
        useNativeDriver: true
    }).start();

  return (
    <View style={styles.container}>
        <View style={{width: '100%', height: 50, borderWidth: 1, borderColor: '#ccc', alignItems: 'center', justifyContent: 'center'}}>
            <TouchableOpacity style={{width: 200, height: 40, backgroundColor: 'pink', justifyContent: 'center', alignItems: 'center'}}>
                <Text>Next Screen</Text>
            </TouchableOpacity>
        </View>
        <View style={{height: '100%', width: '100%'}}>
            <Animated.View 
                // style={styles.box}
                style={[{transform: 
                    [
                        {translateX: position.x},
                        {translateY: position.y}
                    ]}, styles.box]}
            >
                <View></View>
            </Animated.View>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  box: {
    height: 80, 
    width: 80,
    backgroundColor: 'red',
    
    // transform: 
    // [
    //     {translateX: position.x},
    //     {translateY: position.y}
    // ]
    }
});
