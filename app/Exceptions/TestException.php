<?php

namespace App\Exceptions;

use App\Mail\ErrorNotificationMail;
use Bugsnag;
use Exception;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Mail;

class TestException extends Exception
{
    public function report()
    {
//        Bugsnag::notifyException($this);
//        Bugsnag::notifyError('ErrorType', 'Test Error');
//        Log::error('Test Exception!');
//        Mail::send(new ErrorNotificationMail($this->getMessage()));
    }

    public function render($request)
    {
        return back()->withErrors('sdfd');
    }
}
