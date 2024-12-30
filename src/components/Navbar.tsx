import {HStack, Image} from "@chakra-ui/react";
import logo from '../assets/logo.webp'
import ColourModeSwitch from "./ColourModeSwitch.tsx";
import SearchInput from "./SearchInput.tsx";

const Navbar = ()=>{
    return (
        <div>
            <HStack padding="10px">
                <Image src={logo} boxSize="60px"/>
                <SearchInput/>
                <ColourModeSwitch/>
            </HStack>
        </div>
    )
}

export default Navbar
