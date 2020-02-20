export class Computer {
    id: number;
    modele: string;
    marque: string;
    type: string;
    category: string;
    prixAchat: number;
    prixVente: number;
    dateEntreeStock: Date;

    constructor(Pid = null, Pmodele = null, Pmarque = null, Ptype = null, Pcategory = null,
                PprixAchat = null, PprixVente = null, PdateEntreeStock = null) {
        this.id = Pid;
        this.modele = Pmodele;
        this.marque = Pmarque;
        this.type = Ptype;
        this.category = Pcategory;
        this.prixAchat = PprixAchat;
        this.prixVente = PprixVente;
        this.dateEntreeStock = PdateEntreeStock;
    }
}
