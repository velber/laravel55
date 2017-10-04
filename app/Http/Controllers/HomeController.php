<?php

namespace App\Http\Controllers;

use App\Jobs\SendReminderEmail;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Queue\Jobs\Job;
use Redis;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        Redis::set('name', 'Taylor');
        $user = Redis::get('name');
//        dd($user);

        SendReminderEmail::dispatch();
        return view('home');
    }
}
