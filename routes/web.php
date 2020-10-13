<?php
/*
 * @Author: your name
 * @Date: 2020-10-07 00:11:27
 * @LastEditTime: 2020-10-13 23:39:42
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Editout
 * @FilePath: /taobao/routes/web.php
 */

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\TestController;
use App\Http\Controllers\Auth\LoginController;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('login',[LoginController::class,'showLoginForm'])
    ->name('login')
    ->middleware('guest');
Route::middleware(['auth:sanctum', 'verified'])->get('/dashboard', function () {
    return Inertia\Inertia::render('Dashboard');
})->name('dashboard');




Route::get('/test', [TestController::class, 'index']);