<?php
/*
 * @Author: your name
 * @Date: 2020-10-10 18:13:56
 * @LastEditTime: 2020-10-11 14:42:11
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /taobao/app/Http/Controllers/TestController.php
 */

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class TestController extends Controller
{
    public function index(){
        $data = [
            'a' => 'ada',
            'b' => 'bbc'
        ];
        return Inertia::render('Testd/Testd',$data);
    }
}
