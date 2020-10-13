<?php
/*
 * @Author: your name
 * @Date: 2020-10-12 23:54:55
 * @LastEditTime: 2020-10-14 00:16:45
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Ed
 * @FilePath: /taobao/app/Http/Controllers/LoginController.php
 */

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Providers\RouteServiceProvider;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Inertia\Inertia;
use Auth;
use App\Models\User;
class LoginController extends Controller
{

    use AuthenticatesUsers;

    protected $redirectTo = RouteServiceProvider::HOME;
    

    public function showLoginForm(){
        $user =  User::find(1);  
        return Inertia::render('Auth/Login',[
            'user' => $user['name'],
            
        ]);     
    }
    
 
}
