//import all images from asset/images directory
import dronea from "../all-images/drone-img/drone-a.jpg";
import droneb from "../all-images/drone-img/drone-b.jpg";
import dronec from "../all-images/drone-img/drone-c.jpg";
import droned from "../all-images/drone-img/drone-d.jpg";
import dronee from "../all-images/drone-img/drone-e.jpg";

const droneData = [
    {
        id: 1,
        brand: "G-Skyline",
        rating: 100,
        droneName: "G-Skyline S138"
        imgUrl: dronea,
        model: "G-SKYLINE S138",
        price: 89.99,
        SKU:  17048037,
        description:
            "It is surprising to have 4 brushless motors in this beginner level drone that absolutely power up its flying. It also has HD dual cameras and up to 30 mints long time flying (with 2 batteries)! With ESC cameras it has optical flow and 360° obstacle avoidance, absolutely the best choice for beginner!"
    },

    {
        id: 2,
        brand: "DJI",
        rating: 100,
        droneName: "DJI Mini 3"
        imgUrl: droneb,
        model: "CP.MA.00000584.01",
        price: 89.99,
        SKU:  16610485,
        description:
            "Take to the skies with the DJI Mini 3 quadcopter drone with controller. It's equipped with a 4K HDR camera and a three-axis mechanical gimbal for detailed, stable photography and videography from elevations of up to 4000 metres. This lightweight drone has an impressive 38-minute flight time and is perfect for first-time users and professionals alike."
    },

    {
        id: 3,
        brand: "DJI",
        rating: 100,
        droneName: "DJI Mavic 3"
        imgUrl: dronec,
        model: "CP.MA.00000596.01",
        price: 200.99,
        SKU: 16579152,
        description:
            "Take flight and capture incredibly stunning visuals with the DJI Mavic 3 Quadcopter Drone Classic with RC-N1 remote controller. Equipped with Hasselblad Natural Colour Solution and video resolutions of up to 5.1K, it enables rich detail and vibrant hues to bring your imagery to life. It also boasts a powerful battery to deliver top speeds of up to 75.6km/h and elevation levels of up to 6,000m."
    },

    {
        id: 4,
        brand: "G-SKYLINE",
        rating: 100,
        droneName: "G-SKYLINE SE MAX"
        imgUrl: droned,
        model: "G-SKYLINE PRO SE MAX",
        price: 189.99,
        SKU: 17047598,
        description:
            "The ideal present for a drone lover and photography nut is the Pro SE MAX 4K Professional HD Camera Drone. It boasts autonomous takeoff and landing capabilities, a 1200 m-long remote control range, and a 4K HD camera for recording footage. True 1080P wide-angle. If you know someone who appreciates the best in aerial photography, give them this."
    },

    {
        id: 5,
        brand: "Contixo",
        rating: 100,
        droneName: "Contixo F22+"
        imgUrl: dronee,
        model: "F22",
        price: 153.99,
        SKU: 15051805,
        description:
            "Take to the skies with the Contixo F22+ folding video drone. Perfect for beginners, its one-key takeoff/landing and adjustable maximum speed let you learn how to fly with ease, with tonnes of features including 4K photos and HD video, and an operating radius of 550 metres. Weighing just 242 grams, its foldable design means you can take it all over the place."
    },
];
export default droneData;