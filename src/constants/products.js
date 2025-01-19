import Speaker from "../assets/bluetoothspeakers.png"
import Camera from "../assets/camera.png"
import Camon from "../assets/Camon DSLR Camera.png"
import Gamepad from "../assets/gamepad.png"
import Headphone from "../assets/headphone-white.png"
import Iphone from "../assets/iphone.png"
import Monitor1 from "../assets/monitor.png"
import Monitor from "../assets/monitor.png"
import Ps5 from "../assets/ps5.png"
import Virtual from "../assets/Virtual-Reality.png"


const products =
[
    {
        id: 1,
        Name: "Bluetooth speaker",
        price: '26',
        image: Speaker,
        cat: 'headphone',
        type: 'featured'
    },
    {
        id: 2,
        Name: "Camera",
        price: '200',
        image: Camera,
        cat: 'phone',
        type: 'featured'
    },
    {
        id: 3,
        Name: "Camon DSLR Camera",
        price: '480',
        image: Camon,
        cat: 'Camera',
        type: 'new'
    },
    {
        id: 4,
        Name: "Gamepad",
        price: '510',
        image: Gamepad,
        cat: 'GamePad',
        type: 'top'
    },
    {
        id: 5,
        Name: "Headphone",
        price: '55',
        image: Headphone,
        cat: 'headphone',
        type: 'featured'
    },
    {
        id: 6,
        Name: "Iphone",
        price: '95',
        image: Iphone,
        cat: 'Iphone',
        type: 'new'
    },
    {
        id: 7,
        Name: "Monitor",
        price: '2100',
        image: Monitor1,
        cat: 'Monitor',
        type: 'top'
    },
    {
        id: 8,
        Name: "Monitor",
        price: '1100',
        image: Monitor,
        cat: 'Monitor',
        type: 'top'
    },
    {
        id: 9,
        Name: "ps5",
        price: '480',
        image: Ps5,
        cat: "Game",
        type: 'featured'
    },
    {
        id: 10,
        Name: "Virtual-Reality",
        price: '55',
        image: Virtual,
        cat: 'speaker',
        type: 'top'
    },
    // {
    //     id: 11,
    //     Name: "Hp Laptop",
    //     price: '510',
    //     image: 'images/Hp.png',
    //     cat: 'laptop',
    //     type: 'new'
    // },
    // {
    //     id: 12,
    //     Name: "AirPods Pro",
    //     price: '26',
    //     image: 'images/AirPods.jpg',
    //     cat: 'headphone',
    //     type: 'featured'
    // },



]
export default products;