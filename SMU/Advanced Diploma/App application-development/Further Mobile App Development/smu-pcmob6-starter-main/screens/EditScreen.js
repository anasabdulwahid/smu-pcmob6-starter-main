import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { commonStyles, lightStyles,darkStyles } from "../styles/commonStyles";
import { useSelector } from "react-redux";
import  { useState } from "react";

export default function EditScreen({ navigation }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const token = useSelector((state) => state.auth.token);
  const isDark = useSelector((state) => state.accountPrefs.isDark);
  const styles = { ...commonStyles, ...(isDark ? darkStyles : lightStyles) };

 // useEffect(() => {
  //  const post = route.params.post

  return (
    <View style={styles.container}>
      <Text style={[styles.text, styles.title, { marginTop: 20 }]}>
        Edit Screen
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({});
