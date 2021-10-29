import throttle from 'lodash.throttle';

const filterForm = document.querySelector(`form.feedback-form`)
let writedInfo = {}
   
initForm()

filterForm.addEventListener(`submit`, onSubmitForm)
filterForm.addEventListener(`input`, throttle(onSaveLocalStorageInfoFunc, 500))

function onSubmitForm(event) {
   event.preventDefault();
    writedInfo[event.target.name] = event.target.value;
    console.log(writedInfo)
    removeInfo() 
}

function removeInfo() {
    filterForm.reset()
    localStorage.removeItem(`feedback-form-state`)
}

function onSaveLocalStorageInfoFunc(evt) {
   writedInfo[evt.target.name] = evt.target.value;
    localStorage.setItem(`feedback-form-state`, JSON.stringify(writedInfo)) 
}

function initForm() {
    let savedInfo = localStorage.getItem(`feedback-form-state`)
    if (savedInfo) {
        savedInfo = JSON.parse(savedInfo);
        Object.entries(savedInfo).forEach(([name, value]) => {
        writedInfo[name] = value
        filterForm.elements[name].value = value  
        })
    }

}