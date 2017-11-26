package com.justin.smartcampus.fireevacuation.util;

import static com.justin.smartcampus.fireevacuation.util.EvacuationConverter.convertDocumentToDto;
import static com.justin.smartcampus.fireevacuation.util.EvacuationConverter.convertStringToDocument;
import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertTrue;

import org.junit.Test;

import com.justin.smartcampus.fireevacuation.dto.EvacuationDto;
import com.justin.smartcampus.fireevacuation.entity.Evacuation;

public class EvacuationConverterTest {

  @Test
  public void testConvertDocumentToDto() {
    final String username = "username";
    final String fullname = "fullname";
    final String status = "Safety";
    final String locationName = "locationName";
    final Evacuation document = new Evacuation();
    document.setEvacuationStatus(status);
    document.setFullname(fullname);
    document.setLocationName(locationName);
    document.setUsername(username);
    final EvacuationDto dto = convertDocumentToDto(document);

    assertTrue(username.equals(dto.getUsername()) && fullname.equals(dto.getFullname())
        && status.equalsIgnoreCase(dto.getEvacuationStatus())
        && locationName.equals(dto.getLocationName()));
  }

  @Test
  public void testConvertDocumentToDto_emptyResult() {
    final EvacuationDto dto = convertDocumentToDto(null);
    assertTrue(dto.getEvacuationStatus() == null && dto.getFullname() == null
        && dto.getLocationName() == null && dto.getUsername() == null);
  }

  @Test
  public void testConvertStringToDocument() {
    final String username = "username";
    final String fullname = "fullname";
    final String status = "Safety";
    final String locationName = "locationName";
    final Evacuation document =
        convertStringToDocument(String.join(";", username, fullname, status, locationName));

    assertTrue(username.equals(document.getUsername()) && fullname.equals(document.getFullname())
        && status.equalsIgnoreCase(document.getEvacuationStatus())
        && locationName.equals(document.getLocationName()));
  }

  @Test
  public void testConvertStringToDocument_nullIfMissingParts() {
    assertEquals(null, convertStringToDocument(""));
  }

  @Test
  public void testConvertStringToDocument_nullIfNull() {
    assertEquals(null, convertStringToDocument(null));
  }
}
