class account {
    constructor(balance) {
        this.balance = balance
    }

    deposit(amount) {
        this.balance += amount
    }

    withdraw(amount) {
        if (this.balance - amount < 0) {
            alert(`Insufficient Balance.`)
            return  
        } 
            this.balance -= amount
    }
}

const aadil = new account(0);

const amount = document.getElementById(`amount`)
const deposit = document.getElementById(`deposit`)
const withdraw = document.getElementById(`withdraw`)
const crbalance = document.getElementById(`crbalance`)

deposit.onclick = () => {
    if(amount.value <= 0){
        alert(`Please enter valid amount.`)
        return
    }
    aadil.deposit(Number(`${amount.value}`))
    crbalance.innerText = aadil.balance.toFixed(2)
}
withdraw.onclick = () => {
    if(amount.value <= 0){
        alert(`Please enter valid amount.`)
        return
    }
    aadil.withdraw(Number(`${amount.value}`))
    crbalance.innerText = aadil.balance.toFixed(2)
}
