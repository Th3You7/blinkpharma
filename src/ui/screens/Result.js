import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { question } from "../../assets/question";
import { MainContext } from "../../providers/Provider";
import Container from "../components/Container";

export default function Result() {
  const {
    state: { answer },
  } = useContext(MainContext);
  const { rightAnswer, options } = question;
  return (
    <Container>
      <Text style={styles.heading}>Result</Text>
      <Text>
        {answer == rightAnswer
          ? `Your Answer is Right`
          : `Your Answer is
        Wroooooong!`}
      </Text>
    </Container>
  );
}

const styles = StyleSheet.create({
  heading: {
    fontSize: 32,
    marginBottom: 24,
  },
});
