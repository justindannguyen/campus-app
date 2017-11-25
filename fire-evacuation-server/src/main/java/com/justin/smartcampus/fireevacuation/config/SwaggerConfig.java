/**
 * Copyright (C) 2017, Justin Nguyen
 */
package com.justin.smartcampus.fireevacuation.config;

import static springfox.documentation.builders.RequestHandlerSelectors.basePackage;

import java.util.Collections;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import springfox.documentation.builders.PathSelectors;
import springfox.documentation.service.ApiInfo;
import springfox.documentation.service.Contact;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

/**
 * @author tuan3.nguyen@gmail.com
 */
@Configuration
@EnableSwagger2
public class SwaggerConfig {
  @Bean
  public Docket configSwagger() {
    return new Docket(DocumentationType.SWAGGER_2)
      .select()
      .apis(basePackage("com.justin.smartcampus.fireevacuation.controller"))
      .paths(PathSelectors.any())
      .build()
      .apiInfo(getApiInfo());
  }

  private ApiInfo getApiInfo() {
    final Contact contact = new Contact("Justin Nguyen", "https://github.com/justindannguyen",
        "tuan3.nguyen@gmail.com");
    return new ApiInfo("Fire Evacuation APIs", "Provides API for the fire evacuation applications",
        "1.0", "Terms of service", contact, "License of API",
        "https://github.com/justindannguyen/campus-app/blob/master/LICENSE",
        Collections.emptyList());
  }
}
