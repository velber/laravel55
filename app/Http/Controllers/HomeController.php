<?php

namespace App\Http\Controllers;

use App\Exceptions\TestException;
use App\Jobs\SendReminderEmail;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Queue\Jobs\Job;
use Illuminate\Support\Facades\Log;
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
//        Redis::set('name', 'Taylor');
        $user = Redis::get('name');
//        dd($user);
//        Log::error('sss', ['id' => 23, 'name' => 14]);
//        Log::alert('sss', ['id' => 23, 'name' => 14]);
//        $bugsnag->notifyError('ErrorType', 'Test Error');

//        SendReminderEmail::dispatch();
        try {
            throw new TestException('Some Exception!');
        } catch (TestException $e) {
            report($e);
        }

        return view('home');
    }
}
