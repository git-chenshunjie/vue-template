const req = require.context('./svg', false, /\.svg$/) 
req.keys().map(req);

import Vue from "vue"
import SvgIcon from "@/components/SvgIcon"

Vue.component("SvgIcon",SvgIcon)