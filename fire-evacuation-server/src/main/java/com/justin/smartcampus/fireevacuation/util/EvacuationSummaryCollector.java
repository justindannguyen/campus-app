/**
 * Copyright (C) 2017, Justin Nguyen
 */
package com.justin.smartcampus.fireevacuation.util;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.function.BiConsumer;
import java.util.function.BinaryOperator;
import java.util.function.Function;
import java.util.function.Supplier;
import java.util.stream.Collector;

import com.justin.smartcampus.fireevacuation.dto.EvacuationSummaryDto;
import com.justin.smartcampus.fireevacuation.entity.Evacuation;

/**
 * @author tuan3.nguyen@gmail.com
 */
public class EvacuationSummaryCollector implements
    Collector<Evacuation, Map<String, EvacuationSummaryDto>, List<EvacuationSummaryDto>> {

  @Override
  public BiConsumer<Map<String, EvacuationSummaryDto>, Evacuation> accumulator() {
    return (supplier, document) -> {
      final String locationName = document.getLocationName();
      EvacuationSummaryDto summaryDto = supplier.get(locationName);
      if (summaryDto == null) {
        summaryDto = new EvacuationSummaryDto();
        summaryDto.setLocationName(locationName);
        supplier.put(locationName, summaryDto);
        summaryDto.setId(supplier.size());
      }

      final EvacuationStatus status =
          EvacuationStatus.createFromString(document.getEvacuationStatus());
      switch (status) {
        case SAFETY:
          summaryDto.setSafetyCount(summaryDto.getSafetyCount() + 1);
          break;
        case UNSAFETY:
          summaryDto.setUnsafetyCount(summaryDto.getUnsafetyCount() + 1);
          break;
        default:
          summaryDto.setUnknownCount(summaryDto.getUnknownCount() + 1);
          break;
      }
    };
  }

  @Override
  public Set<Characteristics> characteristics() {
    return new HashSet<>(Arrays.asList(Characteristics.UNORDERED));
  }

  @Override
  public BinaryOperator<Map<String, EvacuationSummaryDto>> combiner() {
    return null; // This will be sequence execution so combiner will not require
  }

  @Override
  public Function<Map<String, EvacuationSummaryDto>, List<EvacuationSummaryDto>> finisher() {
    return supplier -> new ArrayList<>(supplier.values());
  }

  @Override
  public Supplier<Map<String, EvacuationSummaryDto>> supplier() {
    return HashMap::new;
  }

}
