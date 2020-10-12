<?php
/*
 * @Author: your name
 * @Date: 2020-10-12 23:54:55
 * @LastEditTime: 2020-10-13 02:56:44
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
class LoginController extends Controller
{

    use AuthenticatesUsers;

    protected $redirectTo = RouteServiceProvider::HOME;
    

    public function showLoginForm(){

        $data = [
            'auth' => Auth::user(),
            'test' => 1,
        ];
        return Inertia::render('Auth/Login',$data);
    }
 
}
