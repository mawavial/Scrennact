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
    console.log('%c%s', 'color: #102718', value);
    switch (value) {
      case EOptions.search:
        resetAll();
        searchFocus.current.style.backgroundColor = 'blue';
        break;
      case EOptions.home:
        resetAll();
        homeFocus.current.style.backgroundColor = 'blue';
        break;
      case EOptions.now:
        resetAll();
        nowFocus.current.style.backgroundColor = 'blue';
        break;
      case EOptions.categories:
        resetAll();
        categoriesFocus.current.style.backgroundColor = 'blue';
        break;
      case EOptions.account:
        resetAll();
        accountFocus.current.style.backgroundColor = 'blue';
        break;
      default:
        resetAll();
        accountFocus.current.style.backgroundColor = 'blue';
        break;
    }
  }

  let resetAll = () : void => { 
    searchFocus.current.style.backgroundColor = 'white';
    homeFocus.current.style.backgroundColor = 'white';
    nowFocus.current.style.backgroundColor = 'white';
    categoriesFocus.current.style.backgroundColor = 'white';
    accountFocus.current.style.backgroundColor = 'white';
    accountFocus.current.style.backgroundColor = 'white';
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
          <div ref={searchFocus} style={{width: '100%', height: '25%' }}>Busca</div>
          <div ref={homeFocus} style={{ width: '100%', height: '25%' }}>Início</div>
          <div ref={nowFocus} style={{ width: '100%', height: '25%' }}>Agora na TV</div>
          <div ref={categoriesFocus} style={{ width: '100%', height: '25%' }}>Categorias</div>
          <div ref={accountFocus} style={{ width: '100%', height: '25%' }}>Minha Conta</div>
        </div>
      </div>
      <div style={{ width: '100%', height: '20%', }} />
    </>
  );
}
