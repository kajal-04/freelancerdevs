export class ContactFormModel {
    public id: number;
    public name: string;
    public email: string;
    public phone: number;
    public companyName: string;
    public projectType: number;
    public description: string;
    public discoveryType:boolean;
    public discoveryTypeDescription:boolean;

    constructor(args: any) {
        this.id = args.id;
        this.name = args.name;
        this.email = args.email;
        this.phone = args.phone;
        this.companyName = args.companyName;
        this.projectType = args.projectType;
        this.description = args.description;
        this.discoveryType = args.discoveryType;
        this.discoveryTypeDescription = args.discoveryTypeDescription;
    }
}
