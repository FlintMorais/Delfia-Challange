package org.example;
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.nio.charset.StandardCharsets;
import com.google.gson.Gson;
import java.util.List;
import java.util.Scanner;

public class GeminiChat {
    private static final String ChaveAPI = "AIzaSyDXVhLSueAfTlPuivS4jsZHh2I40NpuCOc";
    private static final String ENDPOINT = "https://generativelanguage.googleapis.com/v1/models/gemini-1.5-flash:generateContent?key=" + ChaveAPI;

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Pergunta: ");
        String mensagem = scanner.nextLine();

        try {
            String resposta = enviar(mensagem);
            System.out.println("Resposta: " + extrairTextoComGson(resposta));
        } catch (Exception e) {
            System.err.println("Erro ao chamar a IA " + e.getMessage());
        }
    }

    private static String enviar(String mensagem) throws Exception {
        String jsonBody = """
        {
          "contents": [
            {
              "parts": [
                { "text": "%s" }
              ]
            }
          ]
        }
        """.formatted(mensagem);

        HttpClient client = HttpClient.newHttpClient();
        HttpRequest request = HttpRequest.newBuilder()
                .uri(new URI(ENDPOINT))
                .header("Content-Type", "application/json")
                .POST(HttpRequest.BodyPublishers.ofString(jsonBody, StandardCharsets.UTF_8))
                .build();

        HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());
        return response.body();
    }

    public static class GeminiResponse {
        List<Candidate> candidates;
    }

    public static class Candidate {
        Content content;
    }

    public static class Content {
        List<Part> parts;
    }

    public static class Part {
        String text;
    }

    private static String extrairTextoComGson(String json) {
        Gson gson = new Gson();
        GeminiResponse resposta = gson.fromJson(json, GeminiResponse.class);
        return resposta.candidates.get(0).content.parts.get(0).text;
    }

}
