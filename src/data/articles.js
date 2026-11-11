
const articles = [
  {
    id: 0,
    title: "10 Essential Tips to Stay Safe Online",
    category: "Online Safety",
    description: "Learn practical ways to protect yourself from online threats and browse the internet safely.",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=900",
    imageAlt: "Cybersecurity digital protection",
    content: [
      { heading: "Introduction", text: "The internet helps us communicate, learn and work. However, unsafe online habits can expose us to scams, identity theft and privacy risks." },
      { heading: "Use Strong Passwords", text: "Create long and unique passwords for your accounts. Avoid using personal details such as your name or birthday. A password manager can help you store passwords securely." },
      { heading: "Avoid Suspicious Links", text: "Do not click unexpected links in emails or messages. Check website addresses carefully before entering personal information." },
      { heading: "Keep Devices Updated", text: "Install software and security updates regularly. Updates often fix weaknesses that attackers could otherwise exploit." },
      { heading: "Protect Personal Information", text: "Share personal information carefully. Review privacy settings on social media and avoid posting sensitive details publicly." }
    ]
  },
  {
    id: 1,
    title: "Understanding Common Cybersecurity Threats",
    category: "Cybersecurity",
    description: "Discover common cyber attacks, how they work and how to protect your devices.",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=900",
    imageAlt: "Cybersecurity and digital threat protection",
    content: [
      { heading: "What Is Cybersecurity?", text: "Cybersecurity is the practice of protecting computers, networks, applications and information from unauthorized access and digital attacks." },
      { heading: "Malware", text: "Malware is harmful software designed to damage devices, steal information or disrupt systems. Avoid downloading files from untrusted websites." },
      { heading: "Phishing Attacks", text: "Phishing messages pretend to come from trusted organizations. They may ask you to reveal passwords or financial information." },
      { heading: "Ransomware", text: "Ransomware is malware that can lock files or systems and demand payment. Keep backups of important files." },
      { heading: "How to Stay Protected", text: "Use multi-factor authentication, install updates, keep backups and avoid suspicious attachments." }
    ]
  },
  {
    id: 2,
    title: "How to Protect Your Online Privacy",
    category: "Privacy",
    description: "Learn how to keep your personal information private and secure online.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=900",
    imageAlt: "Online privacy and personal data protection",
    content: [
      { heading: "Why Online Privacy Matters", text: "Online privacy means having control over how your personal information is collected, used and shared." },
      { heading: "Review App Permissions", text: "Check which apps can access your camera, microphone, contacts and location. Remove permissions that are not needed." },
      { heading: "Use Secure Websites", text: "Look for HTTPS in a website address before sharing sensitive information. Be careful with unexpected requests." },
      { heading: "Limit What You Share", text: "Avoid publishing your home address, phone number or other sensitive details on public profiles." },
      { heading: "Check Privacy Settings", text: "Review the privacy settings of your social media and online accounts regularly." }
    ]
  },
  {
    id: 3,
    title: "How to Create Strong and Secure Passwords",
    category: "Security Guides",
    description: "Follow simple password security practices to protect your online accounts.",
    image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=900",
    imageAlt: "Password security and digital lock",
    content: [
      { heading: "Why Password Security Matters", text: "Passwords help protect email, banking, social media and other accounts. Weak or reused passwords can put accounts at risk." },
      { heading: "Create Long Passwords", text: "Use a long password or passphrase that is difficult to guess. Avoid common words and personal information." },
      { heading: "Never Reuse Passwords", text: "Create a different password for every important account. This prevents one exposed password from putting all accounts at risk." },
      { heading: "Use Multi-Factor Authentication", text: "Multi-factor authentication adds another verification step when signing in. Enable it wherever available." },
      { heading: "Use a Password Manager", text: "A trusted password manager can generate and store unique passwords securely." }
    ]
  },
  {
    id: 4,
    title: "How to Recognize and Avoid Phishing Scams",
    category: "Cybersecurity",
    description: "Learn to identify fake emails, suspicious messages and fraudulent websites.",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=900",
    imageAlt: "Phishing scam and email security awareness",
    content: [
      { heading: "What Is Phishing?", text: "Phishing is a scam in which criminals pretend to be trusted people or organizations to trick users into sharing sensitive information." },
      { heading: "Check the Sender", text: "Look carefully at the sender's email address or phone number. Small spelling changes can make fake accounts look genuine." },
      { heading: "Watch for Urgent Messages", text: "Messages claiming that your account will immediately close may be designed to pressure you into making a mistake." },
      { heading: "Never Share Verification Codes", text: "Never share passwords or verification codes in response to unexpected messages." },
      { heading: "Report Suspicious Messages", text: "Do not click suspicious links or attachments. Report the message using the platform's reporting feature." }
    ]
  }
];

export default articles;
