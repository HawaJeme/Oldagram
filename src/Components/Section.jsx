import React from "react";

export default function Section(prop){
    return(
            <section class="post-container">

                <div class="user-info">
                    <img class="avatar"
                    src={prop.avatar} />
                    <div>
                        <h5 class="user-full-name">{prop.name}</h5>
                        <h6 class="user-location font-weigth-400">{prop.location}</h6>
                    </div>
                </div>

                <img class="post"
                src={prop.post} />

                <div class="content-body">
                    <div class="icons">
                        <img src="images/icon-heart.png" alt="icon-heart"/>
                        <img src="images/icon-comment.png" alt="icon-comment"/>
                        <img src="images/icon-dm.png" alt="icon-dm"/>
                    </div>
                    <h5 class="Likes font-weigth-700">{prop.likes} likes</h5>
                    <h5 class="username-caption">
                    {prop.username}<span class="font-weight-400"> {prop.comment}</span>
                    </h5>
                </div>
            </section>
    )
}