import React, { Component } from 'react';
import { ListItem } from 'react-native-elements';
import { StyleSheet, Text, View } from 'react-native';

const list_rest_url = "http://staging.chinmayamission.com/wp-json/gcmw/v1/acharya-list";
const image_url = "http://www.chinmayamission.com/wp-content/uploads/acharya_images/";

export default class Acharyas extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }

    componentDidMount() {
        console.log("starting the page");
        this.requestData();
        // this.setState(
        // {data:
        //     [
        //         {
        //             "id": "3",
        //             "salutation": "Swami",
        //             "aname": "Swami",
        //             "last_name": "Advaitananda",
        //             "email": "swamiadvaita@gmail.com",
        //             "phone": "+1-408-2548392",
        //             "image": "5.jpg",
        //             "city": "San Jose"
        //         },
        //         {
        //             "id": "10",
        //             "salutation": "Swami",
        //             "aname": "Swami",
        //             "last_name": "Raghavananda",
        //             "email": "sw.raghavananda@gmail.com",
        //             "phone": "--",
        //             "image": "25.jpg",
        //             "city": "Bhopal"
        //         },
        //         {
        //             "id": "14",
        //             "salutation": "Swami",
        //             "aname": "Swami",
        //             "last_name": "Sarvagananda",
        //             "email": "sarvagananda.chinmaya@gmail.com",
        //             "phone": "+919490366879 / +91 - 866 - 2476 762 / 2470 794",
        //             "image": "34.JPG",
        //             "city": "VIJAYAWADA"
        //         },
        //         {
        //             "id": "15",
        //             "salutation": "Br",
        //             "aname": "Br",
        //             "last_name": "Hrishikesh Chaitanya",
        //             "email": "acharyas@chinmayamission.in",
        //             "phone": "+91 - 8592 - 245326 / 280247 / 9848973129",
        //             "image": "36.JPG",
        //             "city": "ONGOLEPRAKASAM DIST"
        //         },
        //         {
        //             "id": "16",
        //             "salutation": "Swami",
        //             "aname": "Swami",
        //             "last_name": "Anantananda",
        //             "email": "swamianantananda@gmail.com, prasadchait@gmail.com",
        //             "phone": "+91 - 891 - 2755151 / 9989177177",
        //             "image": "37.jpg",
        //             "city": "Visakhapatanam"
        //         },
        //         {
        //             "id": "17",
        //             "salutation": "Swami",
        //             "aname": "Swami",
        //             "last_name": "Swaprakashananda",
        //             "email": "acharyas@chinmayamission.in",
        //             "phone": "+91 - 8578 - 222 357 / 94404 52464",
        //             "image": "39.JPG",
        //             "city": "CHITTOOR DIST."
        //         },
        //         {
        //             "id": "19",
        //             "salutation": "Br",
        //             "aname": "Br",
        //             "last_name": "Vamsi Chaitanya",
        //             "email": "cmvamsi@gmail.com",
        //             "phone": "9491174604",
        //             "image": "IMG_20170118_112218_987.jpg",
        //             "city": "Vizianagaram "
        //         },
        //         {
        //             "id": "20",
        //             "salutation": "Swami",
        //             "aname": "Swami",
        //             "last_name": "Satyatmananda",
        //             "email": "acharyas@chinmayamission.in",
        //             "phone": "+91 - 8592 - 280247 / 9849140653",
        //             "image": "42.JPG",
        //             "city": "ONGOLE"
        //         },
        //         {
        //             "id": "21",
        //             "salutation": "Swami",
        //             "aname": "Swami",
        //             "last_name": "Atmavidananda",
        //             "email": "vishrutanant@gmail.com",
        //             "phone": "+91 - 8554 - 247251",
        //             "image": "43.jpg",
        //             "city": "ANANTPUR"
        //         },
        //         {
        //             "id": "22",
        //             "salutation": "Swamini",
        //             "aname": "Swamini",
        //             "last_name": "Rajitananda",
        //             "email": "brarchita@gmail.com",
        //             "phone": "+91- 866-2430557 / 94906 893",
        //             "image": "44.JPG",
        //             "city": "VIJAYAWADA"
        //         }
        //     ]
        // });
    
    }

    requestData = () => {
        console.log("starting request");
        fetch(list_rest_url)
            .then(res => res.json())
            .then(res => {
                console.log(res)
                this.setState({
                    data: res,
                })
            })
    }

    render() {
        return (
            <View>
            {
                this.state.data.map((l, i) => (
                    <ListItem
                        //onPress = {() => navigate()} //navigate to a modal
                        key={i}
                        avatar={image_url + l.image}
                        title={l.aname + " " + l.last_name}
                        subtitle={l.city}
                    />
                ))
            }
            </View>
        )
    }


}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });