/**
 * Copyright (C) 2017, Justin Nguyen
 */
package com.justin.smartcampus.fireevacuation.controller;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.List;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.justin.smartcampus.fireevacuation.dto.EvacuationDto;
import com.justin.smartcampus.fireevacuation.service.EvacuationService;

/**
 * @author tuan3.nguyen@gmail.com
 */
@RestController
@RequestMapping("evacuations")
public class FireEvacuationController {
  private final Logger logger = Logger.getLogger(FireEvacuationController.class);

  @Autowired
  private EvacuationService evacuationService;

  @GetMapping()
  public ResponseEntity<List<EvacuationDto>> getRoot() {
    return ResponseEntity.ok(evacuationService.getAll());
  }

  @PostMapping()
  public ResponseEntity<List<EvacuationDto>> uploadEvacuation(
      @RequestParam("file") final MultipartFile file) throws IOException {
    try (final BufferedReader lineReader = new BufferedReader(
        new BufferedReader(new InputStreamReader(file.getInputStream(), "UTF-8")))) {
      return ResponseEntity.ok(evacuationService.saveFromStrings(lineReader.lines()));
    }
  }

  @ExceptionHandler
  private ResponseEntity<?> handleException(final Exception exception) {
    logger.error(exception);
    return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
  }
}
