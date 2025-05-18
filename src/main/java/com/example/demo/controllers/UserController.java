package com.example.demo.controllers;
import com.example.demo.models.User;

import com.example.demo.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;  
import org.springframework.web.bind.annotation.*; 
import java.util.List;
import org.springframework.http.ResponseEntity;;
	
	
	@RestController
	@RequestMapping("/api/users")
	public class UserController {
	    @Autowired
	    private UserService userService;
	    @PostMapping("/add")
	    public User createUser(@RequestBody User user) {
	        return userService.createUser(user);
	    }

	    @GetMapping("/all")
	    public List<User> getAllUsers() {
	        return userService.getAllUsers();
	    }

	    @GetMapping("/{email}")
	    public User getUserByEmail(@PathVariable String email) {
	        return userService.getUserByEmail(email);
	    }
	    @DeleteMapping("/{id}")
	    public ResponseEntity<String> deleteUser(@PathVariable Long id) {
	        userService.deleteUser(id);
	        return ResponseEntity.ok("User deleted successfully");
	    }
	    
	}
	    
	   
