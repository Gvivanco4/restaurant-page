export default function textContentCreator (image, fatherDiv, textH1, textP) {

    fatherDiv.append(image);
    const sectionDiv = document.createElement('div');
    fatherDiv.append(sectionDiv);

    // Content

    const secH1 = document.createElement('h1');
    const secP = document.createElement('p');

    secH1.textContent = textH1;
    secP.textContent = textP;

    sectionDiv.append(secH1, secP);

    
}