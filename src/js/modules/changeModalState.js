import checkNumInputs from './checkNumInputs'

const changeModalState = (state) => {
    const windowForm = document.querySelectorAll('.balcon_icons_img')
    const windowWidth = document.querySelectorAll('#width')
    const windowHeight = document.querySelectorAll('#height')
    const windowType = document.querySelectorAll('#view_type')
    const windowProfile = document.querySelectorAll('.checkbox')

    checkNumInputs('#width')
    checkNumInputs('#height')

    function bindActionToElems(event, elem, prop) {
        elem.forEach((item, i) => {
            item.addEventListener(event, () => {
                switch (item.nodeName) {
                    case 'SPAN':
                        console.log('hello')
                        break
                    case 'INPUT':
                        if (item.getAttribute('type') === 'checkbox') {
                            console.log('checkbox')
                        }else {
                            console.log('input')
                        }
                        break
                    case 'SELECT':
                        console.log('select')
                        break
                }
                // if (elem.length > 1) {
                //     state[prop] = i
                // } else {
                //     state[prop] = item.value
                // }
                // console.log(state)
            })
        })
    }

    bindActionToElems('click', windowForm, 'form')
    bindActionToElems('input', windowHeight, 'height')
    bindActionToElems('input', windowWidth, 'width')
    bindActionToElems('change', windowType, 'type')
    bindActionToElems('change', windowProfile, 'profile')
}

export default changeModalState