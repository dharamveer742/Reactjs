import React from "react";
import ReactDOM  from "react-dom/client";





const root = ReactDOM.createRoot(document.getElementById("root"));

/*
header
    logo
    home
    about us 
    cart 
body
    seacrh
    restaurant cards
        name
        image
        rating 
        cusines
footer
    addresses
    copyright


*/
const Header = ()=>{
    return(
        <div className="header">
           <a href="/"> <img alt="error" src="https://e0.pxfuel.com/wallpapers/174/289/desktop-wallpaper-printable-customizable-restaurant-logo-templates-food-logo.jpg"></img></a>
            <div className="navItems">
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>cart</li>
                </ul>
            </div>
        </div>
    )
}

/*const RestaurantCard = ()=>(
    <div className="card">
        <img src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/"+restaurantList[0].data.cloudinaryImageId}></img>
        <h4>{restaurantList[0].data?.name}</h4>
        <h5>{restaurantList[0].data.cuisines}</h5>
        <h5>{restaurantList[0].data.totalRatingsString}</h5>
        
    </div>
)*/


// props
/*
const RestaurantCard = (props)=>(
    
    <div className="card">
        {console.log(props.restaurant)}
        <img src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/"+props.restaurant.data?.cloudinaryImageId}></img>
        <h4>{props.restaurant.data?.name}</h4>
        <h5>{props.restaurant.data?.cuisines}</h5>
        <h5>{props.restaurant.data?.totalRatingsString}</h5>
        
    </div>
)
*/

// Destructuring props object

/*const RestaurantCard = ({restaurant})=>{
    const {cloudinaryImageId,name,cuisines,totalRatings} = restaurant.data;
    return(
    <div className="card">
        {console.log(restaurant)}
        <img src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/"+cloudinaryImageId}></img>
        <h4>{name}</h4>
        <h5>{cuisines.join(",")}</h5>
        <h5>{totalRatings}</h5>
        
    </div>
)
}  */

// cleaner code

/*const RestaurantCard = ({cloudinaryImageId,name,cuisines,totalRatings})=>{
    return(
    <div className="card">
        <img src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/"+cloudinaryImageId}></img>
        <h4>{name}</h4>
        <h5>{cuisines.join(",")}</h5>
        <h5>{totalRatings}</h5>
        
    </div>
)
}*/

// using spread operator
const RestaurantCard = ({cloudinaryImageId,name,cuisines,totalRatings})=>{
    return(
    <div className="card">
        <img src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/"+cloudinaryImageId}></img>
        <h4>{name}</h4>
        <h5>{cuisines.join(",")}</h5>
        <h5>{totalRatings}</h5>
        
    </div>
)
}

// nokey <<< index <<< uniqueKey (bestPractise)

const Body = ()=>{
    return (
        <div className="cards">
          {/* <RestaurantCard name={restaurantList[0].data.name} cloudinaryImageId={restaurantList[0].data.cloudinaryImageId} cuisines={restaurantList[0].data.cuisines} totalRatings ={restaurantList[0].data.totalRatings} />
            <RestaurantCard {...restaurantList[1].data} />
            <RestaurantCard {...restaurantList[2].data}  />
            <RestaurantCard {...restaurantList[3].data} />
            <RestaurantCard {...restaurantList[4].data} />
    <RestaurantCard {...restaurantList[5].data} />  */}

            {restaurantList.map( (restaurant)=>{
                return <RestaurantCard {...restaurant.data} key={restaurant.data.id}/>
            }

            )
            }

            

            
        </div>
    )
}

const AppLayout = ()=>{
    return(
        <>
        <Header/>
        <Body/>
        </>
    ) 
        
    
}

// config driven ui

const restaurantList= [
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "311806",
        "name": "Burger King",
        "uuid": "0d042d3b-e5d8-4179-893f-061f08e4d478",
        "city": "22",
        "area": "Ballupur",
        "totalRatingsString": "5000+ ratings",
        "cloudinaryImageId": "iqh7ew5ldfgvpd5dpz60",
        "cuisines": [
          "Burgers",
          "American"
        ],
        "tags": [
          
        ],
        "costForTwo": 35000,
        "costForTwoString": "₹350 FOR TWO",
        "deliveryTime": 23,
        "minDeliveryTime": 23,
        "maxDeliveryTime": 23,
        "slaString": "23 MINS",
        "lastMileTravel": 1.100000023841858,
        "slugs": {
          "restaurant": "burger-king-chakrata-road-ballupur",
          "city": "dehradun"
        },
        "cityState": "22",
        "address": "5/5,4/4 & 3/3, GROUND FLOOR, CHAKRATA ROAD, DEHRADUN, UTTRAKHAND",
        "locality": "Chakrata Road",
        "parentId": 166,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "aggregatedDiscountInfo": {
          "header": "Get every item under 129",
          "shortDescriptionList": [
            {
              "meta": "Get every item under 129",
              "discountType": "FinalPrice",
              "operationType": "RESTAURANT"
            }
          ],
          "descriptionList": [
            {
              "meta": "Get every item under 129",
              "discountType": "FinalPrice",
              "operationType": "RESTAURANT"
            }
          ],
          "subHeader": "",
          "headerType": 0,
          "superFreedel": ""
        },
        "aggregatedDiscountInfoV2": {
          "header": "",
          "shortDescriptionList": [
            {
              "meta": "",
              "discountType": "FinalPrice",
              "operationType": "RESTAURANT"
            }
          ],
          "descriptionList": [
            {
              "meta": "Get every item under 129",
              "discountType": "FinalPrice",
              "operationType": "RESTAURANT"
            }
          ],
          "subHeader": "",
          "headerType": 0,
          "superFreedel": ""
        },
        "ribbon": [
          {
            "type": "PROMOTED"
          }
        ],
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "distance",
              "fee": 2400,
              "message": ""
            },
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 2400,
          "message": "",
          "title": "Delivery Charge",
          "amount": "2400",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "cid=6264079~p=1~eid=00000187-1e3e-84f2-4182-c57100600154",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "1.1 kms",
        "hasSurge": false,
        "sla": {
          "restaurantId": "311806",
          "deliveryTime": 23,
          "minDeliveryTime": 23,
          "maxDeliveryTime": 23,
          "lastMileTravel": 1.100000023841858,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": true,
        "avgRating": "4.2",
        "totalRatings": 5000,
        "new": false
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "69447",
        "name": "Gaylord Express",
        "uuid": "bf891542-13ee-424c-b468-958bdd89a122",
        "city": "22",
        "area": "Paltan Bazaar",
        "totalRatingsString": "10000+ ratings",
        "cloudinaryImageId": "uj68ybtfwbydewraxzhm",
        "cuisines": [
          "South Indian",
          "Chinese",
          "Bakery",
          "Italian"
        ],
        "tags": [
          
        ],
        "costForTwo": 20000,
        "costForTwoString": "₹200 FOR TWO",
        "deliveryTime": 21,
        "minDeliveryTime": 21,
        "maxDeliveryTime": 21,
        "slaString": "21 MINS",
        "lastMileTravel": 1.100000023841858,
        "slugs": {
          "restaurant": "gaylord-express-paltan-bazaar-chukkuwala",
          "city": "dehradun"
        },
        "cityState": "22",
        "address": "9, Near Samsung Shop, Paltan Bazaar, Dehradun",
        "locality": "Paltan Bazaar Road",
        "parentId": 13696,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "aggregatedDiscountInfo": {
          "header": "60% off",
          "shortDescriptionList": [
            {
              "meta": "60% off | Use TRYNEW",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "descriptionList": [
            {
              "meta": "60% off up to ₹120 | Use code TRYNEW",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "subHeader": "",
          "headerType": 0,
          "superFreedel": ""
        },
        "aggregatedDiscountInfoV2": {
          "header": "60% OFF",
          "shortDescriptionList": [
            {
              "meta": "Use TRYNEW",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "descriptionList": [
            {
              "meta": "60% off up to ₹120 | Use code TRYNEW",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "subHeader": "",
          "headerType": 0,
          "superFreedel": ""
        },
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "distance",
              "fee": 2400,
              "message": ""
            },
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 2400,
          "message": "",
          "title": "Delivery Charge",
          "amount": "2400",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "1.1 kms",
        "hasSurge": false,
        "sla": {
          "restaurantId": "69447",
          "deliveryTime": 21,
          "minDeliveryTime": 21,
          "maxDeliveryTime": 21,
          "lastMileTravel": 1.100000023841858,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "3.5",
        "totalRatings": 10000,
        "new": false
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "69769",
        "name": "Aman Vegetarian",
        "uuid": "4ef9eafb-9c6d-4e9b-b1e9-0bbd0e88f9ef",
        "city": "22",
        "area": "Paltan Bazaar",
        "totalRatingsString": "5000+ ratings",
        "cloudinaryImageId": "ygczg6efdbjietl1req7",
        "cuisines": [
          "North Indian",
          "Chinese",
          "Continental"
        ],
        "tags": [
          
        ],
        "costForTwo": 27500,
        "costForTwoString": "₹275 FOR TWO",
        "deliveryTime": 19,
        "minDeliveryTime": 19,
        "maxDeliveryTime": 19,
        "slaString": "19 MINS",
        "lastMileTravel": 1.2999999523162842,
        "slugs": {
          "restaurant": "aman-vegetarian-paltan-bazar-near-railway-station-hathibarkala",
          "city": "dehradun"
        },
        "cityState": "22",
        "address": "Darshini Gate, Jhanda Mohalla, Paltan Bazaar,near railway station Dehradun",
        "locality": "Paltan Bazaar Road",
        "parentId": 13687,
        "unserviceable": false,
        "veg": true,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "aggregatedDiscountInfo": {
          "header": "60% off",
          "shortDescriptionList": [
            {
              "meta": "60% off | Use TRYNEW",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "descriptionList": [
            {
              "meta": "60% off up to ₹120 | Use code TRYNEW",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "subHeader": "",
          "headerType": 0,
          "superFreedel": ""
        },
        "aggregatedDiscountInfoV2": {
          "header": "60% OFF",
          "shortDescriptionList": [
            {
              "meta": "Use TRYNEW",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "descriptionList": [
            {
              "meta": "60% off up to ₹120 | Use code TRYNEW",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "subHeader": "",
          "headerType": 0,
          "superFreedel": ""
        },
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "distance",
              "fee": 2400,
              "message": ""
            },
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 2400,
          "message": "",
          "title": "Delivery Charge",
          "amount": "2400",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "1.2 kms",
        "hasSurge": false,
        "sla": {
          "restaurantId": "69769",
          "deliveryTime": 19,
          "minDeliveryTime": 19,
          "maxDeliveryTime": 19,
          "lastMileTravel": 1.2999999523162842,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "3.9",
        "totalRatings": 5000,
        "new": false
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "365570",
        "name": "Behrouz Biryani",
        "uuid": "c35be6ee-e9e6-4ae2-ad64-1c4f6108e5ea",
        "city": "22",
        "area": "Rajpur",
        "totalRatingsString": "1000+ ratings",
        "cloudinaryImageId": "guyqaemienks198nbla1",
        "cuisines": [
          "Biryani",
          "Mughlai",
          "Lucknowi",
          "Hyderabadi",
          "Kebabs",
          "North Indian",
          "Persian",
          "Desserts"
        ],
        "tags": [
          
        ],
        "costForTwo": 50000,
        "costForTwoString": "₹500 FOR TWO",
        "deliveryTime": 41,
        "minDeliveryTime": 41,
        "maxDeliveryTime": 41,
        "slaString": "41 MINS",
        "lastMileTravel": 4,
        "slugs": {
          "restaurant": "behrouz-biryani-rajpura-road-hathibarkala",
          "city": "dehradun"
        },
        "cityState": "22",
        "address": "Shop-8, Back Side Area, 2nd Floor, Property Number-99( Bearing New Municipal-445) Rajpur Road Dehradun 248001",
        "locality": "Rajpur Road",
        "parentId": 1803,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "ribbon": [
          {
            "type": "PROMOTED"
          }
        ],
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "distance",
              "fee": 2900,
              "message": ""
            },
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 2900,
          "message": "",
          "title": "Delivery Charge",
          "amount": "2900",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "cid=6264024~p=4~eid=00000187-1e3e-84f2-4182-c57200600429",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "4 kms",
        "hasSurge": false,
        "sla": {
          "restaurantId": "365570",
          "deliveryTime": 41,
          "minDeliveryTime": 41,
          "maxDeliveryTime": 41,
          "lastMileTravel": 4,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": true,
        "avgRating": "4.2",
        "totalRatings": 1000,
        "new": false
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "349677",
        "name": "SINGH'S SPL. MALAI CHAAP WALE",
        "uuid": "1e0a6791-d9a3-4bf0-a2b6-d7868b5d747a",
        "city": "22",
        "area": "Chukkuwala",
        "totalRatingsString": "500+ ratings",
        "cloudinaryImageId": "epmofgbnwgkhap14jcu0",
        "cuisines": [
          "North Indian",
          "Indian"
        ],
        "tags": [
          
        ],
        "costForTwo": 30000,
        "costForTwoString": "₹300 FOR TWO",
        "deliveryTime": 21,
        "minDeliveryTime": 21,
        "maxDeliveryTime": 21,
        "slaString": "21 MINS",
        "lastMileTravel": 0.4000000059604645,
        "slugs": {
          "restaurant": "singh's-spl.-malai-chaap-wale-chukkuwala-chukkuwala",
          "city": "dehradun"
        },
        "cityState": "22",
        "address": "NATRAJ CINEMA COMPOUND CHAKRATA ROAD DEHRADUN, DEHRADUN NAGAR NIGAM, DEHRADUN (UTTARAKHAND)",
        "locality": "Connaught Place",
        "parentId": 188628,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "aggregatedDiscountInfo": {
          "header": "10% off",
          "shortDescriptionList": [
            {
              "meta": "10% off | Use TRYNEW",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "descriptionList": [
            {
              "meta": "10% off up to ₹40 | Use code TRYNEW",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "subHeader": "",
          "headerType": 0,
          "superFreedel": ""
        },
        "aggregatedDiscountInfoV2": {
          "header": "10% OFF",
          "shortDescriptionList": [
            {
              "meta": "Use TRYNEW",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "descriptionList": [
            {
              "meta": "10% off up to ₹40 | Use code TRYNEW",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "subHeader": "",
          "headerType": 0,
          "superFreedel": ""
        },
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "distance",
              "fee": 1900,
              "message": ""
            },
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 1900,
          "message": "",
          "title": "Delivery Charge",
          "amount": "1900",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "0.4 kms",
        "hasSurge": false,
        "sla": {
          "restaurantId": "349677",
          "deliveryTime": 21,
          "minDeliveryTime": 21,
          "maxDeliveryTime": 21,
          "lastMileTravel": 0.4000000059604645,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "4.0",
        "totalRatings": 500,
        "new": false
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "73011",
        "name": "KFC",
        "uuid": "1a1470cd-8561-4189-9b5b-a6d0ccc68968",
        "city": "22",
        "area": "Prem Nagar",
        "totalRatingsString": "5000+ ratings",
        "cloudinaryImageId": "bdcd233971b7c81bf77e1fa4471280eb",
        "cuisines": [
          "Burgers",
          "Biryani",
          "American",
          "Snacks",
          "Fast Food"
        ],
        "tags": [
          
        ],
        "costForTwo": 30000,
        "costForTwoString": "₹300 FOR TWO",
        "deliveryTime": 23,
        "minDeliveryTime": 23,
        "maxDeliveryTime": 23,
        "slaString": "23 MINS",
        "lastMileTravel": 1.100000023841858,
        "slugs": {
          "restaurant": "kfc-chukkuwala-chukkuwala",
          "city": "dehradun"
        },
        "cityState": "22",
        "address": "KFC Restaurant, Khasra No 1281/1291, Opp Dr Manish Jain hospital, Chakrata road, Dehradun-248001",
        "locality": "Chakrata Road",
        "parentId": 547,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "distance",
              "fee": 2400,
              "message": ""
            },
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 2400,
          "message": "",
          "title": "Delivery Charge",
          "amount": "2400",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "1.1 kms",
        "hasSurge": false,
        "sla": {
          "restaurantId": "73011",
          "deliveryTime": 23,
          "minDeliveryTime": 23,
          "maxDeliveryTime": 23,
          "lastMileTravel": 1.100000023841858,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "4.0",
        "totalRatings": 5000,
        "new": false
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "587464",
        "name": "Bikkgane Biryani",
        "uuid": "8e57bf2f-26a4-4734-a26d-88305ab8a32e",
        "city": "22",
        "area": "Ballupur",
        "totalRatingsString": "1000+ ratings",
        "cloudinaryImageId": "vfxj1q7p943sayqul5fx",
        "cuisines": [
          "Biryani",
          "Mughlai",
          "North Indian"
        ],
        "tags": [
          
        ],
        "costForTwo": 35000,
        "costForTwoString": "₹350 FOR TWO",
        "deliveryTime": 21,
        "minDeliveryTime": 21,
        "maxDeliveryTime": 21,
        "slaString": "21 MINS",
        "lastMileTravel": 2.4000000953674316,
        "slugs": {
          "restaurant": "bikkgane-biryani-ballupur-ballupur",
          "city": "dehradun"
        },
        "cityState": "22",
        "address": "196, 2nd Floor A.B. Tower, Ballupur Chowk, Chakrata Road,, Dehradun Nagar Nigam, Dehradun, Uttarakhand-248001",
        "locality": "Chakrata Road",
        "parentId": 5070,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "aggregatedDiscountInfo": {
          "header": "60% off",
          "shortDescriptionList": [
            {
              "meta": "60% off | Use TRYNEW",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "descriptionList": [
            {
              "meta": "60% off up to ₹120 | Use code TRYNEW",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "subHeader": "",
          "headerType": 0,
          "superFreedel": ""
        },
        "aggregatedDiscountInfoV2": {
          "header": "60% OFF",
          "shortDescriptionList": [
            {
              "meta": "Use TRYNEW",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "descriptionList": [
            {
              "meta": "60% off up to ₹120 | Use code TRYNEW",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "subHeader": "",
          "headerType": 0,
          "superFreedel": ""
        },
        "ribbon": [
          {
            "type": "PROMOTED"
          }
        ],
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "distance",
              "fee": 2400,
              "message": ""
            },
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 2400,
          "message": "",
          "title": "Delivery Charge",
          "amount": "2400",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "cid=6260760~p=7~eid=00000187-1e3e-84f2-4182-c57300600750",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "2.4 kms",
        "hasSurge": false,
        "sla": {
          "restaurantId": "587464",
          "deliveryTime": 21,
          "minDeliveryTime": 21,
          "maxDeliveryTime": 21,
          "lastMileTravel": 2.4000000953674316,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": true,
        "avgRating": "4.1",
        "totalRatings": 1000,
        "new": false
      },
      "subtype": "basic"
    }
  ]


root.render(<AppLayout/>);