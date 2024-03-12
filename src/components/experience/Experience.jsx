import './experience.css'
export default function Experience(props) {
    const tools = props.toolsUsed;
    const listTools = tools.map((tool) =>
        <li key={tools} className="list-group-item">
            {tool}
        </li>
    )
    return (
        <ul className="list-group">
            <li className="list-group-item mt-5">
                <p className="fs-4">{props.title}<span className="aqua">{props.company}</span></p>
                <p>{props.description}</p>
                <ul className="list-group list-group-flush list-group-horizontal">
                    {listTools}
                </ul>
            </li>
        </ul>


    )

}