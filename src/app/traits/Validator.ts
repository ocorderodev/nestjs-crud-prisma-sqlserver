import { Responses } from '../traits/Response';

export class Validator {

    private responses;

    constructor() {
        this.responses = new Responses();
    }

    fields(object: any) {
        try {
            const validate = [];
            const fields = [];
            for (const property in object) {
                if (
                    object[property] == undefined || object[property] == "" || object[property] == null || object[property] == 'undefined'
                ) {
                    fields.push({
                        field: `${property}`,
                        message: `Is requried`
                    });
                    validate.push(true);
                } else {
                    validate.push(false);
                }
            }

            if (validate.filter(e => e == true).length > 0) {
                return {
                    status: false,
                    fields
                }
            }

            return { status: true };
        } catch (error) {
            throw error;
        }
    }

}