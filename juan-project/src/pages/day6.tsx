import { useMemo, useReducer, useState } from 'react'
import Button from '../components/atoms/button'
import useFetch from '../hooks/useFetch'
// import PostItem from '../components/atoms/post-item'
import { useNavigate } from 'react-router-dom'

interface State {
    num1: number
    num2: number
    num3: number
    total: number
}

const initialState: State = {
    num1: 0,
    num2: 0,
    num3: 0,
    total: 0
}

function reducer(state: State, action: { type: string, payload: State }) {
    switch (action.type) {
        case "increment-num1":

            const num1 = action.payload.num1

            return {
                ...state,
                num1,
                total: state.num2 + state.num3 + num1
            };
        case "increment-num2":
            return {
                ...state,
                num2: action.payload.num2
            };

        case "increment-together":
            return {
                ...state,
                num1: action.payload.num1,
                num2: action.payload.num2,
                num3: action.payload.num3
            };
        default:
            throw new Error('ERROR')
    }
}

export default function Day6() {

    const [changeState, setChangeState] = useState(false)

    const { data, loading, error } = useFetch()

    const navigate = useNavigate()

    const [state, dispatch] = useReducer(reducer, initialState)

    const array = [21312123123312, 213121313, 213213123, 21313, 123213, 3, 213, 123, 1, 312, 3, 13, 213, 2, 31, 2, 3, 23, 1, 23, 1, 3, 213, 21, 3, 123, 2, 312, 3, 1, 32, 213, 12, 312, 3, 131, 2, 321, 3, 213, 1, 344532, 56346, 457, 6, 23, 4, 668, 76, 436, 54, 64, 7, 67876, 634, 5645, 63, 25, 3, 5, 12, 321, 31, 3, 13, 1, 23, 1]

    // 0.2 ms -> 0ms
    const total = useMemo(() => {
        console.log('ESTOY CALCULANDO')
        return array.reduce((prev, value) => prev + value, 0)
    }, [])

    return (
        <div>
            <p>{changeState ? 'Me estoy mostrando' : 'No me estoy mostrando'}</p>

            <p>{total}</p>

            <div>
                <Button onClick={() => {
                    navigate('/day5')
                }}>
                    VE AL DIA 5
                </Button>
            </div>

            {/*
                loading ? (
                    <p>Cargando...</p>
                ) : error ? (
                    <p>Hubo un error fatal!</p>
                ) : (
                    <div className='flex flex-col gap-5'>
                        {
                            data.map((post) => (
                                <PostItem {...post} />
                            ))
                        }
                    </div>
                )
            */}

            <div>
                <p>Num1 : {state.num1}</p>
                <input type="text" onChange={
                    (e) =>
                        dispatch({
                            type: 'increment-num1',
                            payload: {
                                ...state,
                                num1: Number(e.target.value)
                            }
                        })}
                    value={state.num1}
                />
            </div>

            <div>
                <p>Num2 : {state.num2}</p>
                <input type="text" onChange={
                    (e) =>
                        dispatch({
                            type: 'increment-num2',
                            payload: {
                                ...state,
                                num2: Number(e.target.value)
                            }
                        })}
                    value={state.num2}
                />
            </div>

            <div>
                <p>Num3 : {state.num3}</p>
                <input type="text" onChange={
                    (e) =>
                        dispatch({
                            type: 'increment-together',
                            payload: {
                                num1: Number(e.target.value),
                                num2: Number(e.target.value),
                                num3: Number(e.target.value)
                            }
                        })}
                    value={state.num3}
                />
            </div>
        </div>
    )
}
