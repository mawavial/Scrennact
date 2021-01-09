import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";


export default function Menu() { 


    return(
        <>
        
            <div style={{width:'100%',
                            height:'20%',
                            marginTop:0,
                            backgroundColor:'grey',
                            display:'block',
                            borderCollapse:'separate',
                            borderSpacing:'0 0'
                        }}
                >
                    <span>
                        <FontAwesomeIcon icon={faCoffee} color="white"/>
                    </span>
                    
                </div>
                <div style={{width:'100%',
                            height:'20%',
                            marginTop:0,
                            backgroundColor:'green',
                            display:'block',
                            borderCollapse:'separate',
                            borderSpacing:'0 1em'
                            }}
                            
                >
                    <span> Ana </span>
                </div>
                <div style={{width:'100%',
                            height:'20%',
                            marginTop:0,
                            backgroundColor:'grey',
                            display:'block',
                            borderCollapse:'separate',
                            borderSpacing:'0 0'
                        }}
                >
                </div>
                <div style={{width:'100%',
                            height:'20%',
                            marginTop:0,
                            backgroundColor:'green',
                            display:'block',
                            borderCollapse:'separate',
                            borderSpacing:'0 1em'
                            }}
                >
                    
                </div>
                <div style={{width:'100%',
                            height:'20%',
                            marginTop:0,
                            backgroundColor:'grey',
                            display:'block',
                            borderCollapse:'separate',
                            borderSpacing:'0 0'
                        }}
                >
                </div>
        </>
    )
}