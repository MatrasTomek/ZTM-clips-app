import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-menage',
  templateUrl: './menage.component.html',
  styleUrls: ['./menage.component.css'],
})
export class MenageComponent implements OnInit {
  videoOrder: string = '1';

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params: Params) => {
      this.videoOrder = params['sort'] === '2' ? params['sort'] : 1;
    });
  }

  sort(event: Event) {
    const { value } = event.target as HTMLSelectElement;

    // this.router.navigateByUrl(`/manage?sort=${value}`);

    // inna metoda dodawania query params

    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: {
        sort: value,
      },
    });
  }
}
