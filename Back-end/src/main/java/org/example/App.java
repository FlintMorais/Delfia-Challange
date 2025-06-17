package org.example;
import java.sql.*;
import org.example.factory.Factory;
import org.example.dao.*;
import org.example.model.Cliente;


public class App
{
    public static void main( String[] args ) throws SQLException {
        ClienteDAO clienteDAO = new ClienteDAO();
        Menu menu = new Menu();
        try{
            Connection conexao = Factory.getConnection();
            menu.exibir();
        } catch (SQLException e){
            System.err.println(e.getMessage());
        }
        //Teste do Commit
    }
}
