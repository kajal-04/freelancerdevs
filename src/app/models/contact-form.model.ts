export class ContactForm {
    public id: number;
    public employeeAssetAssignmentId: string;
    public assetId: number;
    public assetName: string;
    public assignedTo: number;
    public assignedToDisplayName: string;
    public profileImageUrl: string;
    public assetCondition: string;
    public assignedOn: Date;
    public isAcknowledged:boolean;

    constructor(args: any) {
        this.id = args.id;
        this.employeeAssetAssignmentId = args.employeeAssetAssignmentId;
        this.assetId = args.assetId;
        this.assetName = args.assetName;
        this.assignedTo = args.assignedTo;
        this.assignedToDisplayName = args.assignedToDisplayName;
        this.profileImageUrl = args.profileImageUrl != null ? args.profileImageUrl : '';
        this.assetCondition = args.assetCondition;
        this.assignedOn = args.assignedOn;
        this.isAcknowledged = args.isAcknowledged;
    }
}
