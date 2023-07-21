package VoThuanLoi.ChatWithAI.controller;

import VoThuanLoi.ChatWithAI.service.OpenAIService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ChatController {
    @Autowired
    private OpenAIService openAIService;

    @GetMapping("/chat")
    public String handelChat(@RequestParam("input") String input){
        return openAIService.openAIServiceCall(input);
    }
}
