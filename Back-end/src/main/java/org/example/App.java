package org.example;
import java.io.IOException;
import java.sql.*;

public class App
{
    public static void main( String[] args ) throws SQLException {
        Menu menu = new Menu();
        try{
            menu.exibir();
        } catch (SQLException e) {
            System.err.println(e.getMessage());
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
    }
}