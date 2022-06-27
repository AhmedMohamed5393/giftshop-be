import { ProductController } from './product.controller';
import { MiddlewareConsumer, Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
@Module({
    imports: [
        JwtModule.register({ secret: 'super-secret' }),
    ],
    controllers: [ProductController],
    providers: [],
})
export class ProductModule {
    configure(consumer: MiddlewareConsumer) {}
}
