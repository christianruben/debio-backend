import { Controller, Get, Query } from '@nestjs/common';
import { RatingService } from 'src/modules/rating/rating.service';

@Controller('rating')
export class RatingController {
  constructor(private readonly ratingService: RatingService) {}

  @Get()
  async getRating() {
    console.log('get rating');
  }
}