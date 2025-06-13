package org.example;
import java.sql.*;
import org.example.factory.Factory;

public class App 
{
    public static void main( String[] args )
    {
        try{
            Connection conexao = Factory.getConnection();
            System.out.println("Conexão realizada");
        } catch (SQLException e){
            System.err.println(e.getMessage());
        }
    }
}
