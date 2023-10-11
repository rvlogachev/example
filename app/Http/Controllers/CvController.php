<?php

namespace App\Http\Controllers;

use App\Http\Resources\Cv\CvResource;
use App\Models\Cv;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Mockery\Exception;

class CvController extends Controller
{
    public function index() {
//        return \inertia('Cv/Index');

        $cvs = Cv::all();

        return Inertia::render('Cv/Index',[
            'cvs' => $cvs
        ]);
    }

    public function show(Cv $cv) {

        $cv = CvResource::make($cv)->resolve();

        return Inertia::render('Cv/Show', compact('cv'));
    }



    public function store(\App\Http\Requests\StoreRequest $request)
    {
        $data = $request->validated();

        $cv = Cv::where('id', $data['id'])->first();
        if ($cv) {

            $cv->title = $data['title'];
            $cv->name = $data['name'];
            $cv->description = $data['description'];
            $cv->phone = $data['phone'];
            $cv->address = $data['address'];


            $cv->save();
        }

    }

    public function create() {

        try {
            DB::beginTransaction();

            $cv = new Cv();
            $cv->user_id = auth()->id();
            $cv->title = 'My resume 1';
            $cv->template_id = 1;
            $cv->save();


            DB::commit();
        } catch (Exception $exception) {
            DB::rollBack();
        }

        return Redirect::route('cvs.show',$cv);;
//        return redirect()->back()->with('message', 'Todo Deleted Successfully.');
    }

    public function download(\App\Http\Requests\StoreRequest $request)
    {
        $data = $request->validated();
        return Inertia::render('Resume');

    }

}
