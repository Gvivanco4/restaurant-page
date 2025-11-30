export default function createButton (text, listElementNumber) {

    const buttonX = document.createElement('button');
    buttonX.textContent = text;
    listElementNumber.append(buttonX);
    
}