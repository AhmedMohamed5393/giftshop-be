import { StoreController } from './store.controller';
import { MiddlewareConsumer, Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
@Module({
    imports: [
        JwtModule.register({ secret: 'super-secret' }),
    ],
    controllers: [StoreController],
    providers: [],
})
export class StoreModule {
    configure(consumer: MiddlewareConsumer) {}
}
