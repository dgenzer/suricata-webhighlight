Prism.languages.suricata = {
  comment: /#.*/,
  'invalid bold': /(\$[A-Z0-9_]*[a-z]+[A-Z0-9_]*|<\-)/,
  constant: /(\$[A-Z0-9_]+)/,
  "operator bold": /\s*(pass|drop|reject|alert)\s+/,
  tag: /(any|tcp|udp|icmp|ip|http|ftp|tls|smb|dns|dcerpc|ssh|smtp|imap|msn|modbus|dnp3|enip|nfs|ikev2|krb5|ntp|dhcp)\b/,
  url: RegExp("url,([^;]+)", "i"),
  string: {
    pattern: /(:)\"[^\"]+\"/,
    lookbehind: true,
    greedy: true 
  },
  property: {
    pattern: /[^;:]+;/,
    lookbehind: true,
  },
  keyword: {
    pattern: /([a-z\_]+):/,
    greedy: true
  },
  symbol: /(<>|\->)/,
  punctuation: /[{}[\];(),.:]/,
  number: {
      pattern: /\d+/,
      greedy: true
  }
};
