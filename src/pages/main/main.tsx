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

enum EWho {
  menu,
  keyboard,
  movies
}


export default function Main(props: IKeyChange): JSX.Element {


  let mapper: IMapper = { value: props.value, focusedMenu: false, focusedMovies: false, focusedKeyboard: false };

  let [isFocused, setFocus] = useState<IMapper>(mapper);
  const menuFocus: any | null = useRef(null);
  const keyboardFocus: any | null = useRef(null);
  const moviesFocus: any | null = useRef(null);

  let whoIsHandler = (value: EWho): void => {
    switch (value) {
      case EWho.keyboard:
        setFocus({ ...isFocused, focusedKeyboard: true, focusedMenu: false, focusedMovies: false })
        keyboardFocus?.current.focus();
        break;
      case EWho.menu:
        setFocus({ ...isFocused, focusedMenu: true, focusedKeyboard:false, focusedMovies:false })
        menuFocus?.current.focus();
        break;
      case EWho.movies:
        setFocus({ ...isFocused, focusedMovies: true, focusedKeyboard: false, focusedMenu: false })
        moviesFocus?.current.focus();
        break;
      default:
        setFocus({ ...isFocused, focusedMenu: true, focusedKeyboard: false, focusedMovies:  false })
        menuFocus?.current.focus();
        break;
    }
  };


  let focus = (): void => {
    setFocus({ ...isFocused, focusedMenu: true, focusedKeyboard: false, focusedMovies:  false })
    menuFocus?.current.focus();
  };

  useEffect(() => {
    setFocus({ ...isFocused, value: props.value })
    return () => {
      setFocus({ ...isFocused, value: props.value })
    }
  }, [props.value]);

  useEffect(() => {
    focus();
    return () => {
      focus();
    }
  }, []);

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
              onFocus={(e): void => setFocus({ ...isFocused, focusedMenu: true })}
              ref={menuFocus}
            >
              <Menu value={isFocused} onChange={whoIsHandler} />
            </td>
            <td style={{
              width: '35%',
              height: '100%',
              border: '2px solid',
              borderRightColor: 'white',

            }}
              tabIndex={2}
              onFocus={(e): void => setFocus({ ...isFocused, focusedKeyboard: true })}
              ref={keyboardFocus}
            >
              <SearchKeyboard value={isFocused} onChange={whoIsHandler} />
            </td>
            <td style={{
              width: '45%',
              height: '100%'
            }}
              tabIndex={3}
              onFocus={(e): void => setFocus({ ...isFocused, focusedMovies: true })}
              ref={moviesFocus}
            >
              <Movies value={isFocused} onChange={whoIsHandler} />
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
