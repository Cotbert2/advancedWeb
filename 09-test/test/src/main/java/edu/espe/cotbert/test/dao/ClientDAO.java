/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package edu.espe.cotbert.test.dao;

import edu.espe.cotbert.test.model.ClientModel;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

/**
 *
 * @author mateo
 */
public class ClientDAO {

public boolean createClient(ClientModel client) {
    String query = "INSERT INTO clients (name, lastname, email, age, address) VALUES (?, ?, ?, ?, ?)";
    try (Connection connection = ConnectionDB.gestConnection()) {
        PreparedStatement stmt = connection.prepareStatement(query);
        stmt.setString(1, client.getName());
        stmt.setString(2, client.getLastName());
        stmt.setString(3, client.getEmail());
        stmt.setInt(4, client.getAge());
        stmt.setString(5, client.getAddress());
        System.out.println("Creando cliente: " + client.getName() + ", " + client.getEmail());

        int rowsAffected = stmt.executeUpdate();
        return rowsAffected > 0;
    } catch (SQLException e) {
        e.printStackTrace();
        return false;
    }
}


public boolean deleteClient(long id) {
    String query = "DELETE FROM clients WHERE id = ?";
    try (Connection connection = ConnectionDB.gestConnection()) {
        PreparedStatement stmt = connection.prepareStatement(query);
        stmt.setLong(1, id); // Usar setLong
        int rowsAffected = stmt.executeUpdate();
        return rowsAffected > 0;
    } catch (SQLException e) {
        e.printStackTrace();
        return false;
    }
}

public boolean updateClient(ClientModel client) {
    String query = "UPDATE clients SET name = ?, lastname = ?, email = ?, age = ?, address = ? WHERE id = ?";
    try (Connection connection = ConnectionDB.gestConnection()) {
        PreparedStatement stmt = connection.prepareStatement(query);
        stmt.setString(1, client.getName());
        stmt.setString(2, client.getLastName());
        stmt.setString(3, client.getEmail());
        stmt.setInt(4, client.getAge());
        stmt.setString(5, client.getAddress());
        stmt.setLong(6, client.getId()); // Usar setLong en lugar de setInt
        int rowsAffected = stmt.executeUpdate();
        return rowsAffected > 0;
    } catch (SQLException e) {
        e.printStackTrace();
        return false;
    }
}

    public List<ClientModel> getAll() {
        String query = "SELECT * FROM clients;";
        List<ClientModel> clients = new ArrayList<>();
        try (Connection connection = ConnectionDB.gestConnection()) {
            PreparedStatement stmt = connection.prepareStatement(query);
            //return the set of numbers
            ResultSet rs = stmt.executeQuery();
            System.out.println("query" + query);
            while (rs.next()) {
                clients.add(
                        new ClientModel(
                                rs.getLong("id"),
                                rs.getString("name"),
                                rs.getString("lastname"),
                                rs.getString("email"),
                                rs.getInt("age"),
                                rs.getString("address")));
            }
            return clients;
        } catch (SQLException e) {
            e.printStackTrace();
            return new ArrayList<>();
        }
    }
}
