import { Flex, Rate, Button } from "antd";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const reviews = [
  {
    id: 1,
    name: "Sofia Harvetz",
    comment:
      "I bought it 3 weeks ago and now come back just to say “Awesome Product”. I really enjoy it. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupt et quas molestias excepturi sint non provident.",

    image:
      "https://tainghe.com.vn/media/product/250_6444_tai_nghe_cleer_arc_iii_music_gia_tot_xuan_vu_5.jpg",

    rating: 5,
  },
  {
    id: 2,
    name: "Nicolas Jensen",

    comment:
      "I bought it 3 weeks ago and now come back just to say “Awesome Product”. I really enjoy it. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupt et quas molestias excepturi sint non provident.",
    image:
      "https://tainghe.com.vn/media/product/250_6444_tai_nghe_cleer_arc_iii_music_gia_tot_xuan_vu_5.jpg",

    rating: 4.5,
  },
];
function ProductReview({ name, review, rating }) {
  // State to manage the active tab
  const [activeTab, setActiveTab] = useState("Additional Info");

  // Function to handle tab change
  const openPage = (tabName) => {
    setActiveTab(tabName);
  };
  return (
    <div className="tablet:mt-20 tablet:mx-28 ">
      <div className="flex space-x-4 border-b-2">
        <Link
          className={`tablink p-2 font-bold ${
            activeTab === "Additional Info"
              ? "border-b-2 border-black text-black font-bold "
              : ""
          } hover:text-black`}
          onClick={() => openPage("Additional Info")}
        >
          Additional Info
        </Link>
        <Link
          className={`tablink p-2  font-bold ${
            activeTab === "Questions"
              ? "border-b-2 border-black text-black font-bold"
              : ""
          } hover:text-black`}
          onClick={() => openPage("Questions")}
        >
          Questions
        </Link>
        <Link
          className={`tablink p-2  ${
            activeTab === "Reviews"
              ? "border-b-2 border-black text-black font-bold"
              : ""
          } hover:text-black`}
          onClick={() => openPage("Reviews")}
        >
          Reviews
        </Link>
      </div>
      {/*       
      //Reviews */}
      {activeTab === "Reviews" && (
        <div className=" mt-8">
          <div>
            <h2 className="text-2xl font-bold">Customer Reviews</h2>
            <div className=" mt-4 ">
              <div className="flex items-center mb-2 ">
                <Rate value={rating} />

                <span className="text-gray-500 text-sm ml-2">
                  {review} Reviews
                </span>
              </div>
              <h2 className="text-sm font-bold mb-4 mt-3 ml-[200px]">{name}</h2>
            </div>

            <div className="flex items-center mb-2">
              <span className="text-gray-500 text-xl font-bold ">
                {review} Reviews
              </span>
            </div>
            <div>
              {" "}
              {reviews.map((item, index) => (
                <div className=" ">
                  <div key={item.id} className=" flex gap-7 border-b-2 py-5 ">
                    <div>
                      <img
                        src={item.image}
                        alt=""
                        className="w-20 h-11 rounded-full object-cover border-2 border-gray-300"
                      />
                    </div>
                    <div>
                      <div>
                        <div className="flex items-center justify-between">
                          <h3 className="font-bold text-xl">{item.name}</h3>
                        </div>
                        <Rate className="my-3" value={item.rating} />
                        <p className=" mb-3">{item.comment}</p>
                      </div>

                      <div className="  flex gap-5">
                        <button>Like</button>
                        <button>Reply</button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              <div className="text-center ">
                {" "}
                <Button
                  className="mx-10 text-xl justify-center mt-10 "
                  type="primary"
                  shape="round"
                >
                  Load more
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* //Additional Info */}

      {activeTab === "Additional Info" && <div>Additional Info</div>}

      {/* Questions */}
      {activeTab === "Questions" && <div>Questions</div>}
    </div>
  );
}
export default ProductReview;
