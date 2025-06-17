package org.example;
import java.sql.*;
import org.example.factory.Factory;
import org.example.dao.*;
import org.example.model.Cliente;

public class App
{
    public static void main( String[] args ) throws SQLException {
        ClienteDAO clienteDAO = new ClienteDAO();
        try{
            Connection conexao = Factory.getConnection();
            clienteDAO.listarClientes();
        } catch (SQLException e){
            System.err.println(e.getMessage());
        }
        //Teste do Commit
    }
}
