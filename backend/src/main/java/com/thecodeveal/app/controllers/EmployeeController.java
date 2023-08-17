package com.thecodeveal.app.controllers;


import com.thecodeveal.app.entities.User;
import com.thecodeveal.app.exception.ResourceNotFOundException;
import com.thecodeveal.app.repository.UserDetailsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/v1/employees")
public class EmployeeController {
    @Autowired
    private UserDetailsRepository employeeRepository;


    @GetMapping("/")
    public List<User> getAllEmployees(){
        return employeeRepository.findAll();
    }

    @PostMapping
    public User createEmployee(@RequestBody User employee){
        return employeeRepository.save(employee);
    }

    @GetMapping("{id}")
    public ResponseEntity<User> getEmployeeById(@PathVariable Long id){
        User employee = employeeRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFOundException("Employee not exist with id; " + id));
        return ResponseEntity.ok(employee);
    }

    @PutMapping("{id}")
    public ResponseEntity<User> updateEmployee(@PathVariable Long id,@RequestBody User employeeDetails){
        User updateEmployee = employeeRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFOundException("Employee not exist with id: " + id));

        updateEmployee.setFirstName(employeeDetails.getFirstName());
        updateEmployee.setLastName(employeeDetails.getLastName());
        updateEmployee.setEmail(employeeDetails.getEmail());

        employeeRepository.save(updateEmployee);

        return ResponseEntity.ok(updateEmployee);
    }


    @DeleteMapping("{id}")
    public ResponseEntity<HttpStatus> deleteEmployee(@PathVariable long id){

        User employee = employeeRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFOundException("Employee not exist with id: " + id));

        employeeRepository.delete(employee);

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);

    }

}