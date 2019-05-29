var main = document.getElementById('main_method')
main.style.fontFamily = 'roboto'
main.style.backgroundColor = '#eaeaea'
main.style.boxShadow = '1px 2px 20px rgba(75, 75, 75, 0.377)'
main.style.borderRadius = '3px'
main.style.border = '1px solid #c7c7c7'
main.style.padding = '20px'
main.style.height = '100px auto'
main.style.width = '500px'
main.style.marginTop = '2%'
main.style.marginLeft = '5%'


var array = []
var l = array.length;



var ib = 0;


var selectNoOfSort = document.createElement('div')
var Sortinputbox = document.createElement('input')
var SortInputDescription = document.createElement('span')
var SortGo = document.createElement('button')
var SortReset = document.createElement('button')
var linebreak0 = document.createElement('br')
var linebreak1 = document.createElement('br')

//elemets

SortReset.textContent = 'Reset'
SortReset.style.width = '150px'
SortReset.style.height = '50px'
SortReset.style.padding = '0px'
SortReset.style.marginBottom = '0px'
SortReset.style.marginLeft = '10px'
SortReset.style.marginTop = '30px'
SortReset.style.border = '1.5px solid rgb(177, 180, 2)'
SortReset.style.borderRadius = '5px'
SortReset.style.fontSize = '20px'
SortReset.style.backgroundColor = 'rgb(226, 230, 4)'
SortReset.style.position = 'relative'
SortReset.style.bottom = '3.5px'
SortReset.onclick = function () {

    try {
        var ibd = document.getElementById('inputboxdiv')
        var arr = document.getElementById('array')
        main.removeChild(ibd)
        main.removeChild(arr)
        SortGo.removeAttribute('disabled')
    } catch (err) {
        alert("There is no item to reset")
        SortGo.removeAttribute('disabled')
    }
   
}
//space
SortGo.textContent = 'Go'
SortGo.id = 'gobtn'
SortGo.style.width = '150px'
SortGo.style.height = '50px'
SortGo.style.padding = '0px'
SortGo.style.marginBottom = '0px'
SortGo.style.marginTop = '30px'
SortGo.style.border = '1.5px solid rgb(31, 170, 3)'
SortGo.style.borderRadius = '5px'
SortGo.style.fontSize = '20px'
SortGo.style.position = 'relative'
SortGo.style.backgroundColor = ' rgb(41, 230, 4)'
SortGo.style.bottom = '3.5px'
SortGo.onclick = function () {

    ib = 0
    var sN = document.getElementById('SortNumber').value
    ib = sN

    if (ib == 0 || ib == null) {
       alert('You have to input a number to perform this operation')
    }else{
        SortGo.disabled = 'true'
        createInputBox(ib)
    }

    
    

}
//space
SortInputDescription.textContent = 'How many numbers do you want to sort: '

//space
Sortinputbox.id = 'SortNumber'
Sortinputbox.type = 'text'
Sortinputbox.style.width = '60px'
Sortinputbox.style.height = '50px'
Sortinputbox.style.marginLeft = '10px'
Sortinputbox.style.marginRight = '10px'
Sortinputbox.style.fontSize = '28px'
Sortinputbox.style.padding = '0px 10px'
Sortinputbox.style.border = '1px solid #a0a0a0'
Sortinputbox.style.borderRadius = '3px'
Sortinputbox.style.boxSizing = 'border-box'
Sortinputbox.maxLength = '3'

selectNoOfSort.appendChild(SortInputDescription)
selectNoOfSort.appendChild(Sortinputbox)
selectNoOfSort.appendChild(linebreak0)
selectNoOfSort.appendChild(SortGo)
selectNoOfSort.appendChild(SortReset)

main.appendChild(selectNoOfSort)



function getAllInputs() {

    var someArray = []
    for (let i = 0; i < ib; i++) {
        var inputids = 'input' + i
        someArray[i] = document.getElementById(inputids).value
    }

    return someArray
}

function createInputBox(input_number) {
    var inputdiv = document.createElement('div')
    inputdiv.style.marginTop = '20px'
    inputdiv.style.padding = '0px'
    inputdiv.id = 'inputboxdiv'


    for (let i = 0; i < input_number; i++) {

        var inputbox = document.createElement('input')
        inputbox.id = 'input' + i
        inputbox.placeholder = 'No.' + (i + 1)
        inputbox.type = 'text'
        inputbox.style.width = '70px'
        inputbox.style.height = '50px'
        inputbox.style.marginLeft = '10px'
        inputbox.style.marginRight = '10px'
        inputbox.style.fontSize = '22px'
        inputbox.style.paddingLeft = '10px'
        inputbox.style.paddingRight = '10px'
        inputbox.style.border = '1px solid #a0a0a0'
        inputbox.style.borderRadius = '3px'
        inputbox.style.boxSizing = 'border-box'
        inputbox.maxLength = '3'
        inputdiv.appendChild(inputbox)

    }

    var btn = document.createElement('button')
    btn.textContent = 'SORT'
    btn.style.width = '80px'
    btn.style.height = '50px'
    btn.style.padding = '0px'
    btn.style.marginBottom = '0px'
    btn.style.border = '1px solid #a0a0a0'
    btn.style.borderRadius = '5px'
    btn.style.fontSize = '24px'
    btn.style.fontWeight = 'bold'
    btn.style.position = 'relative'
    btn.style.bottom = '2px'
    btn.onclick = function () {


        array = getAllInputs()
        var flag = false; 

        for (let arrayitem = 0; arrayitem < array.length; arrayitem++) {
            var tempItem = array[arrayitem]
            

            if (tempItem.length == 0) {
               flag = false;
               break;
            }else{
                flag =true;
            }
            
        }

        if (flag == true) {
            sortedBoxes()
        }else{
            alert('Some boxes dont have numbers. Please Fill them')
        }
        
        
    }
    inputdiv.appendChild(btn)
    main.appendChild(inputdiv) //append div here

}


function insertSort() {
    for (let i = 1; i < array.length; i++) {
        for (let j = i; j > 0; j--) {
            if (array[j] < array[j - 1]) {

                [array[j], array[j - 1]] = [array[j - 1], array[j]]

            }
        }
    }
}


function sortedBoxes() {
    insertSort();


    var divbox = document.createElement('div')
    divbox.textContent = 'Array'
    divbox.style.backgroundColor = 'rgb(225,225,225)'
    divbox.style.padding = '20px'
    divbox.id = 'array'




    for (let i = 0; i < array.length; i++) {

        var arrayitems = document.createElement('span')
        arrayitems.style.backgroundColor = '#2944fb'
        arrayitems.style.padding = '10px'
        arrayitems.style.margin = '5px'
        arrayitems.style.color = '#ffffff'
        arrayitems.style.borderRadius = '20%'
        arrayitems.textContent = array[i]
        main.appendChild(divbox)
        divbox.appendChild(arrayitems)

    }

}

