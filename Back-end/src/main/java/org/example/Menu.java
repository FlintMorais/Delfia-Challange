package org.example;

import java.sql.SQLException;
import java.util.Scanner;

import org.example.dao.*;
import org.example.model.*;

public class Menu {
    public void exibir() throws SQLException {
        Scanner scanner = new Scanner(System.in);
        ClienteDAO clienteDAO = new ClienteDAO();
        EstoqueDAO estoqueDAO = new EstoqueDAO();
        VendaDAO vendaDAO = new VendaDAO();
        System.out.println("");
        System.out.println("");
        System.out.println("");
        System.out.println("");
        System.out.print("""
                
                                 ███████
                             ███████████
                           ████████████         ████████ ███
                          ██████        ████    ███████  ███
                          ████  ████████████    ███      ███ ███   ██ ████  ███
                         ████  ███████████      ████████ ███ ███   ██  ███████
                         ████ █████       ██    ███      ███ ███   ██    ████
                          ███████   ████████    ███      ███ ███  ███   ██████
                          ███████  █████████    ███      ███ ████████ ████ ████
                           ████████  ██████
                            █████████████
                               ████████
                
                1.Exibir Clientes
                2.Adicionar Cliente
                3.Exibir Estoque
                4.Adicionar Produto no estoque
                5.Realizar venda
                """);

        System.out.print("--> ");

        int opc = scanner.nextInt();
        scanner.nextLine();

        switch (opc) {
            case 1:
                clienteDAO.listarClientes();
                exibir();
            case 2:
                System.out.print("Digite o nome do cliente -> ");
                String nome = scanner.nextLine();

                System.out.print("Digite o Telefone do cliente -> ");
                String telefone = scanner.nextLine();

                System.out.print("Digite o instagram do cliente -> ");
                String instagram = scanner.nextLine();

                Cliente cliente = new Cliente(nome, telefone, instagram);
                clienteDAO.adicionaCliente(cliente);
                exibir();
            case 3:
                estoqueDAO.listarProdutos();
                exibir();
            case 4:
                System.out.print("Digite o nome do produto -> ");
                String nomeProduto = scanner.nextLine();

                System.out.print("Digite a quantidade do produto -> ");
                int quantidade = scanner.nextInt();

                System.out.print("Digite o preço do produto -> ");
                float preco = scanner.nextFloat();

                Estoque estoque = new Estoque(nomeProduto, quantidade, preco);
                estoqueDAO.adicionarProduto(estoque);
                exibir();
            case 5:
                System.out.print("Digite o nome do produto -> ");
                String nomeProdutoVenda = scanner.nextLine();
                System.out.print("Digite a quantidade vendida -> ");
                int qtVendida = scanner.nextInt();
                vendaDAO.realizarVenda(nomeProdutoVenda, qtVendida);
                exibir();
            default:
                System.out.println("Opção inválida!");
                break;
        }
    }

}
