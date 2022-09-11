import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import { AuthProvider } from './source/context/AuthContext';
import Navigation from './source/navigation/navigation';


const App = () => {
  return (
    <AuthProvider>
      <Navigation />
    </AuthProvider>
  )
}

// const App = () => {
//   const [data, setData] = useState()

//   const getData = async () => {
//     try {
//       const res = await axios.get('https://newsapi.org/v2/top-headlines', {
//         params: {
//           country: 'us',
//           category: 'business',
//           apiKey: '71fe3cf2ed4046ed9999d86dfd8aa4ef'
//         }
//       });

//       setData(res.data.articles)

//     } catch (error) {
//       alert(error.message);
//     }
//   };

//   useEffect(() => {
//     getData()
//   }, [])


//   return (
//     <View>
//       <ScrollView>
//         {data && data.map((item, i) => {
//           return <View>
//             <View style={{ flexDirection: 'row', marginVertical: 10, marginHorizontal: 10 }}>
//               <Image
//                 style={{ width: 70, height: 70 }}
//                 source={{ uri: item.urlToImage }} />

//               <View style={{ justifyContent: 'space-between' }}>
//                 <Text style={{ fontWeight: '700' }}>{item.title}</Text>
//                 <Text>{item.author}</Text>
//               </View>

//             </View>
//           </View>;
//         })}
//       </ScrollView>
//     </View>
//   );
// }

export default App;