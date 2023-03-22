import './index.scss';
export const Card = (props) => {
    return (
        <>
        <div className="card">
            <img src={props.user.img} alt="" />
            <div className="card__body">
                <div className="card__body-title">
                    <h4>{props.user.name}</h4>
                    <small>{props.user.type[0]} {props.user.type[1]}</small>
                </div>
                <div className="card__body-info">
                <strong>{props.user.weight}</strong>
                <strong>{props.user.avg_spawns}</strong>
            </div>
            </div>
        </div>
        </>
    )
} 