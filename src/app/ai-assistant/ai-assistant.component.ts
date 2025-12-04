import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ai-assistant',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './ai-assistant.component.html',
  styleUrls: ['./ai-assistant.component.scss']
})
export class AiAssistantComponent {
  isChatOpen = false;
  userInput = '';
  messages: { from: 'user' | 'bot', text: string }[] = [];
  isTyping = false;
  constructor(private http: HttpClient) {}
  toggleChat() {
    this.isChatOpen = !this.isChatOpen;
if (this.isChatOpen) {
    
    this.messages = [];

    this.messages.push({
      from: 'bot',
      text: "I'm Zainab's AI assistant. You can ask me anything about her skills, experience, education, projects, or services!"
    });
  }    
  }
  scrollToBottom() {
  setTimeout(() => {
    const chatBody = document.querySelector('.chat-body');
    if (chatBody) {
      chatBody.scrollTop = chatBody.scrollHeight;
    }
  }, 100); 
}
sendMessage() {
  if (!this.userInput.trim()) return;
  const query = this.userInput.trim();
  this.messages.push({ from: 'user', text: query });
  this.userInput = '';
  this.isTyping = true;
  setTimeout(() => {
    this.http.post('http://localhost:8081/ask-zainab', query, { responseType: 'text' })
      .subscribe(response => {
        this.messages.push({ from: 'bot', text: response });
        this.isTyping = false;
        this.scrollToBottom();
      }, error => {
        this.messages.push({ from: 'bot', text: "Oops! Something went wrong. Please try again later." });
        this.isTyping = false;
        this.scrollToBottom();
      });
  }, 1000); 
}}
