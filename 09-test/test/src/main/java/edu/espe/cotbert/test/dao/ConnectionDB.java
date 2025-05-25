/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package edu.espe.cotbert.test.dao;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

/**
 *
 * @author mateo
 */
public class ConnectionDB {

    private static final String URL = "jdbc:mysql://127.0.0.1:3306/miappdb?useSSL=false&allowPublicKeyRetrieval=true";
    private static final String USER = "admin";
    private static final String PASSWD = "pass123"; //AppRoot abcd

    static {
        try {
            Class.forName("com.mysql.cj.jdbc.Driver");
        } catch (ClassNotFoundException e) {
            System.err.println("driver not found");
            e.printStackTrace();
        }
    }

    public static Connection gestConnection() throws SQLException {
        return DriverManager.getConnection(URL, USER, PASSWD);
    }
}
