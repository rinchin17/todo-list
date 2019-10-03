import { Injectable } from '@angular/core';

@Injectable()
export class DataService{
    job = ["hello"]

    getJob(){
        return this.job;
    }
    addJob(emp){
        this.job.push(emp); //pushing object in list or appending to list
    }
}