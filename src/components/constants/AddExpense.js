import { ImBook } from "react-icons/im";
import { MdFastfood, MdShoppingBag, MdOutlineMedicalServices, MdOutlineOtherHouses, MdElectricalServices} from "react-icons/md";

export const categories = [
    {
        id : 1,
        title  : "Education",
        // icon : <ImBook/>,
       icon : "https://cdn0.iconfinder.com/data/icons/education-science-1-1/100/Education__seience_1_9-512.png",
        color: "rgb(173,94,153)"
    },
    
        {
            id: 2,
            title: "Healthcare",
            // icon:<MdOutlineMedicalServices/>,
            icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-49jr0vPSJCzAvR2WRpQtlNtSuIOXKbNRhKCDwpeFl9rTCjWylfQGoIyI_hD1nYpDeTY&usqp=CAU",
            color: "#FF768A",
          },
          {
            id: 3,
            title: "Shopping",
            icon : "https://www.pngfind.com/pngs/m/326-3261754_person-icons-shopping-person-shopping-icon-hd-png.png",
            // icon:<MdShoppingBag/>,
            color: "#EC60AB",
          },
          {
            id: 4,
            title: "Food",
            // icon:  <MdFastfood/>,
            icon : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF3qsgYroYaB8mItitZtTUBtnDkXTObU9D_6o5UgRWpu9_V8eazimOK43I7Tc8mIkA9ko&usqp=CAU",
            color: "#FF9E6D",
          },
          {
            id: 5,
            title: "Electricity",
            // icon:  <MdElectricalServices/>,
            icon : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIFMgl1CZdpZXmCbSjLZWl5Z3pBOHylgD3vLgWtigo6k2pP8wZyi8eupiBdm0Q8V9SZxo&usqp=CAU",
            color: "rgb(173,94,153)"
          },
          {
            id: 6,
            title: "Other",
            // icon: <MdOutlineOtherHouses/>,
            icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCUoJ3dHeVGPc4ircsSIHgbuKDfq182Eb6KO1PRZQKK9BfHgEr6RjmLW1_q3dCbQy5tUQ&usqp=CAU",
            color: "#FFCB5E",
          },
    
]