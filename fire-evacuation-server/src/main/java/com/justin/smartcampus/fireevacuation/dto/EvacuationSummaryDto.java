/**
 * Copyright (C) 2017, Justin Nguyen
 */
package com.justin.smartcampus.fireevacuation.dto;

/**
 * @author tuan3.nguyen@gmail.com
 */
public class EvacuationSummaryDto {
  private int id;
  private String locationName;
  private int safetyCount;
  private int unsafetyCount;
  private int unknownCount;

  public int getId() {
    return id;
  }

  public String getLocationName() {
    return locationName;
  }

  public int getSafetyCount() {
    return safetyCount;
  }

  public int getUnknownCount() {
    return unknownCount;
  }

  public int getUnsafetyCount() {
    return unsafetyCount;
  }

  public void setId(final int id) {
    this.id = id;
  }

  public void setLocationName(final String locationName) {
    this.locationName = locationName;
  }

  public void setSafetyCount(final int safetyCount) {
    this.safetyCount = safetyCount;
  }

  public void setUnknownCount(final int unknownCount) {
    this.unknownCount = unknownCount;
  }

  public void setUnsafetyCount(final int unsafetyCount) {
    this.unsafetyCount = unsafetyCount;
  }
}
