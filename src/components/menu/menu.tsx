import { useEffect, useRef, useState } from "react";
interface IMapper {
  value?: number,
  focusedMenu?: boolean,
  focusedMovies?: boolean,
  focusedKeyboard?: boolean
};

enum EOptions {
  search,
  home,
  now,
  categories,
  account
};

enum EWho {
  menu,
  keyboard,
  movies
};



export default function Menu(props: any) {

  let [pointer, setPointer] = useState<EOptions>(0);
  let mapper: IMapper = { ...props.value };
  let [isFocused, setFocus] = useState<IMapper>(mapper);
  const searchFocus: any | null = useRef(null);
  const homeFocus: any | null = useRef(null);
  const nowFocus: any | null = useRef(null);
  const categoriesFocus: any | null = useRef(null);
  const accountFocus: any | null = useRef(null);

  let manager = (value: EOptions): void => { 
    switch (value) {
      case EOptions.search:
        resetAll();
        searchFocus.current.style.backgroundColor = '#ffffff';
        searchFocus.current.style.color = '#000000';
        break;
      case EOptions.home:
        resetAll();
        homeFocus.current.style.backgroundColor = '#ffffff';
        homeFocus.current.style.color = '#000000';
        break;
      case EOptions.now:
        resetAll();
        nowFocus.current.style.backgroundColor = '#ffffff';
        nowFocus.current.style.color = '#000000';
        break;
      case EOptions.categories:
        resetAll();
        categoriesFocus.current.style.backgroundColor = '#ffffff';
        categoriesFocus.current.style.color = '#000000';
        break;
      case EOptions.account:
        resetAll();
        accountFocus.current.style.backgroundColor = '#ffffff';
        accountFocus.current.style.color = '#000000';
        break;
      default:
        resetAll();
        accountFocus.current.style.backgroundColor = '#000000';
        accountFocus.current.style.color = '#ffffff';
        break;
    }
  }

  let resetAll = () : void => { 
    searchFocus.current.style.backgroundColor = '#000000';
    searchFocus.current.style.color = '#ffffff';
    homeFocus.current.style.backgroundColor = '#000000';
    homeFocus.current.style.color = '#ffffff';
    nowFocus.current.style.backgroundColor = '#000000';
    nowFocus.current.style.color = '#ffffff';
    categoriesFocus.current.style.backgroundColor = '#000000';
    categoriesFocus.current.style.color = '#ffffff';
    accountFocus.current.style.backgroundColor = '#000000';
    accountFocus.current.style.color = '#ffffff';
    accountFocus.current.style.backgroundColor = '#000000';
    accountFocus.current.style.color = '#ffffff';
  }

  let goUp = () : void => { 
    if(pointer === -1){
      setPointer(EOptions.search);
      manager(pointer);
    }
    else if(pointer === EOptions.search){
      setPointer(EOptions.account);
      manager(pointer);
    }
    else{ 
      let point = pointer - 1;
      setPointer(point);
      manager(pointer);
    }
    
  }

  let goDown = () : void => { 
    if(pointer === -1){
      setPointer(EOptions.search);
      manager(pointer);
    }
    else if(pointer === EOptions.account){
      setPointer(EOptions.search);
      manager(pointer);
    }
    else{ 
      let point = pointer + 1;
      setPointer(point);
      manager(pointer);
    }
    
  }

  useEffect(() => {
    setFocus({...props.value})
    return () => {
      setFocus({...props.value})
    }
  }, [props]);


  useEffect(() => {
    if (isFocused.focusedMenu === true) {
      if (isFocused.value === 40) {
        goDown();
      }
      else if (isFocused.value === 38) {
        goUp();
      }
      else if (isFocused.value === 39) {
        manager(EOptions.search);
        resetAll();
        props.onChange(EWho.keyboard);
      }
    }
  }, [isFocused])

  return (
    <>
      <div style={{ width: '100%', height: '25%', }} />
      <div style={{ width: '100%', height: '55%' }}>
        <div style={{ width: '100%', height: '100%' }}>
          <div ref={searchFocus} style={{backgroundColor: '#000000', color:'#ffffff', width: '100%', height: '25%' }}>Busca</div>
          <div ref={homeFocus} style={{ backgroundColor: '#000000', color:'#ffffff', width: '100%', height: '25%' }}>Início</div>
          <div ref={nowFocus} style={{ backgroundColor: '#000000', color:'#ffffff', width: '100%', height: '25%' }}>Agora na TV</div>
          <div ref={categoriesFocus} style={{ backgroundColor: '#000000', color:'#ffffff', width: '100%', height: '25%' }}>Categorias</div>
          <div ref={accountFocus} style={{ backgroundColor: '#000000', color:'#ffffff', width: '100%', height: '25%' }}>Minha Conta</div>
        </div>
      </div>
      <div style={{ width: '100%', height: '20%', }} />
    </>
  );
}
