/**
 * Copyright (C) 2017, Justin Nguyen
 */
package com.justin.smartcampus.fireevacuation.service;

import static java.util.stream.Collectors.mapping;
import static java.util.stream.Collectors.toList;

import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.justin.smartcampus.fireevacuation.dto.EvacuationDto;
import com.justin.smartcampus.fireevacuation.dto.EvacuationSummaryDto;
import com.justin.smartcampus.fireevacuation.repository.EvacuationRepository;
import com.justin.smartcampus.fireevacuation.util.EvacuationConverter;
import com.justin.smartcampus.fireevacuation.util.EvacuationSummaryCollector;

/**
 * @author tuan3.nguyen@gmail.com
 */
@Service
@Transactional
public class EvacuationService {
  @Autowired
  private EvacuationRepository evacuationRepository;

  public List<EvacuationDto> getAll() {
    return evacuationRepository.findAll()
        .parallelStream()
        .collect(mapping(EvacuationConverter::convertDocumentToDto, toList()));
  }

  public List<EvacuationSummaryDto> saveFromStrings(final Stream<String> lineStream) {
    evacuationRepository.deleteAll();
    return evacuationRepository
        .saveAll(lineStream.map(EvacuationConverter::convertStringToDocument)
            .filter(document -> document != null).collect(Collectors.toList()))
        .stream().collect(new EvacuationSummaryCollector());
  }
}
