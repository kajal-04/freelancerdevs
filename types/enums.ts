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
        static WEBDEVELOPMENT = 1;
        static FRONTEND = 2;
        static BACKEND = 3;
        static DESIGN = 4;
        static PRODUCT = 5;
        static TESTING = 6;
        static OTHERS = 100;
        static 1 = 'End to End Web Development';
        static 2 = 'Frontend';
        static 3 = 'Backend';
        static 4 = 'UI/UX Design';
        static 5 = 'Product strategy';
        static 6 = 'QA and automation testing';
        static 100 = 'Others'
}

export class Discovery extends Enum {
    static GOOGLESEARCH = 1;
    static LINKEDIN = 2;
    static REFERRAL = 3;
    static UPWORK = 4;
    static FIVERR: 5;
    static FACEBOOK: 6;
    static INSTAGRAM: 7;
    static OTHER = 100;
    static 1 = 'Google Search';
    static 2 = 'LinkedIn';
    static 3 = 'Referral';
    static 4 = 'Upwork';
    static 5 = 'Fiverr';
    static 6 = 'Facebook';
    static 7 = 'Instagram';
    static 100 = 'Other';
}