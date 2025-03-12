import { AfterViewInit, Component, OnInit } from '@angular/core';
import { LayoutService } from '../../../services/layout.service';
import { SproutAvatar, SproutButton, SproutInput } from '../../../../../projects/sprout/src/public-api';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-chat',
  imports: [CommonModule, SproutButton, SproutAvatar, SproutInput],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.css',
})
export class ChatComponent implements AfterViewInit {
  today = new Date();

  selectedContact = 0;

  contacts = [
    {
      name: 'John Doe',
      note: 'This is a long note that should be truncated',
      imageUrl: 'https://randomuser.me/api/portraits/men/1.jpg',
      lastMessageTs: new Date(),
      lastActiveTs: new Date(
        new Date().setMinutes(new Date().getMinutes() - 5)
      ),
    },
    {
      name: 'Jane Smith',
      note: 'Another long note that should be truncated',
      imageUrl: 'https://randomuser.me/api/portraits/women/2.jpg',
      lastMessageTs: new Date(new Date().setDate(new Date().getDate() - 2)),
      lastActiveTs: new Date(new Date().setHours(new Date().getHours() - 3)),
    },
    {
      name: 'Alice Johnson',
      note: 'Yet another long note that should be truncated',
      imageUrl: 'https://randomuser.me/api/portraits/women/3.jpg',
      lastMessageTs: new Date(new Date().setDate(new Date().getDate() - 4)),
      lastActiveTs: new Date(new Date().setDate(new Date().getDate() - 1)),
    },
    {
      name: 'Bob Brown',
      note: 'This is a different long note that should be truncated',
      imageUrl: 'https://randomuser.me/api/portraits/men/4.jpg',
      lastMessageTs: new Date(new Date().setDate(new Date().getDate() - 6)),
      lastActiveTs: new Date(new Date().setDate(new Date().getDate() - 2)),
    },
    {
      name: 'Charlie Davis',
      note: 'This is yet another different long note that should be truncated',
      imageUrl: 'https://randomuser.me/api/portraits/men/5.jpg',
      lastMessageTs: new Date(new Date().setDate(new Date().getDate() - 8)),
      lastActiveTs: new Date(new Date().setDate(new Date().getDate() - 3)),
    },
    {
      name: 'Diana Evans',
      note: 'This is a unique long note that should be truncated',
      imageUrl: 'https://randomuser.me/api/portraits/women/6.jpg',
      lastMessageTs: new Date(new Date().setDate(new Date().getDate() - 10)),
      lastActiveTs: new Date(new Date().setDate(new Date().getDate() - 4)),
    },
  ];


  dummyMessages = [
    {
      sender: 'user',
      message: 'Hey, are you busy?',
      timestamp: new Date(new Date().setDate(new Date().getDate() - 2)),
    },
    {
      sender: 'user',
      message: 'I\'m trying to debug the issue with the chat component.',
      timestamp: new Date(new Date().setDate(new Date().getDate() - 2) + 1000 * 60 * 10),
    },
    {
      sender: 'self',
      message: 'Uhh...',
      timestamp: new Date(new Date().setDate(new Date().getDate() - 2) + 1000 * 60 * 20),
    },
    {
      sender: 'self',
      message: 'Yeah I\'ve got a few minutes, what\'s up?',
      timestamp: new Date(new Date().setDate(new Date().getDate() - 2) + 1000 * 60 * 30),
    },
    {
      sender: 'user',
      message: 'I\'m stuck with a unit test, it\'s not passing.',
      timestamp: new Date(new Date().setDate(new Date().getDate() - 1)),
    },
    {
      sender: 'user',
      message: 'Can I call you and you take a look?',
      timestamp: new Date(new Date().setDate(new Date().getDate() - 1) + 1000 * 60 * 10),
    },
    {
      sender: 'self',
      message: 'Ahh yeah those are annoying',
      timestamp: new Date(new Date().setDate(new Date().getDate() - 1) + 1000 * 60 * 20),
    },
    {
      sender: 'self',
      message: 'Sure, call me whenever',
      timestamp: new Date(new Date().setDate(new Date().getDate() - 1) + 1000 * 60 * 30),
    },
    {
      sender: 'user',
      message: 'The messages are not displaying correctly.',
      timestamp: new Date(new Date().setDate(new Date().getDate() - 1) + 1000 * 60 * 40),
    },
    {
      sender: 'self',
      message: 'Let me take a look at your code.',
      timestamp: new Date(new Date().setDate(new Date().getDate() - 1) + 1000 * 60 * 50),
    },
    {
      sender: 'user',
      message: 'Thank you! I will send it over.',
      timestamp: new Date(new Date().setDate(new Date().getDate() - 1) + 1000 * 60 * 60),
    },
    {
      sender: 'self',
      message: 'Got it. I see the issue. You need to update the binding.',
      timestamp: new Date(new Date().setHours(new Date().getHours() - 1)),
    },
    {
      sender: 'user',
      message: 'Oh, I see. Thanks for the help!',
      timestamp: new Date(new Date().setMinutes(new Date().getMinutes() - 30)),
    }
  ]

  constructor(private readonly layoutService: LayoutService) {
    this.layoutService.setTitle('Apps / Chat');
  }

  ngAfterViewInit(): void {
    this.selectContact(0);
  }

  selectContact(index: number) {
    this.selectedContact = index;
    this.loadChat();
  }

  loadChat() {
    const chat = document.getElementById('chatMessages');
    if (!chat) {
      return;
    }
    chat.scrollTop = chat.scrollHeight;
  }

  splitName(name: string) {
    return name
      .split(' ')
      .map((n) => n[0])
      .join('');
  }

  getMessageTime(ts: Date) {
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(today.getDate() - 1);

    const isToday =
      ts.getDate() === today.getDate() &&
      ts.getMonth() === today.getMonth() &&
      ts.getFullYear() === today.getFullYear();

    const isYesterday =
      ts.getDate() === yesterday.getDate() &&
      ts.getMonth() === yesterday.getMonth() &&
      ts.getFullYear() === yesterday.getFullYear();

    if (isToday) {
      return `Today ${ts.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`;
    } else if (isYesterday) {
      return `Yesterday ${ts.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`;
    } else {
      return `${ts.toLocaleDateString([], { month: '2-digit', day: '2-digit', year: '2-digit' })} ${ts.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`;
    }
  }

  getRelativeTime(ts: Date) {
    const today = new Date();
    const isSameDay =
      ts.getDate() === today.getDate() &&
      ts.getMonth() === today.getMonth() &&
      ts.getFullYear() === today.getFullYear();

    if (isSameDay) {
      return ts.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    }

    const diffTime = Math.abs(today.getTime() - ts.getTime());
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays <= 7) {
      return ts.toLocaleDateString([], { weekday: 'long' });
    } else {
      return ts.toLocaleDateString([], {
        month: '2-digit',
        day: '2-digit',
        year: 'numeric',
      });
    }
  }
}
