class User{
    name = '';
    lastName = '';

    constructor(name, lastName){
        this.name = name;
        this.lastName = lastName;
    }
}

class RegularUser extends User{}

class PremiumUser extends User{
    premiumAccount = '';

    constructor(name, lastName, date){
        super(name, lastName);
        this.premiumAccount = date;
    }
}

function getAccountInfo(user){
    
}

const user1 = new RegularUser('Иван', 'Иванов');
const user2 = new PremiumUser('Иван', 'Иванов', '01.01.2024');

