import { Component } from '@angular/core';
import { InfoPageService } from './services/info-page.service';
import { ProjectsService } from './services/projects.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public get projectsService(): ProjectsService {
    return this._projectsService;
  }
  public set projectsService(value: ProjectsService) {
    this._projectsService = value;
  }

  constructor( public _infoPageService: InfoPageService,
               private _projectsService: ProjectsService ) { }
}
