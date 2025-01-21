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
        type: 'featured',
        description: 'Portable wireless speaker with rich stereo sound, 12-hour battery life, and water-resistant design. Perfect for outdoor activities and home entertainment.'
    },
    {
        id: 2,
        Name: "Camera",
        price: '200',
        image: Camera,
        cat: 'phone',
        type: 'featured',
        description: 'High-resolution digital camera with 24MP sensor, 4K video recording, and advanced autofocus system. Ideal for both photography enthusiasts and professionals.'
    },
    {
        id: 3,
        Name: "Camon DSLR Camera",
        price: '480',
        image: Camon,
        cat: 'Camera',
        type: 'new',
        description: 'Professional DSLR camera featuring a 32MP full-frame sensor, 4K/60fps video, dual memory card slots, and weather-sealed body. Perfect for professional photography.'
    },
    {
        id: 4,
        Name: "Gamepad",
        price: '510',
        image: Gamepad,
        cat: 'GamePad',
        type: 'top',
        description: 'Premium wireless gaming controller with customizable buttons, haptic feedback, and ergonomic design. Compatible with multiple gaming platforms.'
    },
    {
        id: 5,
        Name: "Headphone",
        price: '55',
        image: Headphone,
        cat: 'headphone',
        type: 'featured',
        description: 'Wireless over-ear headphones with active noise cancellation, 30-hour battery life, and premium audio quality. Features comfortable memory foam ear cushions.'
    },
    {
        id: 6,
        Name: "Iphone",
        price: '95',
        image: Iphone,
        cat: 'Iphone',
        type: 'new',
        description: 'Latest iPhone model featuring A16 Bionic chip, ProMotion display, advanced camera system with 48MP main sensor, and all-day battery life.'
    },
    {
        id: 7,
        Name: "Monitor",
        price: '2100',
        image: Monitor1,
        cat: 'Monitor',
        type: 'top',
        description: '32-inch 4K UHD professional monitor with HDR support, 99% Adobe RGB color coverage, and USB-C connectivity. Perfect for content creators and designers.'
    },
    {
        id: 8,
        Name: "Monitor",
        price: '1100',
        image: Monitor,
        cat: 'Monitor',
        type: 'top',
        description: '27-inch QHD gaming monitor with 165Hz refresh rate, 1ms response time, and AMD FreeSync Premium. Ideal for competitive gaming.'
    },
    {
        id: 9,
        Name: "ps5",
        price: '480',
        image: Ps5,
        cat: "Game",
        type: 'featured',
        description: 'Next-gen gaming console featuring 4K graphics, ray tracing, ultra-high speed SSD, and DualSense controller with haptic feedback and adaptive triggers.'
    },
    {
        id: 10,
        Name: "Virtual-Reality",
        price: '55',
        image: Virtual,
        cat: 'speaker',
        type: 'top',
        description: 'Advanced VR headset with high-resolution displays, precise motion tracking, and immersive 3D audio. Perfect for gaming and virtual experiences.'
    },
    {
        id: 11,
        Name: "Monitor",
        price: '2100',
        image: Monitor1,
        cat: 'Monitor',
        type: 'trending',
        description: '32-inch 4K UHD professional monitor with HDR support, 99% Adobe RGB color coverage, and USB-C connectivity. Perfect for content creators and designers.'
    },
    {
        id: 12,
        Name: "Iphone",
        price: '1100',
        image: Iphone,
        cat: 'Iphone',
        type: 'trending',
        description: 'Latest iPhone model featuring A16 Bionic chip, ProMotion display, advanced camera system with 48MP main sensor, and all-day battery life.'
    },
    {
        id: 13,
        Name: "Headphone",
        price: '55',
        image: Headphone,
        cat: 'headphone',
        type: 'trending',
        description: 'Wireless over-ear headphones with active noise cancellation, 30-hour battery life, and premium audio quality. Features comfortable memory foam ear cushions.'
    },
    {
        id: 14,
        Name: "Virtual-Reality",
        price: '55',
        image: Virtual,
        cat: 'speaker',
        type: 'trending',
        description: 'Advanced VR headset with high-resolution displays, precise motion tracking, and immersive 3D audio. Perfect for gaming and virtual experiences.'
    },
    {
        id: 15,
        Name: "Bluetooth speaker",
        price: '26',
        image: Speaker,
        cat: 'headphone',
        type: 'new',
        description: 'Portable wireless speaker with rich stereo sound, 12-hour battery life, and water-resistant design. Perfect for outdoor activities and home entertainment.'
    },
    {
        id: 16,
        Name: "Camera",
        price: '200',
        image: Camera,
        cat: 'phone',
        type: 'new',
        description: 'High-resolution digital camera with 24MP sensor, 4K video recording, and advanced autofocus system. Ideal for both photography enthusiasts and professionals.'
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