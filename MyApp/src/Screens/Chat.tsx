
import React, { useState } from "react";
import { View, Text, TextInput, FlatList, TouchableOpacity, KeyboardAvoidingView, Platform } from "react-native";
import { Ionicons } from "@expo/vector-icons"; // or use react-native-vector-icons
import Header from "../Components/Header";

const ChatScreen = () => {
  const [messages, setMessages] = useState([
    { id: "1", text: "Hi, I need help!", sender: "user" },
    { id: "2", text: "Sure! How can I help you?", sender: "seller" },
  ]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (input.trim()) {
      setMessages([...messages, { id: Date.now().toString(), text: input, sender: "user" }]);
      setInput("");
    }
  };

  const renderMessage = ({ item }) => (
    <View style={{ alignSelf: item.sender === "user" ? "flex-end" : "flex-start", backgroundColor: item.sender === "user" ? "#dcf8c6" : "#f0f0f0", borderRadius: 10, margin: 5, padding: 10 }}>
      <Text>{item.text}</Text>
    </View>
  );

  return (
    <KeyboardAvoidingView style={{ flex: 1 ,backgroundColor:'#fff'}} behavior={Platform.OS === "ios" ? "padding" : undefined}>
      <View style={{ flex: 1 }}>
        <Header title="Fashion Seller" showHeart={false} />

        {/* Message List */}
        <FlatList
          data={messages}
          renderItem={renderMessage}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{ padding: 10 }}
        />

        {/* Input */}
        <View style={{ flexDirection: "row", alignItems: "center", padding: 10 }}>
          <TextInput
            style={{ flex: 1, borderWidth: 1, borderColor: "#F16023", borderRadius: 20, paddingHorizontal: 15,paddingVertical:15 }}
            placeholder="Type a message"
            value={input}
            onChangeText={setInput}
          />
          <TouchableOpacity onPress={sendMessage} style={{ marginLeft: 10 }}>
            <Ionicons name="send" size={24} color="#F16023" />
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default ChatScreen;
