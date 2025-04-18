import React from 'react';
import { View, Text, ScrollView, Image, TextInput, StyleSheet } from 'react-native';

const CoreComponentsApp = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image source={require('./assets/icon.png')} style={styles.logo} />
        <Text style={styles.headerText}>MSCS Courses</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your favorite course"
        />
      </View>

      <View style={styles.courseList}>
        <Text style={styles.courseTitle}>Core Requirements (24 Credits): </Text>
        <Text> CS 504 Software Engineering  </Text>
        <Text> CS 506 Programming for Computing  </Text>
        <Text> CS 519 Cloud Computing Overview  </Text>
        <Text> CS 533 Computer Architecture  </Text>
        <Text> CS 547 Secure Systems and Programs  </Text>
        <Text> CS 622 Discrete Math and Algorithms for Computing  </Text>
        <Text> DS 510 Artificial Intelligence for Data Science  </Text>
        <Text> DS 620 Machine Learning & Deep Learning </Text>

        <Text style={styles.courseTitle}>Depth of Study (6 Credits):</Text>
        <Text>CS 624 Full-Stack Development - Mobile App </Text>
        <Text>CS 628 Full-Stack Development - Web Application </Text>

        <Text style={styles.courseTitle}>Capstone Course:</Text>
        <Text> Capstone Project</Text>
        
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 10,
    paddingLeft: 10,
  },
  courseList: {
    marginTop: 20,
  },
  courseTitle: {
    backgroundColor : 'yellow',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  
});

export default CoreComponentsApp;