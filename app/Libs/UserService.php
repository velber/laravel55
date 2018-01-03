<?php

namespace App\Libs;


use App\Repositories\UserRepository;

class UserService
{
    protected $users;

    public function __construct(UserRepository $users)
    {
        $this->users = $users;
    }

    public function all()
    {
        return $this->users->all();
    }

}