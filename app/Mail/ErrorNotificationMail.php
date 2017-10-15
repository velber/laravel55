<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Queue\ShouldQueue;

class ErrorNotificationMail extends Mailable
{
    public $error;

    /**
     * Create a new message instance.
     *
     * @param $error
     */
    public function __construct($error)
    {
        $this->error = $error;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->to('test@test.com')
            ->subject('Errors')
            ->from('test1@test.com')
            ->markdown('emails.errors-notification');
    }
}
