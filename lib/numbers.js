// export quand on fait des imports
export default class Numbers {

    intToDigit(number){
        switch (number){
            case 1:
                return this.one();
            case 2:
                return this.two();
            case 3:
                return this.three();
            case 4:
                return this.four();
            case 5:
                return this.five();
            case 6:
                return this.six();
            case 7:
                return this.seven();
            case 8:
                return this.eight();
            case 9:
                return this.nine();
            default:
                return this.zero();
        }

    }

    zero() {
        return {
            "haut" : "red",
            "hautDroite" : "red",
            "hautGauche" : "red",
            "milieu" : "transparent",
            "basDroite" : "red",
            "basGauche" : "red",
            "bas" : "red",
        }
    }

    one() {
        return {
            "haut" : "transparent",
            "hautDroite" : "red",
            "hautGauche" : "transparent",
            "milieu" : "transparent",
            "basDroite" : "red",
            "basGauche" : "transparent",
            "bas" : "transparent",
        }
    }

    two() {
        return {
            "haut" : "red",
            "hautDroite" : "red",
            "hautGauche" : "transparent",
            "milieu" : "red",
            "basDroite" : "transparent",
            "basGauche" : "red",
            "bas" : "red",
        }
    }

    three() {
        return {
            "haut" : "red",
            "hautDroite" : "red",
            "hautGauche" : "transparent",
            "milieu" : "red",
            "basDroite" : "red",
            "basGauche" : "transparent",
            "bas" : "red",
        }
    }

    four() {
        return {
            "haut" : "transparent",
            "hautDroite" : "red",
            "hautGauche" : "red",
            "milieu" : "red",
            "basDroite" : "red",
            "basGauche" : "transparent",
            "bas" : "transparent",
        }
    }

    five() {
        return {
            "haut" : "red",
            "hautDroite" : "transparent",
            "hautGauche" : "red",
            "milieu" : "red",
            "basDroite" : "red",
            "basGauche" : "transparent",
            "bas" : "red",
        }
    }

    six() {
        return {
            "haut" : "red",
            "hautDroite" : "transparent",
            "hautGauche" : "red",
            "milieu" : "red",
            "basDroite" : "red",
            "basGauche" : "red",
            "bas" : "red",
        }
    }

    seven() {
        return {
            "haut" : "red",
            "hautDroite" : "red",
            "hautGauche" : "transparent",
            "milieu" : "transparent",
            "basDroite" : "red",
            "basGauche" : "transparent",
            "bas" : "transparent",
        }
    }

    eight() {
        return {
            "haut" : "red",
            "hautDroite" : "red",
            "hautGauche" : "red",
            "milieu" : "red",
            "basDroite" : "red",
            "basGauche" : "red",
            "bas" : "red",
        }
    }

    nine() {
        return {
            "haut" : "red",
            "hautDroite" : "red",
            "hautGauche" : "red",
            "milieu" : "red",
            "basDroite" : "red",
            "basGauche" : "transparent",
            "bas" : "red",
        }
    }
}
