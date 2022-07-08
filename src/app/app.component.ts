import { Component } from '@angular/core';
import { SuploadfilesService } from './services/suploadfiles.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'first';
  shortlink = '';
  loading = false;
  file = null;

  constructor(private Sservice:SuploadfilesService) { }

  onChangeEvent(event: any) {
    console.log(event);
    console.log(event.target);
    this.loading = !this.loading;
    this.file = event.target.files[0];
    this.Sservice.upload(this.file).subscribe((res:any)=>{
    console.log(res);
    if(typeof(res)==='object'){this.shortlink=res.link;this.loading=false;}
    })
  }
  onupload() {
    console.log(this.file)
  }
}
