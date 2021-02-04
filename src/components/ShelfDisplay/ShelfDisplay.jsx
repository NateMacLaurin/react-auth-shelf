import {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'


export default function ShelfDisplay() {

    const dispatch = useDispatch();
    const shelf = useSelector(store=>store.shelf);

    const handleClick = (id) => {
        console.log('in delete')
        dispatch({type: 'DELETE_ITEM', payload: id})
    }

    useEffect(()=>{
        dispatch({type: 'GET_SHELF'})
    }, [dispatch])

    return (
        // api/shelf
        <>
            <table>
                <thead>
                    <tr>
                        <th>Item</th>
                        <th>image</th>
                        <th>DELETE?</th>
                    </tr>
                </thead>
                <tbody>
                    {shelf.map((item)=>{
                        return(
                        <tr key={item.id}>
                            <td>{item.description}</td>
                            <td>{item.image_url}</td>
                            <td><button onClick={()=>handleClick(item.id)}>DELETE!</button></td>
                        </tr>
                    )})}
                </tbody>
            </table>
        </>
    )
}
