import { CatsService } from './cats.service';
import { CreateCatDto } from './dto/create-cat.dto';
import { Cat } from './interfaces/cats.interface';
export declare class CatsController {
    private readonly catsService;
    constructor(catsService: CatsService);
    getHello(id: any, params: any): Promise<string>;
    create(createCatDto: CreateCatDto): Promise<import("./schemas/cat.schema").Cat>;
    findAll(): Promise<Cat[]>;
}
