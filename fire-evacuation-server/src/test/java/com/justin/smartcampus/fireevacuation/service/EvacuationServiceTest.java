/**
 * Copyright (C) 2017, Justin Nguyen
 */
package com.justin.smartcampus.fireevacuation.service;

import java.util.Arrays;
import java.util.List;
import java.util.stream.Stream;

import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.ArgumentMatchers;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.TestConfiguration;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.context.annotation.Bean;
import org.springframework.test.context.junit4.SpringRunner;

import com.justin.smartcampus.fireevacuation.dto.EvacuationDto;
import com.justin.smartcampus.fireevacuation.dto.EvacuationSummaryDto;
import com.justin.smartcampus.fireevacuation.entity.Evacuation;
import com.justin.smartcampus.fireevacuation.repository.EvacuationRepository;


/**
 * @author tuan3.nguyen@gmail.com
 */
@RunWith(SpringRunner.class)
public class EvacuationServiceTest {

  @TestConfiguration
  static class EvacuationServiceTestContextConfiguration {
    @Bean
    public EvacuationService employeeService() {
      return new EvacuationService();
    }
  }

  @Autowired
  private EvacuationService evacuationService;

  @MockBean
  private EvacuationRepository evacuationRepository;

  @Test
  public void testGetAll() {
    final Evacuation document = new Evacuation();
    document.setId("id");
    document.setEvacuationStatus("safety");
    document.setFullname("fullname");
    document.setUsername("username");
    document.setLocationName("location");
    Mockito.when(evacuationRepository.findAll()).thenReturn(Arrays.asList(document));

    final EvacuationDto dto = evacuationService.getAll().get(0);
    Assert.assertTrue(dto.getId() != null && document.getFullname().equals(dto.getFullname())
        && document.getEvacuationStatus().equals(dto.getEvacuationStatus())
        && document.getLocationName().equals(dto.getLocationName())
        && document.getUsername().equals(dto.getUsername()));
  }

  @Test
  public void testSaveFromStrings() {
    final String username = "username";
    final String fullname = "fullname";
    final String status = "Safety";
    final String locationName = "locationName";
    final String line = String.join(";", username, fullname, status, locationName);
    Mockito.when(evacuationRepository.saveAll(ArgumentMatchers.any()))
        .thenAnswer(params -> params.getArguments()[0]);
    final EvacuationSummaryDto dto = evacuationService.saveFromStrings(Stream.of(line)).get(0);

    Assert.assertTrue(dto.getUnknownCount() == 0 && dto.getSafetyCount() == 1
        && dto.getUnsafetyCount() == 0 && locationName.equals(dto.getLocationName()));
  }

  @Test
  public void testSaveFromStrings_nullAreFiltered() {
    final String username = "username";
    final String fullname = "fullname";
    final String status = "Safety";
    final String locationName = "locationName";
    final String line = String.join(";", username, fullname, status, locationName);
    final String invalidLine = "";
    Mockito.when(evacuationRepository.saveAll(ArgumentMatchers.any()))
        .thenAnswer(params -> params.getArguments()[0]);
    final List<EvacuationSummaryDto> dto =
        evacuationService.saveFromStrings(Stream.of(line, invalidLine));
    Assert.assertTrue(dto.size() == 1);
  }

}
