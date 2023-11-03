import { ThreeDots } from  'react-loader-spinner'
import s from './Loader.module.css'

const Loader = () => {
    return (
        <div className={s.Loader}>
            <ThreeDots color='blue' />
        </div>
    )
    
}

export default Loader;