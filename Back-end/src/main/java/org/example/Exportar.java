package org.example;

import java.io.*;
import java.sql.SQLException;
import java.util.List;

import org.example.dao.*;
import org.example.model.Cliente;
import org.example.model.Estoque;

public class Exportar {
    String caminhoEstoque = "C://Users//mateu//OneDrive//Documentos//Projetos//Delfia-Challange//Back-end//src//main//java//Export//Estoque.txt";
    String caminhoCliente = "C://Users//mateu//OneDrive//Documentos//Projetos//Delfia-Challange//Back-end//src//main//java//Export//Clientes.txt";

    public void exportarEstoque() throws IOException, SQLException {
        EstoqueDAO estoqueDAO = new EstoqueDAO();
        List<Estoque> produtos = estoqueDAO.getTodosProdutos();

        try (BufferedWriter bw = new BufferedWriter(new FileWriter(caminhoEstoque))) {
            bw.write("+----+---------------------+------------+-----------+");
            bw.newLine();
            bw.write(String.format("| %-2s | %-19s | %-10s | %-9s |", "ID", "Produto", "Quantidade", "Preço"));
            bw.newLine();
            bw.write("+----+---------------------+------------+-----------+");
            bw.newLine();

            for (Estoque e : produtos) {
                bw.write(String.format("| %2d | %-19s | %10d | R$ %6.2f |",
                        e.getId_produto(), e.getNome(), e.getQuantidade(), e.getPreco()));
                bw.newLine();
            }

            bw.write("+----+---------------------+------------+-----------+");

            System.out.println("Estoque exportado com sucesso, em: " + caminhoEstoque);
        } catch (IOException e) {
            System.err.println("Erro ao escrever o arquivo! " + e.getMessage());
        }
    }

    public void exportarClientes() throws SQLException {
        ClienteDAO clienteDAO = new ClienteDAO();
        List<Cliente> clientes = clienteDAO.getTodosClientes();

        try (BufferedWriter bw = new BufferedWriter(new FileWriter(caminhoCliente))) {
            bw.write("+----+----------------------+---------------+-------------------+");
            bw.newLine();
            bw.write(String.format("| ID | Nome                 | Telefone      | Instagram         |"));
            bw.newLine();
            bw.write("+----+----------------------+---------------+-------------------+");
            bw.newLine();

            for (Cliente c : clientes) {
                bw.write(c.toString());
                bw.newLine();
            }

            bw.write("+----+----------------------+---------------+-------------------+");

            System.out.println("Clientes exportados com sucesso, em: " + caminhoCliente);
        } catch (IOException e) {
            System.err.println("Erro ao escrever o arquivo! " + e.getMessage());
        }
    }
}