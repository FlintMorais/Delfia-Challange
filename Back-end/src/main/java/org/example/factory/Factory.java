package org.example.factory;

import java.sql.*;
public class Factory {
    private static final String URL = "jdbc:postgresql://db-teste.cjq6s846y3u1.sa-east-1.rds.amazonaws.com:5432/Flux-ERP";
    private static final String USER = "postgres";
    private static final String SENHA = "FluxERP321$";
    // Metodo para obter uma conexão com o banco de dados
    public static Connection getConnection() throws SQLException{
        return DriverManager.getConnection(URL, USER, SENHA);
    }
}
