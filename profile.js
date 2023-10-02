const $$ = document.querySelector.bind(document)
const $$$ = document.querySelectorAll.bind(document)

const tabs = $$$('.profile-tab-item')
const panes = $$$('.profile-content-item')

const tabActive = $$('.profile-tab-item.active')
const line = $$('.profile-tabs .line')

line.style.left = tabActive.offsetLeft+'px'
line.style.width = tabActive.offsetWidth+'px'

tabs.forEach((tab, i)=>{
    tab.onclick = function(){
        $$('.profile-tab-item.active').classList.remove('active')
        $$('.profile-content-item.active').classList.remove('active')
        tab.classList.add('active')
        panes[i].classList.add('active')
        
        line.style.left = this.offsetLeft+'px'
        line.style.width = this.offsetWidth+'px'
    }
})

// account information
const txtName = $$('.form-group #name')
const txtEmail = $$('.form-group #email')
const changeInfoBtn = $$('.form-information .change-info-btn')
const changeBtnBox = $$('.form-information .change-info-btn-box')
const cancelBtn = $$('.change-info-btn-box .cancel-btn')

changeInfoBtn.addEventListener('click', ()=>{
    txtName.removeAttribute('disabled')
    txtEmail.removeAttribute('disabled')
    txtName.focus()
    changeInfoBtn.style.display = 'none'
    changeBtnBox.style.display = 'flex'
})

cancelBtn.addEventListener('click', ()=>{
    txtName.setAttribute('disabled', '')
    txtEmail.setAttribute('disabled', '')
    changeInfoBtn.style.display = 'block'
    changeBtnBox.style.display = 'none'
})

// change password form
const changePwdForm = $$('.change-pwd-form')
const cancelChangePwd = $$('.change-pwd-form .change-pwd-cancel-btn')
const confirmPwdBtn = $$('.change-pwd-form .confirm-change-pwd-btn')
const changePwdBtn = $$('.card-body .change-pwd-btn')

changePwdBtn.addEventListener('click', ()=>{
    changePwdForm.style.top = '-7rem'
})

cancelChangePwd.addEventListener('click', ()=>{
    changePwdForm.style.top = '-54rem'
})

confirmPwdBtn.addEventListener('click', ()=>{
    changePwdForm.style.top = '-54rem'
})