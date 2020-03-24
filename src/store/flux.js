const getState = ({getStore, getActions, setStore}) => {
    return {
        store: {
            name: '',
            gender: ''
        },
        actions: {
            setName: e => {
   
            },
            getPeople: url => {
                fetch(url)
                    .then(resp => resp.json())
                    .then(data => {
                        setStore({
                            people: data
                        })
                    });
            }
        }
    }
}

export default getState;