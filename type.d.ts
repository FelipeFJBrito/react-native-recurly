//Here is declared all the other types, we are telliing Typescript that we work with images
import type { ImageSourcePropType } from "react-native";

//starting with image
declare global{
    interface TabIconProps {
        focused: boolean;
        icon: ImageSourcePropType;
    }
}

export {};