/**
 * Copyright (C) 2017, Justin Nguyen
 */
package com.justin.smartcampus.fireevacuation;

import org.junit.runner.RunWith;
import org.junit.runners.Suite;
import org.junit.runners.Suite.SuiteClasses;

/**
 * @author tuan3.nguyen@gmail.com
 */
@RunWith(Suite.class)
@SuiteClasses({FireEvacuationApplicationTests.class,
    com.justin.smartcampus.fireevacuation.controller.AllTests.class,
    com.justin.smartcampus.fireevacuation.service.AllTests.class,
    com.justin.smartcampus.fireevacuation.util.AllTests.class})
public class AllTests {

}
