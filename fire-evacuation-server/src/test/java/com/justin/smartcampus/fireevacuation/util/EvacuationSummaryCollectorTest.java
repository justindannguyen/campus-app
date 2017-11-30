/**
 * Copyright (C) 2017, Justin Nguyen
 */
package com.justin.smartcampus.fireevacuation.util;

import java.util.List;
import java.util.stream.Stream;

import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;

import com.justin.smartcampus.fireevacuation.dto.EvacuationSummaryDto;
import com.justin.smartcampus.fireevacuation.entity.Evacuation;

/**
 * @author tuan3.nguyen@gmail.com
 */
public class EvacuationSummaryCollectorTest {
  private List<EvacuationSummaryDto> dataUndertest;

  @Before
  public void setupData() {
    final Evacuation data1 = new Evacuation();
    data1.setEvacuationStatus(EvacuationStatus.SAFETY.name());
    data1.setLocationName("location1");
    final Evacuation data2 = new Evacuation();
    data2.setEvacuationStatus(EvacuationStatus.SAFETY.name());
    data2.setLocationName("location1");
    final Evacuation data3 = new Evacuation();
    data3.setEvacuationStatus(EvacuationStatus.UNSAFETY.name());
    data3.setLocationName("location1");
    final Evacuation data4 = new Evacuation();
    data4.setEvacuationStatus(EvacuationStatus.UNKNOWN.name());
    data4.setLocationName("location2");
    dataUndertest =
        Stream.of(data1, data2, data3, data4).collect(new EvacuationSummaryCollector());
  }

  @Test
  public void testAccumulatorSize() {
    Assert.assertTrue(dataUndertest.size() == 2);
  }

  @Test
  public void testAccumulatorSum() {
    final EvacuationSummaryDto dto1 = dataUndertest.get(0);
    Assert.assertTrue(dto1.getSafetyCount() == 2 && dto1.getUnsafetyCount() == 1);

    final EvacuationSummaryDto dto2 = dataUndertest.get(1);
    Assert.assertTrue(dto2.getUnknownCount() == 1);
  }
}
