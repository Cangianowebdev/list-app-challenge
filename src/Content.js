import ItemList from './ItemList';

export const Content = ({items, handleCheck, handleDelete}) => {
    
    return (

        <>
            {items.length ? (
              <ItemList
                    items={items}
                    handleCheck={handleCheck}
                    handleDelete={handleDelete}
              />
            ) : (
                <p style={{ marginTop: '2rem' }}>No items in your list.</p>
            )}
        </>
    )
}
export default Content