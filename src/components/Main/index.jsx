import  logo from '../../assets/logo.svg';
import './index.scss';
import pokemons from '../../database/data';
import { Card } from '../../UI/Card';
export const Main = () => {
    return (
        <>
        <div className="container">
            <div className="main">
                <div className="main__logo">
                    <img src={logo} alt="" />
                </div>
                <div className="main__sort">
                    <select id="sortLetter">
                        <option value="A-Z">A-Z</option>
                        <option value="Z-A">Z-A</option>
                    </select>
                    <input type="text" placeholder='Search' id='search'/>
                <select id="type">
                    <option selected disabled>Type</option>
                </select>
                <button className='btn'>Button</button>
                </div>
                <div className="main__cards">
                    {pokemons.length > 0 ? (
                            pokemons?.map( el => {
                                return <Card key={el.id} user={el}/>
                            })
                        ) : <h1>NOT Found</h1>
                    }
                </div>
            </div>
        </div>
        </>
    )
}
