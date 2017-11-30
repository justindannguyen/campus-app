/**
 * Copyright (C) 2017, Justin Nguyen
 */
package com.justin.smartcampus.fireevacuation.controller;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.multipart;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import java.util.Arrays;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.ArgumentMatchers;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;

import com.justin.smartcampus.fireevacuation.dto.EvacuationDto;
import com.justin.smartcampus.fireevacuation.dto.EvacuationSummaryDto;
import com.justin.smartcampus.fireevacuation.service.EvacuationService;

/**
 * @author tuan3.nguyen@gmail.com
 */
@RunWith(SpringRunner.class)
@WebMvcTest(FireEvacuationController.class)
public class FireEvacuationControllerTest {
  @Autowired
  private MockMvc mockMvc;

  @MockBean
  private EvacuationService evacuationService;

  @Test
  public void testGetRoot() throws Exception {
    final EvacuationDto dto = new EvacuationDto();
    dto.setId("id");
    dto.setEvacuationStatus("safety");
    dto.setFullname("fullname");
    dto.setUsername("username");
    dto.setLocationName("location");
    Mockito.when(evacuationService.getAll()).thenReturn(Arrays.asList(dto));
    mockMvc.perform(get("/evacuations")).andExpect(status().isOk())
      .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8))
      .andExpect(jsonPath("$[0]evacuationStatus").value(dto.getEvacuationStatus()));
  }

  @Test
  public void testUploadEvacuation() throws Exception {
    final EvacuationSummaryDto dto = new EvacuationSummaryDto();
    dto.setSafetyCount(1);
    dto.setLocationName("location");
    Mockito.when(evacuationService.saveFromStrings(ArgumentMatchers.any())).thenReturn(Arrays.asList(dto));
    mockMvc.perform(multipart("/evacuations").file("file", "mock".getBytes()))
      .andExpect(status().isOk())
      .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8))
      .andExpect(jsonPath("$[0]safetyCount").value(dto.getSafetyCount()))
      .andExpect(jsonPath("$[0]unknownCount").value(dto.getUnknownCount()))
      .andExpect(jsonPath("$[0]unsafetyCount").value(dto.getUnsafetyCount()));
  }

  @Test
  public void testUploadEvacuation_fail500() throws Exception {
    Mockito.when(evacuationService.saveFromStrings(ArgumentMatchers.any()))
      .thenThrow(new RuntimeException());
    mockMvc.perform(multipart("/evacuations").file("file", "mock".getBytes()))
      .andExpect(status().is5xxServerError());
  }
}
