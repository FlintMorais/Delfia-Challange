package org.example.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import org.example.factory.Factory;
import org.example.model.Estoque;

public class EstoqueDAO {
    private Connection conexao;

    public EstoqueDAO() throws SQLException {
        this.conexao = Factory.getConnection();
    }

    public void listarProdutos(){
        try{
            String sql = "SELECT * FROM t_estoque";
            PreparedStatement stmt = conexao.prepareStatement(sql);
            ResultSet rs = stmt.executeQuery();

            while (rs.next()){
                int id = rs.getInt("id_produto");
                String nome = rs.getString("nm_produto");
                int quantidade = rs.getInt("qt_produto");
                float preco = rs.getFloat("vl_preco");

                System.out.println("ID: " + id);
                System.out.println("Nome: " + nome);
                System.out.println("Quantidade: " + quantidade);
                System.out.println("Preço: " + preco);
                System.out.println("---------------------------");
            }

            rs.close();
            stmt.close();
            conexao.close();
        } catch (SQLException e){
            System.err.println("Erro ao listar produtos" + e.getMessage());
        }
    }

    public void adicionarProduto(Estoque estoque){
        if (this.conexao == null){
            System.err.println("Conexão não estabelecida");
            return;
        }

        String sql = "INSERT INTO t_estoque (nm_produto, qt_produto, vl_preco) VALUES (?, ?, ?)";
        try(PreparedStatement stmt = conexao.prepareStatement(sql)){
            stmt.setString(1, estoque.getNome());
            stmt.setInt(2, estoque.getQuantidade());
            stmt.setFloat(3, estoque.getPreco());

            int linhasAfetadas = stmt.executeUpdate();
            if(linhasAfetadas > 0){
                System.out.println("Produto inserido com sucesso!!");
            }

            stmt.close();
            conexao.close();
        } catch (SQLException e){
            System.err.println("Erro ao adicionar Produto: " + e);
        }
    }
}
