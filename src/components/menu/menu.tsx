import { faGopuram } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

interface IMapper extends React.Props<any> {
  value?: number,
  focusedMenu?: boolean,
  focusedMovies?: boolean,
  focusedKeyboard?: boolean
  fn: Function
};

export default function Menu(props:any) {
  console.log('%c%s', 'color: #1d5673', JSON.stringify(props.value));
  let mapper: IMapper = {...props.value};
  console.log('%c%s', 'color: #ff00ee', JSON.stringify(mapper));
  let [isFocused , setFocus] = useState<IMapper>(mapper);


  function goDown(){

  };

  function goUp(){

  };

  useEffect(() => {
    if(isFocused.value === 40){
      goDown();
    }
    else if(isFocused.value === 38 ){
      goUp();
    }
  }, [isFocused])

  return (
    <>
      <div style={{width: '100%',height: '25%',}} />
      <div style={{width: '100%',height: '55%'}}>
        <div style={{backgroundColor:'yellow', width: '100%',height: '100%'}}>
          <div style={{backgroundColor:'green', width: '100%',height: '25%'}}>Busca</div>
          <div style={{backgroundColor:'grey', width: '100%',height: '25%'}}>Início</div>
          <div style={{backgroundColor:'green', width: '100%',height: '25%'}}>Agora na TV</div>
          <div style={{backgroundColor:'grey', width: '100%',height: '25%'}}>Categorias</div>
          <div style={{backgroundColor:'green', width: '100%',height: '25%'}}>Minha Conta</div>
        </div> 
      </div>
      <div style={{width: '100%',height: '20%',}} />

    </>
  );
}
