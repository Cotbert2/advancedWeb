/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/Servlet.java to edit this template
 */
package edu.espe.cotbert.test;

import edu.espe.cotbert.test.dao.ClientDAO;
import edu.espe.cotbert.test.model.ClientModel;
import java.io.IOException;
import java.io.PrintWriter;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import java.util.List;

/**
 *
 * @author mateo
 */
@WebServlet(name = "ClientServlet", urlPatterns = {"/Client"})
public class ClientServlet extends HttpServlet {
    private ClientDAO clientDAO = new ClientDAO();

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        List<ClientModel> clients = clientDAO.getAll();
        request.setAttribute("clients", clients);
        request.getRequestDispatcher("/clients.jsp").forward(request, response);
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        String action = request.getParameter("action");

        if (action == null) {
            response.sendRedirect("Client"); // default fallback
            return;
        }

        switch (action) {
            case "create":
                createClient(request);
                break;
            case "update":
                updateClient(request);
                break;
            case "delete":
                deleteClient(request);
                break;
            default:
                System.out.println("Unknown action: " + action);
        }

        response.sendRedirect("Client"); // Redirige al listado luego de la acción
    }

    private void createClient(HttpServletRequest request) {
        String name = request.getParameter("name");
        String lastname = request.getParameter("lastname");
        String email = request.getParameter("email");
        int age = Integer.parseInt(request.getParameter("age"));
        String address = request.getParameter("address");

        ClientModel client = new ClientModel(0L, name, lastname, email, age, address);
        clientDAO.createClient(client);
    }

    private void updateClient(HttpServletRequest request) {
        long id = Long.parseLong(request.getParameter("id"));
        String name = request.getParameter("name");
        String lastname = request.getParameter("lastname");
        String email = request.getParameter("email");
        int age = Integer.parseInt(request.getParameter("age"));
        String address = request.getParameter("address");

        ClientModel client = new ClientModel(id, name, lastname, email, age, address);
        clientDAO.updateClient(client);
    }

    private void deleteClient(HttpServletRequest request) {
        long id = Long.parseLong(request.getParameter("id"));
        clientDAO.deleteClient(id);
    }
}
