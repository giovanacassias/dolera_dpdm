import { View } from "react-native";
import { useEffect, useState } from "react";
import { colors } from "../../assets/theme/colors";
import MaterialIcons from "@react-native-vector-icons/material-icons";
import CategoryCheckBox from "./categoryCheckBox";


export default function ExpenseCategory() {
  const [check1, setCheck1] = useState(false);
  const [check2, setCheck2] = useState(false);
  const [check3, setCheck3] = useState(false);
  const [check4, setCheck4] = useState(false);
  const [check5, setCheck5] = useState(false);
  const [check6, setCheck6] = useState(false);
  const [check7, setCheck7] = useState(false);

  useEffect(() => {
    console.log("check atualizado:", check6);
  }, [check6]);

  return (
    <View className="bg-white flex-col items-center justify-evenly h-[420px] rounded-lg">

      <View className={`flex-row justify-between items-center w-11/12 h-15 rounded-lg ${check1 ? 'bg-white' : 'bg-white'}`}>
        <CategoryCheckBox title="Accommodation" check={check1} setCheck={setCheck1} icon={<MaterialIcons name="cottage" size={30} color={colors.darkGreen} />}/>
      </View>

      <View className={`flex-row justify-between items-center w-11/12 h-15 rounded-lg ${check2 ? 'bg-white' : 'bg-white'}`}>
        <CategoryCheckBox title="Transportation" check={check2} setCheck={setCheck2} icon={<MaterialIcons name="connecting-airports" size={30} color={colors.darkGreen} />}/>
      </View>

      <View className={`flex-row justify-between items-center w-11/12 h-15 rounded-lg ${check2 ? 'bg-white' : 'bg-white'}`}>
        <CategoryCheckBox title="Shopping" check={check3} setCheck={setCheck3} icon={<MaterialIcons name="shopping-bag" size={30} color={colors.darkGreen} />}/>
      </View>

      <View className={`flex-row justify-between items-center w-11/12 h-15 rounded-lg ${check2 ? 'bg-white' : 'bg-white'}`}>
        <CategoryCheckBox title="Food" check={check4} setCheck={setCheck4} icon={<MaterialIcons name="dinner-dining" size={30} color={colors.darkGreen} />}/>
      </View>

      <View className={`flex-row justify-between items-center w-11/12 h-15 rounded-lg ${check2 ? 'bg-white' : 'bg-white'}`}>
        <CategoryCheckBox title="Sightseeing" check={check5} setCheck={setCheck5} icon={<MaterialIcons name="landscape" size={30} color={colors.darkGreen} />}/>
      </View>

      <View className={`flex-row justify-between items-center w-11/12 h-15 rounded-lg ${check2 ? 'bg-white' : 'bg-white'}`}>
        <CategoryCheckBox title="Fees" check={check6} setCheck={setCheck6} icon={<MaterialIcons name="attach-money" size={30} color={colors.darkGreen} />}/>
      </View>

      <View className={`flex-row justify-between items-center w-11/12 h-15 rounded-lg ${check2 ? 'bg-white' : 'bg-white'}`}>
        <CategoryCheckBox title="Others" check={check7} setCheck={setCheck7} icon={<MaterialIcons name="wallet" size={30} color={colors.darkGreen} />}/>
      </View>
    </View>
  );
}
