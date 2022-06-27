import { OrderController } from './order.controller';
import { MiddlewareConsumer, Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
@Module({
    imports: [
        JwtModule.register({ secret: 'super-secret' }),
    ],
    controllers: [OrderController],
    providers: [],
})
export class OrderModule {
    configure(consumer: MiddlewareConsumer) {}
}
