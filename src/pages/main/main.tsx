import { useEffect, useRef, useState } from 'react';
import Movies from '../../components/movies/movies';
import SearchKeyboard from '../../components/searchKeyboard/searchKeyboard';
import Menu from '../../components/menu/menu';


interface IKeyChange {
    value: number
  };


interface IMapper extends React.Props<any> {
  value?: number,
  focusedMenu?: boolean,
  focusedMovies?: boolean,
  focusedKeyboard?: boolean,
};


export default function Main(props: IKeyChange): JSX.Element {  
  
  
  let mapper: IMapper = {value:props.value,focusedMenu:false,focusedMovies:false,focusedKeyboard:false};
  
  let [isFocused , setFocus] = useState<IMapper>(mapper);
  const menuFocus : any | null = useRef(null);


  funtion whoIsHandler(value: number) => { }


  const focus = () : void => {
    menuFocus.current.focus();
  };

  useEffect(() => {
      setFocus({...isFocused, value: props.value})
    return () => {
      setFocus({...isFocused, value: props.value})
    }
  }, [props.value]);

  useEffect(() => {
    focus();
    return () => {
      focus();
    }
  }, []);

  useEffect(() => {

}, [isFocused]);

  return (
    <>
      <table style={{ width: '100%', height: '100%' }}>
        <tbody>
          <tr>
            <td style={{
                  flexGrow: 1,
                  width: '10%',
                  height: '100%',
                  border: '2px solid',
                  borderRightColor: 'white',
                  backgroundColor: 'aliceblue',
              }}
              tabIndex={1}
              onFocus={(e): void => setFocus({...isFocused, focusedMenu: true})}
              ref={menuFocus}
            >
              <Menu value={isFocused} onChange={} />
            </td>
            <td style={{
                  width: '30%',
                  height: '100%',
                  border: '2px solid',
                  borderRightColor: 'white',
                  
              }}
              tabIndex={2}
              onFocus={(e): void => setFocus({...isFocused, focusedMenu: true})}
              ref={keyboardFocus}
            >
              <SearchKeyboard value={isFocused} onChange={} />
            </td>
            <td style={{
                  width: '50%',
                  height: '100%'
                }}
                onFocus={(e): void => setFocus({...isFocused, focusedMenu: true})}
                ref={moviesFocus}
            >
              <Movies value={isFocused} onChange={}/>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
