import Movies from '../../components/movies/movies';
import SearchKeyboard from '../../components/searchKeyboard/searchKeyboard';
import Menu from '../../components/menu/menu';

interface keyChange { 
    value: number
  }
  


export default function Main(props: keyChange) {    
    // console.log('%c%s', 'color: #733d00', props.value);

return ( 
    <>
     <table style={{width:'100%', height:'100%'}} >
         <tbody>
         <tr>
            <td style={{flexGrow: 1, width:'10%', height:'100%', border: '2px solid', borderRightColor:'white', backgroundColor:'aliceblue'}}>
               <Menu /> 
            </td>
            <td style={{width:'30%', height:'100%',border: '2px solid', borderRightColor:'white' }}>
                <SearchKeyboard />
            </td>
            <td style={{width:'50%', height:'100%'}}>
                <Movies />
            </td>
        </tr>
         </tbody>
     </table>
    </>
)
}