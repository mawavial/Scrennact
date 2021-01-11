import { useEffect, useRef, useState } from "react";

interface IMapper {
    value?: number,
    focusedMenu?: boolean,
    focusedMovies?: boolean,
    focusedKeyboard?: boolean
};

interface ICartesian {
    x: number,
    y: number
};


enum EWho {
    menu,
    keyboard,
    movies
};

export default function SearchKeyboard(props: any) {

    const labelText: string = '';
    let [input, setInput] = useState<string>('');
    let mapper: IMapper = { ...props.value };
    let [isFocused, setFocus] = useState<IMapper>(mapper);
    let [position, setPosition] = useState<ICartesian>({ x: 0, y: 0 });

    let onchangeHandler = (): void => { };

    const aFocus: any | null = useRef(null);
    const bFocus: any | null = useRef(null);
    const cFocus: any | null = useRef(null);
    const dFocus: any | null = useRef(null);
    const eFocus: any | null = useRef(null);
    const fFocus: any | null = useRef(null);
    const gFocus: any | null = useRef(null);
    const hFocus: any | null = useRef(null);
    const iFocus: any | null = useRef(null);
    const jFocus: any | null = useRef(null);
    const kFocus: any | null = useRef(null);
    const lFocus: any | null = useRef(null);
    const mFocus: any | null = useRef(null);
    const nFocus: any | null = useRef(null);
    const oFocus: any | null = useRef(null);
    const pFocus: any | null = useRef(null);
    const qFocus: any | null = useRef(null);
    const rFocus: any | null = useRef(null);
    const sFocus: any | null = useRef(null);
    const tFocus: any | null = useRef(null);
    const uFocus: any | null = useRef(null);
    const vFocus: any | null = useRef(null);
    const wFocus: any | null = useRef(null);
    const xFocus: any | null = useRef(null);
    const yFocus: any | null = useRef(null);
    const zFocus: any | null = useRef(null);
    const zeroFocus: any | null = useRef(null);
    const oneFocus: any | null = useRef(null);
    const twoFocus: any | null = useRef(null);
    const threeFocus: any | null = useRef(null);
    const fourFocus: any | null = useRef(null);
    const fiveFocus: any | null = useRef(null);
    const sixFocus: any | null = useRef(null);
    const sevenFocus: any | null = useRef(null);
    const eightFocus: any | null = useRef(null);
    const nineFocus: any | null = useRef(null);
    const spaceFocus: any | null = useRef(null);
    const eraseFocus: any | null = useRef(null);


    let resetAll = (): void => {
        aFocus.current.style.backgroundColor = '#000000';
        bFocus.current.style.backgroundColor = '#000000';
        cFocus.current.style.backgroundColor = '#000000';
        dFocus.current.style.backgroundColor = '#000000';
        eFocus.current.style.backgroundColor = '#000000';
        fFocus.current.style.backgroundColor = '#000000';
        gFocus.current.style.backgroundColor = '#000000';
        hFocus.current.style.backgroundColor = '#000000';
        iFocus.current.style.backgroundColor = '#000000';
        jFocus.current.style.backgroundColor = '#000000';
        kFocus.current.style.backgroundColor = '#000000';
        lFocus.current.style.backgroundColor = '#000000';
        mFocus.current.style.backgroundColor = '#000000';
        nFocus.current.style.backgroundColor = '#000000';
        oFocus.current.style.backgroundColor = '#000000';
        pFocus.current.style.backgroundColor = '#000000';
        qFocus.current.style.backgroundColor = '#000000';
        rFocus.current.style.backgroundColor = '#000000';
        sFocus.current.style.backgroundColor = '#000000';
        tFocus.current.style.backgroundColor = '#000000';
        uFocus.current.style.backgroundColor = '#000000';
        vFocus.current.style.backgroundColor = '#000000';
        wFocus.current.style.backgroundColor = '#000000';
        xFocus.current.style.backgroundColor = '#000000';
        yFocus.current.style.backgroundColor = '#000000';
        zFocus.current.style.backgroundColor = '#000000';
        zeroFocus.current.style.backgroundColor = '#000000';
        oneFocus.current.style.backgroundColor = '#000000';
        twoFocus.current.style.backgroundColor = '#000000';
        threeFocus.current.style.backgroundColor = '#000000';
        fourFocus.current.style.backgroundColor = '#000000';
        fiveFocus.current.style.backgroundColor = '#000000';
        sixFocus.current.style.backgroundColor = '#000000';
        sevenFocus.current.style.backgroundColor = '#000000';
        eightFocus.current.style.backgroundColor = '#000000';
        nineFocus.current.style.backgroundColor = '#000000';
        spaceFocus.current.style.backgroundColor = '#000000';
        eraseFocus.current.style.backgroundColor = '#000000';
        aFocus.current.style.color = '#ffffff';
        bFocus.current.style.color = '#ffffff';
        cFocus.current.style.color = '#ffffff';
        dFocus.current.style.color = '#ffffff';
        eFocus.current.style.color = '#ffffff';
        fFocus.current.style.color = '#ffffff';
        gFocus.current.style.color = '#ffffff';
        hFocus.current.style.color = '#ffffff';
        iFocus.current.style.color = '#ffffff';
        jFocus.current.style.color = '#ffffff';
        kFocus.current.style.color = '#ffffff';
        lFocus.current.style.color = '#ffffff';
        mFocus.current.style.color = '#ffffff';
        nFocus.current.style.color = '#ffffff';
        oFocus.current.style.color = '#ffffff';
        pFocus.current.style.color = '#ffffff';
        qFocus.current.style.color = '#ffffff';
        rFocus.current.style.color = '#ffffff';
        sFocus.current.style.color = '#ffffff';
        tFocus.current.style.color = '#ffffff';
        uFocus.current.style.color = '#ffffff';
        vFocus.current.style.color = '#ffffff';
        wFocus.current.style.color = '#ffffff';
        xFocus.current.style.color = '#ffffff';
        yFocus.current.style.color = '#ffffff';
        zFocus.current.style.color = '#ffffff';
        zeroFocus.current.style.color = '#ffffff';
        oneFocus.current.style.color = '#ffffff';
        twoFocus.current.style.color = '#ffffff';
        threeFocus.current.style.color = '#ffffff';
        fourFocus.current.style.color = '#ffffff';
        fiveFocus.current.style.color = '#ffffff';
        sixFocus.current.style.color = '#ffffff';
        sevenFocus.current.style.color = '#ffffff';
        eightFocus.current.style.color = '#ffffff';
        nineFocus.current.style.color = '#ffffff';
        spaceFocus.current.style.color = '#ffffff';
        eraseFocus.current.style.color = '#ffffff';

    }


    useEffect(() => {
        setFocus({ ...props.value })
        return () => {
            setFocus({ ...props.value })
        }
    }, [props]);

    useEffect(() => {
        if (isFocused.focusedKeyboard === true) {
            if (isFocused.value === 40) {//down
                if (position.y >= 7) {
                    //unhighlight current                
                    setPosition({ ...position, y: 0 })
                }
                else {
                    setPosition({ ...position, y: position.y + 1 })
                }
                
            }
            else if (isFocused.value === 38) {//up
                if (position.y === 0) {
                    setPosition({ ...position, y: 7 })
                }
                else{ 
                    setPosition({ ...position, y: position.y - 1 })
                }
            }
            else if (isFocused.value === 39) {//right
                if (position.x === 5) {
                    //unhighlight current
                    setPosition({ ...position, x: 0 })
                }
                else{ 
                    setPosition({ ...position, x: position.x + 1, })
                }
            }
            else if (isFocused.value === 37) {//left
                if (position.x === 0) {
                    //unhighlight current
                    resetAll();
                    setPosition({x: 0, y: 0})
                    props.onChange(EWho.menu)
                }
                else {
                    setPosition({ ...position, x: position.x - 1 })
                }
            }
        }
        else{
            setPosition({x: 0, y:0});
        }
    }, [isFocused]);

    useEffect(()=> {
        managePosition(position);
    },[position]);


    let managePosition = (value:ICartesian): void => { 
        switch (value) {
            case ({ x: 0, y: 0 }):
                resetAll();
                console.log('%c%s', 'color: #607339', );
                aFocus.current.style.backgroundColor = '#ffffff';
                aFocus.current.style.color = '#000000';
                break;
            case { x: 1, y: 0 }:
                resetAll();
                bFocus.current.style.backgroundColor = '#ffffff';
                bFocus.current.style.color = '#000000';
                break;
            case { x: 2, y: 0 }:
                resetAll();
                cFocus.current.style.backgroundColor = '#ffffff';
                cFocus.current.style.color = '#000000';
                break;
            case { x: 3, y: 0 }:
                resetAll();
                dFocus.current.style.backgroundColor = '#ffffff';
                dFocus.current.style.color = '#000000';
                break;
            case { x: 4, y: 0 }:
                resetAll();
                eFocus.current.style.backgroundColor = '#ffffff';
                eFocus.current.style.color = '#000000';
                break;
            case { x: 5, y: 0 }:
                resetAll();
                fFocus.current.style.backgroundColor = '#ffffff';
                fFocus.current.style.color = '#000000';
                break;
            case { x: 0, y: 1 }:
                resetAll();
                gFocus.current.style.backgroundColor = '#ffffff';
                gFocus.current.style.color = '#000000';
                break;
            case { x: 1, y: 1 }:
                resetAll();
                hFocus.current.style.backgroundColor = '#ffffff';
                hFocus.current.style.color = '#000000';
                break;
            case { x: 2, y: 1 }:
                resetAll();
                iFocus.current.style.backgroundColor = '#ffffff';
                iFocus.current.style.color = '#000000';
                break;
            case { x: 3, y: 1 }:
                resetAll();
                jFocus.current.style.backgroundColor = '#ffffff';
                jFocus.current.style.color = '#000000';
                break;
            case { x: 4, y: 1 }:
                resetAll();
                kFocus.current.style.backgroundColor = '#ffffff';
                kFocus.current.style.color = '#000000';
                break;
            case { x: 5, y: 1 }:
                resetAll();
                lFocus.current.style.backgroundColor = '#ffffff';
                lFocus.current.style.color = '#000000';
                break;
            case { x: 0, y: 2 }:
                resetAll();
                mFocus.current.style.backgroundColor = '#ffffff';
                mFocus.current.style.color = '#000000';
                break;                
            case { x: 1, y: 2 }:
                resetAll();
                nFocus.current.style.backgroundColor = '#ffffff';
                nFocus.current.style.color = '#000000';
                break;                
            case { x: 2, y: 2 }:
                resetAll();
                oFocus.current.style.backgroundColor = '#ffffff';
                oFocus.current.style.color = '#000000';
                break;                
            case { x: 3, y: 2 }:
                resetAll();
                pFocus.current.style.backgroundColor = '#ffffff';
                pFocus.current.style.color = '#000000';
                break;                
            case { x: 4, y: 2 }:
                resetAll();
                qFocus.current.style.backgroundColor = '#ffffff';
                qFocus.current.style.color = '#000000';
                break;          
            case { x: 5, y: 2 }:
                resetAll();
                rFocus.current.style.backgroundColor = '#ffffff';
                rFocus.current.style.color = '#000000';
                break;                      
            case { x: 0, y: 3 }:
                resetAll();
                sFocus.current.style.backgroundColor = '#ffffff';
                sFocus.current.style.color = '#000000';
                break;                
            case { x: 1, y: 3 }:
                resetAll();
                tFocus.current.style.backgroundColor = '#ffffff';
                tFocus.current.style.color = '#000000';
                break;                
            case { x: 2, y: 3 }:
                resetAll();
                uFocus.current.style.backgroundColor = '#ffffff';
                uFocus.current.style.color = '#000000';
                break;                
            case { x: 3, y: 3 }:
                resetAll();
                vFocus.current.style.backgroundColor = '#ffffff';
                vFocus.current.style.color = '#000000';
                break;                
            case { x: 4, y: 3 }:
                resetAll();
                wFocus.current.style.backgroundColor = '#ffffff';
                wFocus.current.style.color = '#000000';
                break;          
            case { x: 5, y: 3 }:
                resetAll();
                xFocus.current.style.backgroundColor = '#ffffff';
                xFocus.current.style.color = '#000000';
                break;                      
            case { x: 0, y: 4 }:
                resetAll();
                yFocus.current.style.backgroundColor = '#ffffff';
                yFocus.current.style.color = '#000000';
                break;                
            case { x: 1, y: 4 }:
                resetAll();
                zFocus.current.style.backgroundColor = '#ffffff';
                zFocus.current.style.color = '#000000';
                break;                
            case { x: 2, y: 4 }:
                resetAll();
                zeroFocus.current.style.backgroundColor = '#ffffff';
                zeroFocus.current.style.color = '#000000';
                break;                
            case { x: 3, y: 4 }:
                resetAll();
                oneFocus.current.style.backgroundColor = '#ffffff';
                oneFocus.current.style.color = '#000000';
                break;                
            case { x: 4, y: 4 }:
                resetAll();
                twoFocus.current.style.backgroundColor = '#ffffff';
                twoFocus.current.style.color = '#000000';
                break;          
            case { x: 5, y: 4 }:
                resetAll();
                threeFocus.current.style.backgroundColor = '#ffffff';
                threeFocus.current.style.color = '#000000';
                break;
            case { x: 0, y: 5 }:
                resetAll();
                fourFocus.current.style.backgroundColor = '#ffffff';
                fourFocus.current.style.color = '#000000';
                break;                
            case { x: 1, y: 5 }:
                resetAll();
                fiveFocus.current.style.backgroundColor = '#ffffff';
                fiveFocus.current.style.color = '#000000';
                break;                
            case { x: 2, y: 5 }:
                resetAll();
                sixFocus.current.style.backgroundColor = '#ffffff';
                sixFocus.current.style.color = '#000000';
                break;                
            case { x: 3, y: 5 }:
                resetAll();
                sevenFocus.current.style.backgroundColor = '#ffffff';
                sevenFocus.current.style.color = '#000000';
                break;                
            case { x: 4, y: 5 }:
                resetAll();
                eightFocus.current.style.backgroundColor = '#ffffff';
                eightFocus.current.style.color = '#000000';
                break;          
            case { x: 5, y: 5 }:
                resetAll();
                nineFocus.current.style.backgroundColor = '#ffffff';
                nineFocus.current.style.color = '#000000';
                break;
            case { x: 0, y: 6} || { x: 1, y: 6} || { x: 2, y: 6}:
                resetAll();
                spaceFocus.current.style.backgroundColor = '#ffffff';
                spaceFocus.current.style.color = '#000000';
                break;
            case { x: 3, y: 6} || { x: 4, y: 6} || { x: 5, y: 6}:
                resetAll();
                spaceFocus.current.style.backgroundColor = '#ffffff';
                spaceFocus.current.style.color = '#000000';
                break;
            default:
                resetAll();
                // aFocus.current.style.backgroundColor = '#ffffff';
                // aFocus.current.style.color = '#000000';
                break;
        }
    };

    return (
        <>
            <div style={{ width: '100%', height: '15%', alignContent: 'center' }}>
                <input
                    style={{
                        width: '70%',
                        marginLeft: '10%',
                        marginTop: '10%',
                        backgroundColor: '#000000',
                        borderColor: '#000000',
                        color: '#ffffff',
                        fontSize: 30
                    }}
                    size={5}
                    type="text"
                    aria-label={labelText}
                    aria-required="true"
                    onChange={onchangeHandler}
                    value={input}
                    placeholder="Busca"
                />
            </div>mFocus

            <div style={{ width: '100%', height: '50%' }}>
                <table style={{
                    border: '2px solid white',
                    marginTop: '15%',
                    marginRight: '3%',
                    marginLeft: '3%',
                    borderCollapse: 'collapse'
                }}>
                    <tr style={{ border: '2px solid white' }}>
                        <td ref={aFocus} style={{ width: '2%', border: '2px solid white', color: '#ffffff', fontSize: 30, textAlign: 'center', verticalAlign: 'middle' }}>a</td>
                        <td ref={bFocus} style={{ width: '2%', border: '2px solid white', color: '#ffffff', fontSize: 30, textAlign: 'center', verticalAlign: 'middle' }}>b</td>
                        <td ref={cFocus} style={{ width: '2%', border: '2px solid white', color: '#ffffff', fontSize: 30, textAlign: 'center', verticalAlign: 'middle' }}>c</td>
                        <td ref={dFocus} style={{ width: '2%', border: '2px solid white', color: '#ffffff', fontSize: 30, textAlign: 'center', verticalAlign: 'middle' }}>d</td>
                        <td ref={eFocus} style={{ width: '2%', border: '2px solid white', color: '#ffffff', fontSize: 30, textAlign: 'center', verticalAlign: 'middle' }}>e</td>
                        <td ref={fFocus} style={{ width: '2%', border: '2px solid white', color: '#ffffff', fontSize: 30, textAlign: 'center', verticalAlign: 'middle' }}>f</td>
                    </tr>
                    <tr>
                        <td ref={gFocus} style={{ width: '2%', border: '2px solid white', color: '#ffffff', fontSize: 30, textAlign: 'center', verticalAlign: 'middle' }}>g</td>
                        <td ref={hFocus} style={{ width: '2%', border: '2px solid white', color: '#ffffff', fontSize: 30, textAlign: 'center', verticalAlign: 'middle' }}>h</td>
                        <td ref={iFocus} style={{ width: '2%', border: '2px solid white', color: '#ffffff', fontSize: 30, textAlign: 'center', verticalAlign: 'middle' }}>i</td>
                        <td ref={jFocus} style={{ width: '2%', border: '2px solid white', color: '#ffffff', fontSize: 30, textAlign: 'center', verticalAlign: 'middle' }}>j</td>
                        <td ref={kFocus} style={{ width: '2%', border: '2px solid white', color: '#ffffff', fontSize: 30, textAlign: 'center', verticalAlign: 'middle' }}>k</td>
                        <td ref={lFocus} style={{ width: '2%', border: '2px solid white', color: '#ffffff', fontSize: 30, textAlign: 'center', verticalAlign: 'middle' }}>l</td>

                    </tr>
                    <tr>
                        <td ref={mFocus} style={{ width: '2%', border: '2px solid white', color: '#ffffff', fontSize: 30, textAlign: 'center', verticalAlign: 'middle' }}>m</td>
                        <td ref={nFocus} style={{ width: '2%', border: '2px solid white', color: '#ffffff', fontSize: 30, textAlign: 'center', verticalAlign: 'middle' }}>n</td>
                        <td ref={oFocus} style={{ width: '2%', border: '2px solid white', color: '#ffffff', fontSize: 30, textAlign: 'center', verticalAlign: 'middle' }}>o</td>
                        <td ref={pFocus} style={{ width: '2%', border: '2px solid white', color: '#ffffff', fontSize: 30, textAlign: 'center', verticalAlign: 'middle' }}>p</td>
                        <td ref={qFocus} style={{ width: '2%', border: '2px solid white', color: '#ffffff', fontSize: 30, textAlign: 'center', verticalAlign: 'middle' }}>q</td>
                        <td ref={rFocus} style={{ width: '2%', border: '2px solid white', color: '#ffffff', fontSize: 30, textAlign: 'center', verticalAlign: 'middle' }}>r</td>

                    </tr>
                    <tr>
                        <td ref={sFocus} style={{ width: '2%', border: '2px solid white', color: '#ffffff', fontSize: 30, textAlign: 'center', verticalAlign: 'middle' }}>s</td>
                        <td ref={tFocus} style={{ width: '2%', border: '2px solid white', color: '#ffffff', fontSize: 30, textAlign: 'center', verticalAlign: 'middle' }}>t</td>
                        <td ref={uFocus} style={{ width: '2%', border: '2px solid white', color: '#ffffff', fontSize: 30, textAlign: 'center', verticalAlign: 'middle' }}>u</td>
                        <td ref={vFocus} style={{ width: '2%', border: '2px solid white', color: '#ffffff', fontSize: 30, textAlign: 'center', verticalAlign: 'middle' }}>v</td>
                        <td ref={wFocus} style={{ width: '2%', border: '2px solid white', color: '#ffffff', fontSize: 30, textAlign: 'center', verticalAlign: 'middle' }}>w</td>
                        <td ref={xFocus} style={{ width: '2%', border: '2px solid white', color: '#ffffff', fontSize: 30, textAlign: 'center', verticalAlign: 'middle' }}>x</td>
                    </tr>
                    <tr>
                        <td ref={yFocus} style={{ width: '2%', border: '2px solid white', color: '#ffffff', fontSize: 30, textAlign: 'center', verticalAlign: 'middle' }}>y</td>
                        <td ref={zFocus} style={{ width: '2%', border: '2px solid white', color: '#ffffff', fontSize: 30, textAlign: 'center', verticalAlign: 'middle' }}>z</td>
                        <td ref={zeroFocus} style={{ width: '2%', border: '2px solid white', color: '#ffffff', fontSize: 30, textAlign: 'center', verticalAlign: 'middle' }}>0</td>
                        <td ref={oneFocus} style={{ width: '2%', border: '2px solid white', color: '#ffffff', fontSize: 30, textAlign: 'center', verticalAlign: 'middle' }}>1</td>
                        <td ref={twoFocus} style={{ width: '2%', border: '2px solid white', color: '#ffffff', fontSize: 30, textAlign: 'center', verticalAlign: 'middle' }}>2</td>
                        <td ref={threeFocus} style={{ width: '2%', border: '2px solid white', color: '#ffffff', fontSize: 30, textAlign: 'center', verticalAlign: 'middle' }}>3</td>
                    </tr>
                    <tr>
                        <td ref={fourFocus} style={{ width: '2%', border: '2px solid white', color: '#ffffff', fontSize: 30, textAlign: 'center', verticalAlign: 'middle' }}>4</td>
                        <td ref={fiveFocus} style={{ width: '2%', border: '2px solid white', color: '#ffffff', fontSize: 30, textAlign: 'center', verticalAlign: 'middle' }}>5</td>
                        <td ref={sixFocus} style={{ width: '2%', border: '2px solid white', color: '#ffffff', fontSize: 30, textAlign: 'center', verticalAlign: 'middle' }}>6</td>
                        <td ref={sevenFocus} style={{ width: '2%', border: '2px solid white', color: '#ffffff', fontSize: 30, textAlign: 'center', verticalAlign: 'middle' }}>7</td>
                        <td ref={eightFocus} style={{ width: '2%', border: '2px solid white', color: '#ffffff', fontSize: 30, textAlign: 'center', verticalAlign: 'middle' }}>8</td>
                        <td ref={nineFocus} style={{ width: '2%', border: '2px solid white', color: '#ffffff', fontSize: 30, textAlign: 'center', verticalAlign: 'middle' }}>9</td>
                    </tr>
                    <tr>
                        <td ref={spaceFocus} colSpan={3} style={{ border: '2px solid white', color: '#ffffff', fontSize: 30, textAlign: 'center', verticalAlign: 'middle' }}>espaço</td>
                        <td ref={eraseFocus} colSpan={3} style={{ border: '2px solid white', color: '#ffffff', fontSize: 30, textAlign: 'center', verticalAlign: 'middle' }}>apagar</td>
                    </tr>
                </table>
            </div>
            <div style={{ width: '100%', height: '30%' }}></div>
        </>
    )
}