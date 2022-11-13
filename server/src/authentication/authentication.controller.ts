import { Body, Req, Controller, HttpCode, Post, UseGuards } from '@nestjs/common';

import { AuthenticationService } from './authentication.service';
import { RegisterUserDto, LoginUserDto } from '../users/user.dto'; 
// import RequestWithUser from './requestWithUser.interface';
import { LocalAuthenticationGuard } from './localAuthentication.guard';

@Controller('authentication')
export class AuthenticationController {
    constructor(
        private readonly authenticationService: AuthenticationService
    ) {}
 
    @Post('register')
    async register(@Body() registrationData: RegisterUserDto) {
        return this.authenticationService.registerUser(registrationData);
    }
 
    @HttpCode(200)
    @UseGuards(LocalAuthenticationGuard)
    @Post('login')
    async logIn(@Req() request, @Body() loginData: LoginUserDto) {
        return request.session;
    }
}