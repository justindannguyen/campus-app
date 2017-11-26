/**
 * Copyright (C) 2017, Justin Nguyen
 */
package com.justin.smartcampus.fireevacuation.util;

import static com.justin.smartcampus.fireevacuation.util.EvacuationStatus.createFromString;

import com.justin.smartcampus.fireevacuation.dto.EvacuationDto;
import com.justin.smartcampus.fireevacuation.entity.Evacuation;

/**
 * @author tuan3.nguyen@gmail.com
 */
public interface EvacuationConverter {
  public static EvacuationDto convertDocumentToDto(final Evacuation document) {
    final EvacuationDto dto = new EvacuationDto();
    if (document != null) {
      dto.setFullname(document.getFullname());
      dto.setUsername(document.getUsername());
      dto.setEvacuationStatus(document.getEvacuationStatus());
      dto.setLocationName(document.getLocationName());
      dto.setId(document.getId());
    }
    return dto;
  }

  public static Evacuation convertStringToDocument(final String str) {
    if (str == null) {
      return null;
    }

    final String[] parts = str.split(";");
    if (parts.length <= 3) {
      return null;
    }

    final Evacuation evacuation = new Evacuation();
    evacuation.setUsername(parts[0]);
    evacuation.setFullname(parts[1]);
    evacuation.setEvacuationStatus(createFromString(parts[2]).name().toLowerCase());
    evacuation.setLocationName(parts[3]);
    return evacuation;
  }
}
