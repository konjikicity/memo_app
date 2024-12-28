import { View, StyleSheet } from "react-native";
import Header from "../../components/common/Header";
import MemoListItem from "../../components/MemoListItem";
import CircleButton from "../../components/common/CircleButton";
import { Feather } from "@expo/vector-icons";
import Icon from "../../components/common/Icon";

const List = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <Header />
      <MemoListItem />
      <CircleButton>
        <Icon name="plus" size={40} color="#FFFFFF" />
      </CircleButton>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
});
export default List;
