import {useDispatch} from 'react-redux';
import { counterActions } from '../redux/counterSlice';
type Props = {
    username: string
}
export const CounterUpdater: React.FC<Props> = ({username}) => {
    const dispatch = useDispatch();
    return <div>
        <p>username = {username}</p>
        <button onClick={() => dispatch(counterActions.increment(username))}> </button>
     
        <button onClick={() => dispatch(counterActions.reset())}>reset</button>
    </div>
}
