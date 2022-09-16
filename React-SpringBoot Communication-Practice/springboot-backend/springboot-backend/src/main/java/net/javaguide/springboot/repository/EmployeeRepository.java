package net.javaguide.springboot.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import net.javaguide.springboot.model.employee;
import org.springframework.stereotype.Repository;
@Repository
public interface EmployeeRepository extends JpaRepository<employee, Long> {
//all crud methods
}
