import { View, Text, StyleSheet } from "react-native";
import Header from "../components/common/Header";
import MemoListItem from "../components/MemoListItem";
import CircleButton from "../components/common/CircleButton";

const Index = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <Header />
      <MemoListItem />
      <CircleButton>+</CircleButton>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
});
export default Index;
