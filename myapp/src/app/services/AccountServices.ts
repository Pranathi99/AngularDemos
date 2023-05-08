export class AccountService{
    accounts=[];

    addAccount(name:string,status:string)
    {
        this.accounts.push({
            name:name,
            status:status
        });
        console.log(this.accounts);
    }

    updateStatus(id:number,newStatus:string)
    {
        this.accounts[id].status=newStatus;
    }

    deleteAcount(id:number)
    {
        this.accounts.splice(id,1);
    }
}