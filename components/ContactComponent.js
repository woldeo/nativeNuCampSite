import React, { Component } from "react";
import { ScrollView, Text } from "react-native";
import { Card } from "react-native-elements";

class Contact extends Component {
  static navigationOptions = {
    title: "Contact Us",
  };

  render() {
    return (
      <ScrollView>
        <Card title="Contact Information" wrapperStyle={{ margin: 20 }}>
          <Text>1 Nucamp Way</Text>
          <Text>Seatt, WA 98001</Text>
          <Text>U.S.A</Text>
          <Text />
          <Text>Phone: 1-206-555-1234</Text>
          <Text style={{ marginBottom: 10 }}>Email: campsites@nucamp.co</Text>
        </Card>
      </ScrollView>
    );
  }
}

export default Contact;
