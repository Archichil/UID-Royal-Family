import {membersId} from "./MembersId";
import React from "react";

export const images = {};

const def_path = "/images/personal_images/";

for (const id of membersId) {
    images[id] = [
        def_path + id + "_0.jpg",
        def_path + id + "_1.jpg",
        def_path + id + "_2.jpg",
        def_path + id + "_3.jpg",
        def_path + id + "_4.jpg"
    ];
}