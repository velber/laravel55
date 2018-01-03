<?php

namespace App\Http\Controllers;

use App\Exceptions\TestException;
use App\Jobs\SendReminderEmail;
use App\Libs\UserService;
use App\Repositories\UserRepository;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Queue\Jobs\Job;
use Illuminate\Support\Facades\Log;
use Redis;

class HomeController extends Controller
{
    protected $users;

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct(UserRepository $users)
    {
        $this->middleware('auth');
        $this->users = $users;
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        /**
         * DI
         */
//        $a = app()->make(UserService::class);
//        $a = resolve(UserService::class);
//        dd($a->all());

        /**
         * Redis
         */
//        Redis::set('name', 'Taylor');
//        $user = Redis::get('name');
//        dd($user);
//        SendReminderEmail::dispatch();
//        Log::error('sss', ['id' => 23, 'name' => 14]);
//        Log::alert('sss', ['id' => 23, 'name' => 14]);
//        $bugsnag->notifyError('ErrorType', 'Test Error');

//        try {
//            throw new TestException('Some Exception!');
//        } catch (TestException $e) {
//            report($e);
//        }

        return view('home');
    }
}
