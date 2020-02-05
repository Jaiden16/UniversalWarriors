const data= [
    {id:"1",name: "Daku", bio: "to be filled"},
    {id:"2",name: "Laser", bio: "to be filled"},
    {id:"3",name: "Rock", bio: "to be filled"},
    {id:"4",name: "Ghost", bio: "to be filled"},
    {id:"5",name: "Stife", bio: "to be filled"},
]

const getAll = () => data;

const getOne = name => data.find(char => char.name === name)

export default {
    getAll,
    getOne
}