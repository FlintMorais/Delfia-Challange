package org.example.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import org.example.factory.Factory;
import org.example.model.Cliente;

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

    public void adicionaCliente(Cliente cliente){
        if (this.conexao == null){
            System.err.println("Conexão não estabelecida!");
            return;
        }

        String sql = "INSERT INTO t_cliente (nm_cliente, nr_telefone, tx_instagram) VALUES (?, ?, ?)";
        try(PreparedStatement stmt = conexao.prepareStatement(sql)){
            stmt.setString(1, cliente.getNome());
            stmt.setString(2, cliente.getTelefone());
            stmt.setString(3, cliente.getInstagram());

            int linhasAfetadas = stmt.executeUpdate();
            if(linhasAfetadas > 0){
                System.out.println("Cliente inserido com sucesso!!");
            }

            stmt.close();
            conexao.close();
        } catch (SQLException e){
            System.err.println("Erro ao adicionar Cliente: " + e);
        }

    }
}

