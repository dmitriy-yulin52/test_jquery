import checkNumInputs from './checkNumInputs'

const changeModalState = (state)=> {
    const windowForm = document.querySelectorAll('.balcon_icons_img')
    const windowWidth = document.querySelector('#width')
    const windowHeight = document.querySelector('#height')
    const windowType = document.querySelector('#view_type')
    const windowProfile = document.querySelectorAll('.checkbox')

    checkNumInputs('#width')
    checkNumInputs('#height')

    function bindActionToElems(event,elem,prop){
        elem.forEach((item, i)=>{
            item.addEventListener(event,()=>{
                state[prop] = i
                console.log(state)
            })
        })
    }

    bindActionToElems('click',windowForm,'form')
}

export default changeModalState