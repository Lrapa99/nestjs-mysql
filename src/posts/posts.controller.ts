import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { PostsService } from './posts.service';
import { ApiOkResponse } from '@nestjs/swagger';
import { Post as Posts } from './post.entity';

@Controller('posts')
export class PostsController {
  constructor(private postsService: PostsService) {}

  @Post()
  @ApiOkResponse({ status: 201, type: Posts })
  createPost(@Body() post: CreatePostDto) {
    return this.postsService.createPost(post);
  }

  @Get()
  @ApiOkResponse({ status: 200, type: Posts, isArray: true })
  getPosts() {
    return this.postsService.getPosts();
  }
}
