package main

import (
	"bufio"
	"bytes"
	"encoding/json"
	"fmt"
	"io"
	"net/http"
	"os"
	"strings"
)

type Message struct{ Role, Content string }
type Request struct{ Model string; Messages []Message; Stream bool }
type Response struct{ Message Message }

func main() {
	history := []Message{{Role: "system", Content: "You are LLama, a helpful AI assistant."}}
	reader := bufio.NewReader(os.Stdin)
	fmt.Println("=== Mill Chat CLI ===\nType 'exit' to quit.")
	for {
		fmt.Print("You: ")
		input, _ := reader.ReadString('\n')
		input = strings.TrimSpace(input)
		if input == "exit" { fmt.Println("Exiting..."); break }
		history = append(history, Message{"user", input})
		aiText, err := ask(history)
		if err != nil { fmt.Println("Error:", err); continue }
		history = append(history, Message{"assistant", aiText})
		fmt.Println("Gemma:", aiText)
	}
}

func ask(history []Message) (string, error) {
	req := Request{"llama3.2:1b", history, false}
	js, _ := json.Marshal(req)
	resp, err := http.Post("http://localhost:11434/api/chat", "application/json", bytes.NewReader(js))
	if err != nil { return "", err }
	defer resp.Body.Close()
	body, _ := io.ReadAll(resp.Body)
	var r Response
	json.Unmarshal(body, &r)
	return r.Message.Content, nil
}