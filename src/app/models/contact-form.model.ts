export class ContactFormModel {
    public id: number;
    public name: string;
    public email: string;
    public phone: string;
    public phoneCountryCode: string;
    public companyName: string;
    public projectType: number;
    public description: string;
    public discoveryType:boolean;
    public discoveryDescription:boolean;

    constructor(args: any) {
        this.id = args.id;
        this.name = args.name;
        this.email = args.email;
        this.phone = args.phone;
        this.phoneCountryCode = args.phoneCountryCode;
        this.companyName = args.companyName;
        this.projectType = args.projectType;
        this.description = args.description;
        this.discoveryType = args.discoveryType;
        this.discoveryDescription = args.discoveryDescription;
    }
}
