import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PostData } from '../postdata.model';
import { HttpClient } from '@angular/common/http';
import { BlogpostService } from 'src/app/services/blogpost.service';

@Component({
  selector: 'app-blogpost',
  templateUrl: './blogpost.component.html',
  styleUrls: ['./blogpost.component.css']
})
export class BlogpostComponent implements OnInit {

  constructor(private blogpostservice:BlogpostService,private httpClient:HttpClient) { }

  ngOnInit(): void {
  }

  @Input()
  post:PostData;

  @Output()
  postDeleted=new EventEmitter<PostData>();

  onPostDelete()
  {
    this.blogpostservice.deletePost(this.post.id)
    .subscribe(()=>{
      console.log("post deleted! " + this.post.id);
      this.postDeleted.emit(this.post);
    })
  }

}
