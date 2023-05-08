import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { map } from 'rxjs/internal/operators/map';
import { PostData } from './postdata.model';
import { BlogpostService } from '../services/blogpost.service';

@Component({
  selector: 'app-blogposts',
  templateUrl: './blogposts.component.html',
  styleUrls: ['./blogposts.component.css']
})
export class BlogpostsComponent implements OnInit {

  posts:PostData[]=[];
  isFetching=false;
  errorMsg=null;

  constructor(private blogpostservice:BlogpostService) { }

  ngOnInit(): void {
    this.fetchPosts();
  }

  onCreatePost(postdata:PostData,form:NgForm)
  {
    this.blogpostservice.createPost(postdata.title,postdata.content)
    .subscribe((responseData)=>{
      //console.log(responseData);
      this.fetchPosts(); 
      form.reset();
    });
  }

  onFetchPosts()
  {
    this.fetchPosts();
  }

  fetchPosts(){
    this.isFetching=true;
    this.blogpostservice.fetchPosts()
    .subscribe((posts)=>{
      this.posts=posts;
      this.isFetching=false;
    },
    (error)=>{
      this.errorMsg=error.error.error;
    });
  }

  onDeletePosts(){
    this.blogpostservice.deletePosts()
    .subscribe(()=>{
      console.log("posts deleted");
      this.fetchPosts();
    });
  }

  onSinglePostDeleted(deletePost:PostData)
  {
    console.log("From parent: single post deleted - "+deletePost);
    this.fetchPosts();
  }

}
