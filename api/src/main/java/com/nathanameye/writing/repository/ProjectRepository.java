package com.nathanameye.writing.repository;

import com.nathanameye.writing.core.Project;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

/**
 * Created by nathan on 3/2/16.
 */
public interface ProjectRepository extends PagingAndSortingRepository<Project, Long> {
    List<Project> findByName(@Param("name") String name);
}
