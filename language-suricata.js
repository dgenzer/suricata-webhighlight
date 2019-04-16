Prism.languages.suricata = {
  comment: /#.*/,
  'invalid bold': /(\$[A-Z0-9_]*[a-z]+[A-Z0-9_]*|<\-)/,
  constant: /(\$[A-Z0-9_]+)/,
  "operator bold": /(pass|drop|reject|alert)/,
  tag: /(any|tcp|udp|icmp|ip|http|ftp|tls|smb|dns|dcerpc|ssh|smtp|imap|msn|modbus|dnp3|enip|nfs|ikev2|krb5|ntp|dhcp)\b/,
  url: RegExp("url,([^;]+)", "i"),
  string: {
    pattern: /(:)\"[^\"]+\"/,
    lookbehind: true

  },
  property: {
    pattern: /(:)[^;]+/,
    lookbehind: true,
  },
  keyword: /([a-z\_]+):/,
  symbol: /(<>|\->)/,
  punctuation: /[{}[\];(),.:]/,
  number: {
      pattern: /\d+/,
      greedy: true
  }
};
