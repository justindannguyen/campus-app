package com.justin.smartcampus.fireevacuation.util;

import org.junit.Assert;
import org.junit.Test;

public class EvacuationStatusTest {

  @Test
  public void testCreateFromString_everythingElseIsUnknown() {
    Assert.assertEquals(EvacuationStatus.UNKNOWN,
        EvacuationStatus.createFromString("This will return Unknown"));
  }

  @Test
  public void testCreateFromString_ignoreCase() {
    Assert.assertEquals(EvacuationStatus.SAFETY, EvacuationStatus.createFromString("SaFety"));
  }

  // This test case is mainly make 100% jacoco for this class
  public void testValueOf() {
    for(final EvacuationStatus status : EvacuationStatus.values()) {
      Assert.assertNotNull(EvacuationStatus.valueOf(status.toString()));
    }
  }

  @Test(expected = IllegalArgumentException.class)
  public void testValueOf_failWithCases() {
    EvacuationStatus.valueOf("SaFety");
  }
}
