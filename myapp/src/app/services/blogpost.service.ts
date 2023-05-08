import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PostData } from '../blogposts/postdata.model';
import { NgForm } from '@angular/forms';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BlogpostService {

  constructor(private httpClient:HttpClient) { }

  private backendAppUrl:string='https://myapp-httpapiproject-default-rtdb.asia-southeast1.firebasedatabase.app/';
  private url:string='https://myapp-httpapiproject-default-rtdb.asia-southeast1.firebasedatabase.app/posts.json';
  private deleteUrl:string=this.backendAppUrl+'posts/';

  fetchPosts(){
    return this.httpClient
    .get(this.url)
    .pipe(
      map((responseData)=>{
        // console.log(responseData);
        const postsArray=[];
        for(const key in responseData){
          //console.log({...responseData[key],id:key});
          postsArray.push({...responseData[key],id:key});
        }
        return postsArray;
      })
    );
  }

  createPost(title:string,content:string)
  {
    const myPostData:PostData={title:title,content:content};
    return this.httpClient.post(this.url,myPostData)
  }

  deletePosts(){
    return this.httpClient
    .delete(this.url);
  }

  deletePost(postid:string){
    return this.httpClient
    .delete(this.deleteUrl+postid+".json");
  }

}
