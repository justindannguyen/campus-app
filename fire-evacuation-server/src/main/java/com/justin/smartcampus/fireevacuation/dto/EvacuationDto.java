/**
 * Copyright (C) 2017, Justin Nguyen
 */
package com.justin.smartcampus.fireevacuation.dto;

/**
 * @author tuan3.nguyen@gmail.com
 */
public class EvacuationDto {
  private String username;
  private String fullname;
  private String evacuationStatus;
  private String locationName;
  private String id;

  public String getEvacuationStatus() {
    return evacuationStatus;
  }

  public String getFullname() {
    return fullname;
  }

  public String getId() {
    return id;
  }

  public String getLocationName() {
    return locationName;
  }

  public String getUsername() {
    return username;
  }

  public void setEvacuationStatus(final String evacuationStatus) {
    this.evacuationStatus = evacuationStatus;
  }

  public void setFullname(final String fullname) {
    this.fullname = fullname;
  }

  public void setId(final String id) {
    this.id = id;
  }

  public void setLocationName(final String locationName) {
    this.locationName = locationName;
  }

  public void setUsername(final String username) {
    this.username = username;
  }
}
