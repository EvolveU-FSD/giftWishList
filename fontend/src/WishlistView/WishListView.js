import {useState} from 'react'

export default function WishListView({familyMember}){
    return <div>
        <div style={{backgroundColor: 'darkred', padding: 20, display: 'flex', justifyContent: 'center', color: 'white',  fontSize: 24, fontWeight: 'bold'}}>
            <div>{familyMember.name}'s Wish List</div>
        </div>
        <div style={{backgroundColor: 'red', height: '100vh', display: 'flex', justifyContent: 'center'}}>
            <div style={{width: 500, backgroundColor: 'white', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                {
                    familyMember.wishList.map((present, index) => 
                        <PresentView present={present} key={index}/> )
                }
                <PresentAdder familyMember={familyMember}/>
            </div>
        </div>
    </div>
  }

function PresentView({present}){
    return <div style={{color: 'darkred', margin: 20, fontSize: 20, fontWeight: 'bold'}}>{present}</div>
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

    return <div style={{display: 'flex', flexDirection: 'row', alignContent: 'flex-start', justifyContent: 'flex-start', marginTop: 20, borderWidth: 2, borderStyle: 'solid', borderColor: 'darkred', borderRadius: 12, padding: 20}}>
        <input type='text' placeholder='New gift name' style={{fontSize: 20}}
            value={giftName} onChange={changeGiftName}></input>
        <div style={{backgroundColor: 'red', color: 'white', width: 150, borderRadius: 8, textAlign: 'center', marginLeft: 10, fontSize: 20, fontWeight: 'bolder'}}
            onClick={addNewGiftToUser}
        >Add</div>
    </div>
}