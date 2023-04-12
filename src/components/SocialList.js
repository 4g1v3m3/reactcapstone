
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { HStack } from "@chakra-ui/react";
  
const SocialList = (props) => {
    const sortedList = props.data
      .map((socials) => { 
      return (
          <ul>
            <a href={socials.url}><FontAwesomeIcon icon={socials.icon}/></a>
          </ul>
        ); 
      }); 
    return sortedList
   
   }
export default SocialList;