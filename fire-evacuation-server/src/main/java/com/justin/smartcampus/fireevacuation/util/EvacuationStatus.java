/**
 * Copyright (C) 2017, Justin Nguyen
 */
package com.justin.smartcampus.fireevacuation.util;

/**
 * @author tuan3.nguyen@gmail.com
 */
public enum EvacuationStatus {
  SAFETY, UNSAFETY, UNKNOWN;

  public static EvacuationStatus createFromString(final String statusString) {
    for (final EvacuationStatus status : values()) {
      if (status.name().equalsIgnoreCase(statusString)) {
        return status;
      }
    }

    return UNKNOWN;
  }
}
