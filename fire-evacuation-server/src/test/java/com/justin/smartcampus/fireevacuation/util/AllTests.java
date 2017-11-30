/**
 * Copyright (C) 2017, Justin Nguyen
 */
package com.justin.smartcampus.fireevacuation.util;

import org.junit.runner.RunWith;
import org.junit.runners.Suite;
import org.junit.runners.Suite.SuiteClasses;

/**
 * @author tuan3.nguyen@gmail.com
 */
@RunWith(Suite.class)
@SuiteClasses({EvacuationConverterTest.class, EvacuationStatusTest.class,
    EvacuationSummaryCollectorTest.class})
public class AllTests {

}
