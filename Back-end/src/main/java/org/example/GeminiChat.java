package org.example;

import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.nio.charset.StandardCharsets;
import com.google.gson.Gson;
import java.util.List;

public class GeminiChat {
    static APIKey apiKey = new APIKey();
    private static final String ChaveAPI = apiKey.getChaveAPI();
    private static final String ENDPOINT = "https://generativelanguage.googleapis.com/v1/models/gemini-1.5-flash:generateContent?key=" + ChaveAPI;

    public GeminiChat(String mensagem){
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
        if (json.contains("\"error\"")) {
            return "⚠️ A API retornou um erro: " + json;
        }

        Gson gson = new Gson();
        GeminiResponse resposta = gson.fromJson(json, GeminiResponse.class);

        if (resposta == null ||
                resposta.candidates == null ||
                resposta.candidates.isEmpty() ||
                resposta.candidates.get(0).content == null ||
                resposta.candidates.get(0).content.parts == null ||
                resposta.candidates.get(0).content.parts.isEmpty()) {

            return "⚠️ Erro: resposta inválida da IA.";
        }

        return resposta.candidates.get(0).content.parts.get(0).text;
    }

}
