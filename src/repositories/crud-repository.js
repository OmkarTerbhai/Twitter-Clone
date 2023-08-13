import logger from "../config/logger-config.js";

class CrudRepository {
    constructor(model) {
        this.model = model;
    }

    async create(data) {
        console.log("Here in repo due to user ", data);
        const response = await this.model.create(data);
        logger.info("In user Repo " + response);
        return response;
    }

    async destroy(data) {
            const response = await this.model.destroy({
                where: {
                    id: data
                }
            });
            console.log(response);
            return response;
        
    }

    async get(data) {
            const response = await this.model.findById(data);
            //if(response == null) {
                console.log(response);
            //}
            return response;
        
        
    }

    async getAll() {
        const response = await this.model.find();
        return response;
        
        
    }

    async update(id, data) {
            console.log("In CRUD REPO update");
            const response = await this.model.update(data, {
                where: {
                    id: id
                }
            });
            console.log(response);
            return response;
    }
}

export default CrudRepository;