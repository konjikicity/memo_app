import { createIconSetFromIcoMoon } from "@expo/vector-icons";
import { useFonts } from "expo-font";
import fontData from "../../../assets/fonts/icomoon.ttf";
import fontSelection from "../../../assets/fonts/selection.json";

const CustomIcon = createIconSetFromIcoMoon(
  fontSelection,
  "IcoMoon",
  "icomoon.ttf",
);

interface Props {
  name: string;
  color: string;
  size: number;
}

const Icon = (props: Props): JSX.Element | null => {
  const [fontLoaded] = useFonts({ IcoMoon: fontData });
  const { name, size, color } = props;

  if (!fontLoaded) {
    return null;
  }

  return <CustomIcon name={name} size={size} color={color} />;
};

export default Icon;
