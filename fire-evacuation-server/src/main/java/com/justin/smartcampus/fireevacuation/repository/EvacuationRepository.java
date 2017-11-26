/**
 * Copyright (C) 2017, Justin Nguyen
 */
package com.justin.smartcampus.fireevacuation.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.justin.smartcampus.fireevacuation.entity.Evacuation;

/**
 * @author tuan3.nguyen@gmail.com
 */
public interface EvacuationRepository extends MongoRepository<Evacuation, String> {

}
