package net.javaguide.springboot.controller;

import net.javaguide.springboot.model.employee;
import net.javaguide.springboot.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.Query;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/v1/employees")
public class EmployeeController {
    @Autowired
    private EmployeeRepository employeeRepository;

    @GetMapping
    public List<employee> getAllEmployees(){
        return  employeeRepository.findAll();
    }

    //build create employee REST API
    @PostMapping
    public employee createEmployee(@RequestBody employee Employee){
    return employeeRepository.save(Employee);
    }

}
