import { StatusBar } from "expo-status-bar";
import { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons'; 

// import { Entypo } from "@expo/vector-icons";

export default function Home() {
  const [data, setData] = useState([
    {
      key: 0,
      title: "Big Mac",
      image:
        "https://s7d1.scene7.com/is/image/mcdonalds/DC_201907_0005_BigMac_832x472:1-3-product-tile-desktop?wid=765&hei=472&dpr=off",
      ratings: "4.3",
      wishlist: 1,
      price: "650 Rs",
      isliked: true,
    },
    {
      key: 1,
      title: "McCrispy",
      image:
        "https://www.seekpng.com/png/detail/79-790691_hamburger-burger-png-image-mac-burger-crispy-chicken.png",
      ratings: "4.5",
      wishlist: 2,
      price: "550 Rs",
      isliked: false,
    },
    {
      key: 2,
      title: "Zinger Burger",
      image:
        "https://www.seekpng.com/png/detail/36-365813_burger-png-for-free-download-on-chicken-burger.png",
      ratings: "3.5",
      wishlist: 3,
      price: "400 Rs",
      isliked: false,
    },
    {
      key: 3,
      title: "Lava Burger",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrpnhzjAhy9A0H47b9cCT4xO9AbnIeZ60dIg&usqp=CAU",
      ratings: "4.2",
      wishlist: 4,
      price: "800 Rs",
      isliked: false,
    },
    {
      key: 4,
      title: "FireHouse",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpOvK5LqMx-20ZFXBVmbpWtz_j_vi6cMC8s5co4TulzavI3SGq25XlPfjVa1xUSdGW8aM&usqp=CAU",
      ratings: "4.1",
      wishlist: 4,
      price: "600 Rs",
      isliked: false,
    },
    {
      key: 5,
      title: "The Butcher",
      image:
        "https://imageproxy.wolt.com/menu/menu-images/573202ea-0926-11ea-8910-0a5864673712_double_whopper.jpeg",
      ratings: "3.7",
      wishlist: 4,
      price: "800 Rs",
      isliked: false,
    },
    {
      key: 6,
      title: "MonsterBurger",
      image:
        "https://www.seekpng.com/png/detail/79-790713_kfc-burger-png-image-with-transparent-background-kfc.png",
      ratings: "3.6",
      wishlist: 4,
      price: "1250 Rs",
      isliked: false,
    },
  ]);

  const categories = [
    {
      id: 0,
      title: "Burger",
      image:
        "https://media.istockphoto.com/id/1356778093/fr/vectoriel/d%C3%A9licieux-burger-logo-plat-ic%C3%B4ne-ic%C3%B4ne-vecteur.jpg?s=612x612&w=0&k=20&c=XQYyWe7FuTcitFmBKk_0IjCCTvCi0yYyF-lck0GKoJc=",
    },
    {
      id: 1,
      title: "Kebab",
      image:
        "https://i.pinimg.com/originals/a3/16/47/a31647436824d363b9db03df41d0f231.jpg",
    },
    {
      id: 2,
      title: "Fried",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNKudfWytv9F47URbrCzRO8NKUAtI0_1xc_g&usqp=CAU",
    },
  ];

  let bestSeller = [];
  //taking even entries into best seller
  for (let index = 0; index < data.length; index++) {
    const element = data[index];
    if (element.key % 2 == 0) {
      bestSeller.push(element);
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.view1}>
        <View>
          <Text style={{ fontSize: 22, marginTop: "10%", marginLeft: "5%" }}>
            Hello Tajammal Shah
          </Text>
        </View>

        <View>
          <Text
            style={{
              fontSize: 24,
              fontWeight: "bold",
              marginTop: "3%",
              marginLeft: "5%",
            }}
          >
            Choose your favourite food
          </Text>
        </View>

        <View style={{display:"flex",flexDirection:"row",marginRight:20,marginVertical:20,paddingLeft:25}}>

        <View style={{backgroundColor:"#fff" , height:50,width: 285,borderRadius:12 }}>
       
         <View style={{margin:10,display:"flex",flexDirection:"row"}}>
         <MaterialCommunityIcons name="magnify" size={28} color="grey"  />

           <TextInput style={{marginLeft:10,width:"90%"}} />
         </View>

        </View>

        <TouchableOpacity>
        <View style={{backgroundColor:"#fd003f",width:40,height:40,marginHorizontal:25,marginVertical:7 ,justifyContent:"center",alignItems:"center",borderRadius:10}}>
        <Ionicons name="options" size={24} color="black" />
        </View>
        </TouchableOpacity>
        </View>

        
        <HeadingBar text={"Food Category"} />

        <View
          style={{
            // backgroundColor:"green",
            height:100,
            marginBottom:10,
            paddingLeft:25
          }}
        >
          <FlatList
            data={categories}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => <CategoryCard item={item} />}
            keyExtractor={(item) => item.id}
          />
        </View>

      </View>

      <View style={styles.view2}>

      <HeadingBar text={"Popular Food"}  />

        <View style={styles.mainBox}>
          <FlatList
            data={data}
            horizontal={true}
            keyExtractor={(item) => item.key}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => <Burgers item={item} />}
          />
        </View>
      </View>

      <View style={styles.view3}>
        <View style={{ flex: 0.2 }}>
          <Text
            style={{
              fontSize: 22,
              fontWeight: "bold",
              marginLeft: "7%",
              marginTop: "2%",
            }}
          >
            Best Seller
          </Text>
        </View>

        <View style={{ flex: 0.6 }}>
          <FlatList
            data={bestSeller}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.key}
            renderItem={({ item }) => <BestBurgers item={item} />}
          />
        </View>
      </View>
    </View>
  );
} 

//code for 1st flat list of categories
const CategoryCard = ({ item }) => {
  return (
    <TouchableOpacity>
      <View
        style={{
          backgroundColor: "#fff",
          width: 150,
          height:50,
          marginVertical: 10,
          marginRight:10,
          borderRadius: 10,
          flexDirection: "row",
          alignItems: "center",
         
        }}
      >
        <Image source={{ uri: item.image }} style={{ width: 60, height: 30 }} />
        <Text
          style={{
            alignItems:"center",
            fontSize: 22,
            fontWeight: "bold",
          }}
        >
          {item.title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

//  code for 2nd flat list of popular foods
const Burgers = ({ item }) => {
  const [Item, setItem] = useState(item);

  const handleLike = () => {
    // Create a copy of the object and toggle the isLiked property
    item.isliked = !item.isliked;
    const updatedItem = { ...Item, isliked: !Item.isliked };
    setItem(updatedItem); // Update the state variable
  };

  return (
    <TouchableOpacity style={styles.item}>
      <View style={{ flex: 1 ,borderRadius:10}}>
        <View style={styles.ratingbar}>
          <AntDesign
            name="staro"
            size={18}
            color="silver"
          />
          <Text style={{ fontSize: 16, fontWeight: "bold" }}>
            {item.ratings}{" "}
          </Text>

          <TouchableOpacity onPress={handleLike}>
            <AntDesign
              name="heart"
              size={24}
              color={item.isliked ? "red" : "grey"}
              style={{ marginLeft: 60 }}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.picture}>
          <Image
            source={{ uri: item.image }}
            style={{ padding: 10, width: "100%", height: "100%" }}
          />
        </View>

        <View style={styles.namebar}>
          <Text style={{ fontSize: 22, fontWeight: "bold" }}>{item.title}</Text>
        </View>

        <View style={styles.pricebar}>
          <Text style={{ marginTop: 5, fontSize: 18 }}>{item.price}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

//code for 3rd flatlist of Best Sellers
const BestBurgers = ({ item }) => {
  const [Item, setItem] = useState(item);

  const handleLike = () => {
    // Create a copy of the object and toggle the isLiked property
    item.isliked = !item.isliked;
    const updatedItem = { ...Item, isliked: !Item.isliked };
    setItem(updatedItem); // Update the state variable
  };

  return (
    <TouchableOpacity>
      <View
        style={{
          flex: 1,
          width: 355,
          height: 170,
          backgroundColor: "#fefefe",
          margin: 30,
          borderRadius: 12,
          flexDirection: "row",
        }}
      >
        <View
          style={{
            flex: 0.35,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
            source={{ uri: item.image }}
            style={{ width: 110, height: 85, marginLeft: 16 }}
          />
        </View>

        <View
          style={{
            flex: 0.55,
            justifyContent: "center",
            padding: 15,
            marginLeft: 16,
            // backgroundColor: "red",
          }}
        >
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>{item.title}</Text>

          <Text style={{ fontSize: 16 }}>{item.price}</Text>
        </View>

        <View style={{ flex: 0.2 }}>
          <View
            style={{
              flex: 0.5,
              flexDirection: "column",
              alignItems: "flex-end",
              // backgroundColor: "yellow",
            }}
          >
            <TouchableOpacity style={{ margin: 12 }} onPress={handleLike}>
              <AntDesign
                name="heart"
                size={22}
                color={item.isliked ? "red" : "grey"}
              />
            </TouchableOpacity>
          </View>

          <View
            style={{ flex: 0.5, flexDirection: "column", alignItems: "center" }}
          >
            <View
              style={{
                margin: 0,
                flex: 1,
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <AntDesign name="staro" size={16} color="black" />

              <Text style={{ fontSize: 18, margin: 7 }}>{item.ratings}</Text>
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const HeadingBar =({text},)=>{
  return(
    <View style={[styles.b2]}>
    <Text
      style={{
        marginLeft: 30,
        fontWeight: "bold",
        fontSize: 20,
      }}
    >
      {text}
    </Text>

    <TouchableOpacity style={{ marginRight: 20 }}>
      <Text style={{ fontSize: 15, marginRight: 15,fontWeight:"500" }}>See all</Text>
    </TouchableOpacity>
  </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f3f4f8",
    // alignItems: "center",
    // justifyContent: "center",
  },
  view1: {
    flex: 0.4,
    // backgroundColor: "red",
  },
  view2: {
    flex: 0.3,
    // backgroundColor: "red",
  },
  view3: {
    flex: 0.3,
    // backgroundColor: "blue",
    marginTop: "3%",
  },
  mainBox: {
    flex: 1,
    height: "100%",
    width: "100%",
    paddingLeft:20,
    // backgroundColor: "orange",
  },
  item: {
    padding: 5,
    // backgroundColor: "green",
    width: 150,
    border: 3,
    flex: 0.9,
    marginLeft:15,
    backgroundColor: "white",
  },
  b2: {
    // backgroundColor: "yellow",
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    marginBottom:15,
    alignItems:"center"
  },
  ratingbar: {
    flex: 0.15,
    flexDirection: "row",
    // backgroundColor: "orange",
    alignItems: "center",
    borderRadius:10
  },
  picture: {
    flex: 0.55,
    // backgroundColor: "cyan",
  },
  namebar: {
    flex: 0.15,
    // backgroundColor: "grey",

    alignContent: "center",
    alignItems: "center",
  },
  pricebar: {
    flex: 0.15,
    // backgroundColor: "magenta",

    alignContent: "center",
    alignItems: "center",
  },

  bseller: {
    backgroundColor: "grey",
  },
});

export {Home};