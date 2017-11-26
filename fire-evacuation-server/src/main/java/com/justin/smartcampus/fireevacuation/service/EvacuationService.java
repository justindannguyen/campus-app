/**
 * Copyright (C) 2017, Justin Nguyen
 */
package com.justin.smartcampus.fireevacuation.service;

import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.justin.smartcampus.fireevacuation.dto.EvacuationDto;
import com.justin.smartcampus.fireevacuation.repository.EvacuationRepository;
import com.justin.smartcampus.fireevacuation.util.EvacuationConverter;

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
        .map(EvacuationConverter::convertDocumentToDto)
        .collect(Collectors.toList());
  }
  
  public List<EvacuationDto> saveFromStrings(final Stream<String> lineStream) {
    return evacuationRepository.saveAll(lineStream.map(EvacuationConverter::convertStringToDocument)
        .filter(document -> document != null)
        .collect(Collectors.toList()))
        .stream()
        .map(EvacuationConverter::convertDocumentToDto)
        .collect(Collectors.toList());
  }
}
