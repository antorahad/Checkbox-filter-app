const Content = ({item}) => {
    const {id, name, price} = item
    return (
        <div className='bg-slate-800 text-white p-5 rounded-xl'>
            <p>{name}</p>
            <p>{price}</p>
        </div>
    );
};

export default Content;