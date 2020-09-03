import { Component, OnInit } from "@angular/core";
import { Post } from "../../models/post";

@Component({
  selector: "app-post",
  templateUrl: "./post.component.html",
  styleUrls: ["./post.component.scss"],
})
export class PostComponent implements OnInit {
  posts: Post[] = [
    {
      title: "lynx",
      content: "7arama l3ziza nkchk nkhrilk lkhraya nta3k",
      loveIts: 0,
      created_at: new Date
    },
    {
      title: "lynx",
      content: "7arama l3ziza nkchk nkhrilk lkhraya nta3k",
      loveIts: 0,
      created_at: new Date
    },
    {
      title: "lynx",
      content: "7arama l3ziza nkchk nkhrilk lkhraya nta3k",
      loveIts: 0,
      created_at: new Date
    }
  ];
  post: Post;
  constructor() {}

  ngOnInit(): void {}

  love(item){
    this.posts[item].loveIts +=1 ;
    console.log(this.posts[item].loveIts);
  }

  notLove(item) {
    this.posts[item].loveIts -=1 ;
    console.log(this.posts[item].loveIts);
  }
}
