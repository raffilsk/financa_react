import logo from '../../assets/logo.png'
import './styles.css'

export function Header(props) {

   return(
      <header className='title--button'>
         <div className='content'>
            <img src={logo} alt="senfinanca" />
            <button className="button--NewOperation" type="button" onClick={props.children}>
               Nova Operação
            </button>
         </div>
      </header>
   )
}