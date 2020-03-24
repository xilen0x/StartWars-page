const getState = ({getStore, getActions, setStore}) => {
    return {
        store: {
            name: '',
            films: {}
        },
        actions: {
            setName: e => {
                setStore({
                    name: e.target.value
                })
            },
            getFilms: url => {
                fetch(url)
                    .then(resp => resp.json())
                    .then(data => {
                        setStore({
                            films: data
                        })
                    });
            }
        }
    }
}

export default getState;