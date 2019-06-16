package com.plopezm.proxy.api;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/")
public class WebController {

    @RequestMapping("/")
    public String index() {
        return "index.html";
    }

}
