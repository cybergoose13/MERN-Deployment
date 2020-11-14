import { navigate } from '@reach/router';
import Axios from 'axios';
import { useEffect, useState } from 'react';

export const AddPirate= props=>{

    const [name, setName]= useState("");
    const [image, setImage]= useState("");
    const [chests, setChests]= useState(0);
    const [phrase, setPhrase]= useState("");
    const [position, setPosistion]= useState("");
    const [peg, setPeg]= useState(false);
    const [eye, setEye]= useState(false);
    const [hook, setHook]= useState(false);
    const [pirates, setPirates]= useState([]);
    const [hasCaptain, setCaptain]= useState(false);
    const [errors, setErrors]= useState([]);

    useEffect(() =>{
        Axios.get("http://localhost:8000/api/pirates")
        .then(res => setPirates(res.data))
        .catch(err => console.log(err));
        captainHandler();
    }, [pirates])

    const onSubmitHandler= e =>{
        e.preventDefault();
        const newPirate={
            name:name,
            image:image,
            chests:chests,
            phrase:phrase,
            position:position,
            pegleg:peg,
            eyepatch:eye,
            hook:hook
        }
        Axios.post("http://localhost:8000/api/pirate/add", newPirate)
        .then(res => {
            console.log(res.data);
            const errorRes= res.data.error.errors;
            const errorArr= [];
            for(const key of Object.keys(errorRes)){
                errorArr.push(errorRes[key].message);
            }
            setErrors(errorArr);
        })
        .catch(err => {
            console.log(err)
        });
        
        // navigate("/pirates");
    }

    const crewBoardHandler= e =>{
        navigate("/pirates");
    }

    const captainHandler= () =>{
        const filter= pirates.filter(f =>{
            return f.position === "captain" ? f : null;
        })

        console.log("********" + filter)
        setCaptain(filter.length > 0 || filter === undefined ? true : false);
        // setCaptain(filter ? true : false);
    }

    return(
        <dir>
            <div>
                <h1>Add Pirate</h1>
                <button onClick={crewBoardHandler}>Crew Board</button>
            </div>

            <form onSubmit={onSubmitHandler}>
                {errors.map((err, index) => <p key={index}>{err}</p>)}
                <label>Pirate Name:</label>
                <input type="text" onChange={e => setName(e.target.value)}/>
                <br/>
                <label>Image Url:</label>
                <input type="text" onChange={e => setImage(e.target.value)}/>
                <br/>
                <label># of Treasure Chests:</label>
                <input type="number" min="0" onChange={e => setChests(e.target.value)}/>
                <br/>
                <label>Phrase:</label>
                <input type="text" onChange={e => setPhrase(e.target.value)}/>
                <br/>
                <label>Crew Position</label>
                <select name="" id="" onChange={e => setPosistion(e.target.value)}>
                    <option value="" disabled={hasCaptain} selected={true}>select position</option>
                    <option value="captain" disabled={hasCaptain}>Captain</option>
                    <option value="first mate">First Mate</option>
                    <option value="quarter master">Quarter Master</option>
                    <option value="boatswain">Boastswain</option>
                    <option value="powder monkey">Powder Monkey</option>
                </select>
                <br/>
                <input type="checkbox" name="" id="" onChange={e => {setPeg(e.target.checked)}}/>
                <label>Peg Leg</label>
                <br/>
                <input type="checkbox" name="" id="" onChange={e => {setEye(e.target.checked)}}/>
                <label>Eye Patch</label>
                <br/>
                <input type="checkbox" name="" id="" onChange={e => {setHook(e.target.checked)}}/>
                <label>Hand Hook</label>
                <br/>
                <input type="submit" value="Add Pirate"/>
            </form>
        </dir>
    )
}