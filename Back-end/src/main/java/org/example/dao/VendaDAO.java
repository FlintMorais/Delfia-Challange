package org.example.dao;

import java.sql.*;

import org.example.factory.Factory;

public class VendaDAO {
    private Connection conexao;

    public VendaDAO() throws SQLException {
        this.conexao = Factory.getConnection();
    }

    public void realizarVenda(String nomeProduto, int quantidadeVendida) {
        try {
            //Busca produto pelo nome
            String sqlBusca = "SELECT id_produto, qt_produto FROM t_estoque WHERE nm_produto = ?";
            PreparedStatement stmtBusca = conexao.prepareStatement(sqlBusca);
            stmtBusca.setString(1, nomeProduto);
            ResultSet rs = stmtBusca.executeQuery();

            if (rs.next()){
                int idProduto = rs.getInt("id_produto");
                int estoqueAtual = rs.getInt("qt_produto");

                //Verificar se tem estoque suficiente
                if (estoqueAtual >= quantidadeVendida){
                    int novoEstoque = estoqueAtual - quantidadeVendida;

                    //atualizar estoque
                    String sqlAtualiza = "UPDATE t_estoque SET qt_produto = ? WHERE id_produto = ?";
                    PreparedStatement stmtAtualiza = conexao.prepareStatement(sqlAtualiza);
                    stmtAtualiza.setInt(1, novoEstoque);
                    stmtAtualiza.setInt(2, idProduto);
                    stmtAtualiza.executeUpdate();

                    //Registrar venda
                    System.out.println("Venda realizada com sucesso!!");
                    System.out.println("Produto: " + nomeProduto + " | Quantidade: " + quantidadeVendida);
                } else {
                    System.out.println("Estoque insuficiente! Estoque atual: " + estoqueAtual);
                }
            } else {
                System.out.println("Produto não encontrado.");
            }
        } catch (SQLException e){
            System.err.println("Erro ao realizar venda: " + e.getMessage());
        }
    }
}

