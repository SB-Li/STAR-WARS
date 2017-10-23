import { Component} from '@angular/core';
import { SearchService } from '../search.service';
import { LoginService } from '../login.service';
import { Subject } from 'rxjs/Subject';
import { Router, ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css'],
  providers: [SearchService, LoginService]
})
export class SearchPageComponent {

  results: Object;
  searchTerm$ = new Subject<string>();
  searchTime;


  constructor(private searchService: SearchService,
    private loginService: LoginService,
    private activatedRoute: ActivatedRoute,
    private router: Router ) {
      this.searchTime = 0;
      setTimeout(function(){
        this.searchTime = 0;
        console.log('search time reset to 0');
       }, 60000);
      let params: any = this.activatedRoute.snapshot.params;
      this.searchService.search(this.searchTerm$,params.user)
      .subscribe(data => {
      this.results = this.searchService.getPopulation(this.searchService.orderBy(data.results));
    });
  }

  addSearchTime() {
    this.searchTime ++;
    console.log('search time added to ' + this.searchTime);
    if(this.loginService.searchername != "Luke Skywalker" && this.searchTime > 15) this.router.navigate(['/login']);
    //To make sure Only the user Luke Skywalker should be able to make more than 15 searchesin a minute.
  }
 }
