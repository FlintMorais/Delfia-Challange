package org.example.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import org.example.factory.Factory;

public class ClienteDAO {
    private Connection conexao;

    public ClienteDAO() throws SQLException {
        this.conexao = Factory.getConnection();
    }

    public void listarClientes() {
        try {
            String sql = "SELECT * FROM t_cliente";
            PreparedStatement stmt = conexao.prepareStatement(sql);
            ResultSet rs = stmt.executeQuery();

            while (rs.next()) {
                int id = rs.getInt("id_cliente");
                String nome = rs.getString("nm_cliente");
                String telefone = rs.getString("nr_telefone");
                String instagram = rs.getString("tx_instagram");

                System.out.println("ID: " + id);
                System.out.println("Nome: " + nome);
                System.out.println("Telefone: " + telefone);
                System.out.println("Instagram: " + instagram);
                System.out.println("---------------------------");
            }

            rs.close();
            stmt.close();
            conexao.close();

        } catch (SQLException e) {
            System.err.println("Erro ao listar clientes: " + e.getMessage());
        }
    }
}

