const express = require('express')
const app = express()

const cors = require('cors')
app.use(cors())
app.use(express.json())

// const family={
//     'Chris': ['Aracadia Quest', 'Marvel United'],
//     'Al': ['Red Sox', 'Black Sox', 'Calgary Flames Coffee Mug'],
//     'Tony': ['Trout', 'Bass', 'Iron Man Mask']
// }

const familyWishlists=[
    {name: 'Chris', id: 0, wishList: ['Aracadia Quest', 'Marvel United']},
    {name: 'Al', id: 1, wishList: ['Red Sox', 'Black Sox', 'Calgary Flames Coffee Mug']},
    {name:  'Tony', id: 2, wishList: ['Trout', 'Bass', 'Iron Man Mask']}
]


var server = app.listen(8081, function(){
    var port = server.address().port
    console.log('express running on', port)
})

app.get('/family', function(req, res){
    res.send(
         familyWishlists
    )
})

app.patch('/familyMember', function(req, res){
    const id = req.query.id
    const familyMember = familyWishlists.find(member => id == member.id)
    console.log('found familyMember', familyMember, 'with id', id)
    const {body: {wishList}} = req
    familyMember.wishList = wishList
    console.log('final familyMember', familyMember)
})