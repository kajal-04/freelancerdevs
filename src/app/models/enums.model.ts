export class Enum {
    // getById
    static getById<T extends typeof Enum>(this: T, id: number): string {
        return this[id as keyof T] as string;
    }

    // getByName
    static getByName<T extends typeof Enum>(this: T, name: string): number | undefined {
        return parseInt(
            Object.keys(this)
                .filter(key => typeof this[key as keyof T] === 'string')
                .find(key => this[parseInt(key, 10) as keyof T]?.toString().toLowerCase() === name.toLowerCase()) || '',
            10
        );
    }

    // getAll
    static getAll<T extends typeof Enum>(this: T): Array<{ title: string; id: number | string }> {
        return Object.keys(this)
            .filter(key => typeof this[key as keyof T] === 'string')
            .map(key => {
                const id = parseInt(key, 10);
                return {
                    title: this.getById(id),
                    id: isNaN(id) ? key : id,
                };
            });
    }
}

export class ProjectType extends Enum {
    static WebAppDevelopment = 0;
    static WebsiteDevelopment = 1;
    static ProductStrategy = 2;
    static AutomationTesting = 3;
    static Other = 4;
    static 0 = 'Web App Development';
    static 1 = 'Website Development';
    static 2 = 'Product Strategy';
    static 3 = 'QA & Automation Testing';
    static 4 = 'Other';
}

export class Discovery extends Enum {
    static GoogleSearch = 0;
    static LinkedIn = 1;
    static Referral = 2;
    static Upwork = 3;
    static Other = 4;
    static 0 = 'Google Search';
    static 1 = 'LinkedIn';
    static 2 = 'Referral';
    static 3 = 'Upwork';
    static 4 = 'Other';
}
