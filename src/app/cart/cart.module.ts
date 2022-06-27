import { CartController } from './cart.controller';
import { MiddlewareConsumer, Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
@Module({
    imports: [
        JwtModule.register({ secret: 'super-secret' }),
    ],
    controllers: [CartController],
    providers: [],
})
export class CartModule {
    configure(consumer: MiddlewareConsumer) {}
}
