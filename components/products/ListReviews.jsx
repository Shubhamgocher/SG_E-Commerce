import React from "react";
import { Heading } from "..";
import { DaysConvertor } from "@/utils/daysConvertor";
import { Rating } from "@mui/material";

const ListReviews = ({ reviews }) => {
  return (
    <div>
      <Heading heading="Product Review"/>
      {reviews.map((review) => (
        <div key={review.id} className="flex flex-col justify-center">
          <div className="flex items-center gap-2">
            <div>Avatar</div>
            <span className="font-semibold">{review.user.name}</span>
            <span>{DaysConvertor(review.createdDate)}</span>
          </div>
          <Rating value={review.rating}/>
          <div>
            {review.comment}
          </div>
          <hr className="mb-4 mt-4"/>
        </div>
      ))}
    </div>
  );
};

export default ListReviews;
