import { useRef, useState } from "react";

interface IMapper {
    value?: number,
    focusedMenu?: boolean,
    focusedMovies?: boolean,
    focusedKeyboard?: boolean
  };

export default function SearchKeyboard(props: any){

    const labelText: string = 'Something';
    let [input, setInput] = useState<string>('');
    let onchangeHandler = (): void => {};

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



    return(
        <>
            <div style={{width:'100%', height:'15%', alignContent:'center'}}>
                <input
                    style={{width:'70%',
                            marginLeft:'10%',
                            marginTop:'10%',
                            backgroundColor:'#000000',
                            borderColor:'#000000',
                            color:'#ffffff',
                            fontSize:30
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

            <div style={{width:'100%', height:'50%'}}>
                <table  style={{border:'2px solid white',
                                marginTop:'15%',
                                marginRight:'3%',
                                marginLeft:'3%',
                                borderCollapse:'collapse'
                                }}>
                    <tr style={{border:'2px solid white'}}>
                        <td ref={aFocus} style={{width:'2%', border:'2px solid white',color:'#ffffff',fontSize:30, textAlign:'center', verticalAlign:'middle'}}>a</td>
                        <td ref={bFocus} style={{width:'2%', border:'2px solid white',color:'#ffffff',fontSize:30, textAlign:'center', verticalAlign:'middle'}}>b</td>
                        <td ref={cFocus} style={{width:'2%', border:'2px solid white',color:'#ffffff',fontSize:30, textAlign:'center', verticalAlign:'middle'}}>c</td>
                        <td ref={dFocus} style={{width:'2%', border:'2px solid white',color:'#ffffff',fontSize:30, textAlign:'center', verticalAlign:'middle'}}>d</td>
                        <td ref={eFocus} style={{width:'2%', border:'2px solid white',color:'#ffffff',fontSize:30, textAlign:'center', verticalAlign:'middle'}}>e</td>
                        <td ref={fFocus} style={{width:'2%', border:'2px solid white',color:'#ffffff',fontSize:30, textAlign:'center', verticalAlign:'middle'}}>f</td>
                    </tr>
                    <tr>
                        <td ref={gFocus} style={{width:'2%', border:'2px solid white',color:'#ffffff',fontSize:30, textAlign:'center', verticalAlign:'middle'}}>g</td>
                        <td ref={hFocus} style={{width:'2%', border:'2px solid white',color:'#ffffff',fontSize:30, textAlign:'center', verticalAlign:'middle'}}>h</td>
                        <td ref={iFocus} style={{width:'2%', border:'2px solid white',color:'#ffffff',fontSize:30, textAlign:'center', verticalAlign:'middle'}}>i</td>
                        <td ref={jFocus} style={{width:'2%', border:'2px solid white',color:'#ffffff',fontSize:30, textAlign:'center', verticalAlign:'middle'}}>j</td>
                        <td ref={kFocus} style={{width:'2%', border:'2px solid white',color:'#ffffff',fontSize:30, textAlign:'center', verticalAlign:'middle'}}>k</td>
                        <td ref={lFocus} style={{width:'2%', border:'2px solid white',color:'#ffffff',fontSize:30, textAlign:'center', verticalAlign:'middle'}}>l</td>

                    </tr>
                    <tr>
                        <td ref={mFocus} style={{width:'2%', border:'2px solid white',color:'#ffffff',fontSize:30, textAlign:'center', verticalAlign:'middle'}}>m</td>
                        <td ref={nFocus} style={{width:'2%', border:'2px solid white',color:'#ffffff',fontSize:30, textAlign:'center', verticalAlign:'middle'}}>n</td>
                        <td ref={oFocus} style={{width:'2%', border:'2px solid white',color:'#ffffff',fontSize:30, textAlign:'center', verticalAlign:'middle'}}>o</td>
                        <td ref={pFocus} style={{width:'2%', border:'2px solid white',color:'#ffffff',fontSize:30, textAlign:'center', verticalAlign:'middle'}}>p</td>
                        <td ref={qFocus} style={{width:'2%', border:'2px solid white',color:'#ffffff',fontSize:30, textAlign:'center', verticalAlign:'middle'}}>q</td>
                        <td ref={rFocus} style={{width:'2%', border:'2px solid white',color:'#ffffff',fontSize:30, textAlign:'center', verticalAlign:'middle'}}>r</td>
                        
                    </tr>
                    <tr>
                        <td ref={sFocus} style={{width:'2%', border:'2px solid white',color:'#ffffff',fontSize:30, textAlign:'center', verticalAlign:'middle'}}>s</td>
                        <td ref={tFocus} style={{width:'2%', border:'2px solid white',color:'#ffffff',fontSize:30, textAlign:'center', verticalAlign:'middle'}}>t</td>
                        <td ref={uFocus} style={{width:'2%', border:'2px solid white',color:'#ffffff',fontSize:30, textAlign:'center', verticalAlign:'middle'}}>u</td>
                        <td ref={vFocus} style={{width:'2%', border:'2px solid white',color:'#ffffff',fontSize:30, textAlign:'center', verticalAlign:'middle'}}>v</td>
                        <td ref={wFocus} style={{width:'2%', border:'2px solid white',color:'#ffffff',fontSize:30, textAlign:'center', verticalAlign:'middle'}}>w</td>
                        <td ref={xFocus} style={{width:'2%', border:'2px solid white',color:'#ffffff',fontSize:30, textAlign:'center', verticalAlign:'middle'}}>x</td>
                    </tr>
                    <tr>
                        <td ref={yFocus} style={{width:'2%', border:'2px solid white',color:'#ffffff',fontSize:30, textAlign:'center', verticalAlign:'middle'}}>y</td>
                        <td ref={zFocus} style={{width:'2%', border:'2px solid white',color:'#ffffff',fontSize:30, textAlign:'center', verticalAlign:'middle'}}>z</td>
                        <td ref={zeroFocus} style={{width:'2%', border:'2px solid white',color:'#ffffff',fontSize:30, textAlign:'center', verticalAlign:'middle'}}>0</td>
                        <td ref={oneFocus} style={{width:'2%', border:'2px solid white',color:'#ffffff',fontSize:30, textAlign:'center', verticalAlign:'middle'}}>1</td>
                        <td ref={twoFocus} style={{width:'2%', border:'2px solid white',color:'#ffffff',fontSize:30, textAlign:'center', verticalAlign:'middle'}}>2</td>
                        <td ref={threeFocus} style={{width:'2%', border:'2px solid white',color:'#ffffff',fontSize:30, textAlign:'center', verticalAlign:'middle'}}>3</td>
                    </tr>
                    <tr>
                        <td ref={fourFocus} style={{width:'2%', border:'2px solid white',color:'#ffffff',fontSize:30, textAlign:'center', verticalAlign:'middle'}}>4</td>
                        <td ref={fiveFocus} style={{width:'2%', border:'2px solid white',color:'#ffffff',fontSize:30, textAlign:'center', verticalAlign:'middle'}}>5</td>
                        <td ref={sixFocus} style={{width:'2%', border:'2px solid white',color:'#ffffff',fontSize:30, textAlign:'center', verticalAlign:'middle'}}>6</td>
                        <td ref={sevenFocus} style={{width:'2%', border:'2px solid white',color:'#ffffff',fontSize:30, textAlign:'center', verticalAlign:'middle'}}>7</td>
                        <td ref={eightFocus} style={{width:'2%', border:'2px solid white',color:'#ffffff',fontSize:30, textAlign:'center', verticalAlign:'middle'}}>8</td>
                        <td ref={nineFocus} style={{width:'2%', border:'2px solid white',color:'#ffffff',fontSize:30, textAlign:'center', verticalAlign:'middle'}}>9</td>
                    </tr>
                    <tr>
                        <td ref={spaceFocus} colSpan={3} style={{ border:'2px solid white',color:'#ffffff',fontSize:30, textAlign:'center', verticalAlign:'middle'}}>espaço</td>
                        <td ref={eraseFocus} colSpan={3} style={{ border:'2px solid white',color:'#ffffff',fontSize:30, textAlign:'center', verticalAlign:'middle'}}>apagar</td>
                    </tr>
                </table>
            </div>
            <div style={{width:'100%', height:'30%'}}></div>
        </>
        )
}