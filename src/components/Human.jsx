export function Human (props) {
    const {id, name, age, removeHumans} = props
    return <h2>{name}{age}
        <button onClick={() => removeHumans(id)}>
            delete users
        </button>
    </h2>
}