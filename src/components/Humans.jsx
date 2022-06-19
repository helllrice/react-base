import {Human} from "./Human";


export function Humans (props) {
    return <div>
        {
            props.humans.map(human => (
                <Human
                    key={human.id}
                    age={human.age}
                    id={human.id}
                    name={human.name}
                    removeHumans={props.removeHumans} />
            ))
        }
    </div>
}