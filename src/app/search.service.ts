import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';

@Injectable()
export class SearchService {
  count=[];
  myUrl: string = 'https://swapi.co/api/planets/?search=';
  constructor(private http: Http) { }

  search(items: Observable<string>,user) {
    return items.debounceTime(400)
    .distinctUntilChanged()
    .switchMap(item => this.searchItems(item,user));
  }


  searchItems(item,user) {
    let start = new Date().getTime();
    this.count.push(start);
    console.log(this.count);
    let len =this.count.length;
    let timeDifference=parseInt(this.count[len-1])-parseInt(this.count[len-14]);
    if(user!=="Luke Skywalker" && (len>=15 && timeDifference<=30000)){
      let time=30000-timeDifference;
      console.log(time);
      var input = (<HTMLInputElement>document.getElementById("input"));
      console.log("time starts");
      input.disabled=true;
       console.log("disabled");
      let currentTime=new Date().getTime();
      for(let i=0;;i++){
        let currentTimeForLoop=new Date().getTime();
        if(currentTimeForLoop>currentTime+time){
          console.log(currentTime);
          console.log(currentTimeForLoop);
          break;
        }
        else{
          continue;
        }
      }
       console.log("time end");
       input.disabled=false;

      return this.getData(item);
    }
    else{
      return this.getData(item);
    }
  }

  orderBy(array){
    for (let i = 0; i < array.length; i++){
      for (let j = i + 1; j < array.length; j++){
        if (parseInt(array[i].population) > parseInt(array[j].population)){
          let temp =  array[i];
          array[i] = array[j];
          array[j] = temp;
        }
      }
    }
    return array;
  }

  getPopulation(array){
    let percentPopulation: Array<any>=[];
    let len =array.length-1;
    for(let i = 0; i < array.length; i++){
      let value = (parseInt(array[i].population)/parseInt(array[len].population))*100;
      array[i].percent=value;
    }
    return array;
  }


  getData(item){
    return this.http
    .get(this.myUrl + item)
    .map(res => res.json());
  }
}
