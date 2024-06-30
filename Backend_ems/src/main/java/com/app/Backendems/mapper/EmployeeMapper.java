package com.app.Backendems.mapper;

import com.app.Backendems.EmployeeDto;
import com.app.Backendems.entity.Employee;

public class EmployeeMapper {

    //map employee jpa entity to employee dto
    public static EmployeeDto mapToEmployeeDto(Employee employee){

        return new EmployeeDto(
                employee.getId(),
                employee.getFirstName(),
                employee.getLastName(),
                employee.getEmail()
        );
    }

    //map employee dto to employee jpa entity
    public static Employee mapTOEmployee(EmployeeDto employeeDto){

        return new Employee(
                employeeDto.getId(),
                employeeDto.getFirstName(),
                employeeDto.getLastName(),
                employeeDto.getEmail()
        );
    }

}
