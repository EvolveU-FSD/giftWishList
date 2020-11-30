import {useState} from 'react'

export default function WishListView({familyMember}){
    return <div>
        <div>{familyMember.name}'s Wish List</div>
        {
            familyMember.wishList.map((present, index) => 
                <PresentView present={present} key={index}/> )
        }
        <PresentAdder familyMember={familyMember}/>
    </div>
  }

function PresentView({present}){
    return <div style={{margin: 10, color: 'red'}}>{present}</div>
}

function PresentAdder({familyMember}){
    const [giftName, setGiftNameFunction] = useState('')

    function changeGiftName(event){
        setGiftNameFunction(event.target.value)
    }

    function addNewGiftToUser(){
        const oldWishList = familyMember.wishList
        const newWishList = [...oldWishList, giftName]

        fetch(`http://localhost:8081/familyMember?id=${familyMember.id}`, 
        {
            method: 'PATCH',
            headers: {"Content-Type": "application/json"},                 
            body: JSON.stringify({wishList: newWishList})   
        })
    }

    return <div style={{display: 'flex', flexDirection: 'row', alignContent: 'flex-start', justifyContent: 'flex-start'}}>
        <input type='text' placeholder='New gift name' value={giftName} onChange={changeGiftName}></input>
        <div style={{backgroundColor: 'red', color: 'white', width: 150, borderRadius: 8, textAlign: 'center', marginLeft: 10}}
            onClick={addNewGiftToUser}
        >Add</div>
    </div>
}