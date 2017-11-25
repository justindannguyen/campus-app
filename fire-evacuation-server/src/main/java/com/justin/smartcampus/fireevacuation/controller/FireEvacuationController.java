/**
 * Copyright (C) 2017, Justin Nguyen
 */
package com.justin.smartcampus.fireevacuation.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

/**
 * @author tuan3.nguyen@gmail.com
 */
@RestController
public class FireEvacuationController {
  @GetMapping("/")
  @ResponseBody
  public String getRoot() {
    return "It works!!!";
  }
}
