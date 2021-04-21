import { Request, Response } from 'express';
import { AppService } from './app.service';
import { CreateCatDto } from './cats/dto/create-cat.dto';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getHello(request: Request, res: Response): string;
}
export declare class CatsController {
    private readonly appService;
    constructor(appService: AppService);
    getHello(id: any, params: any): object;
}
export declare class HostController {
    index(): string;
}
export declare class CatCreateController {
    create(dto: CreateCatDto): Promise<void>;
}
