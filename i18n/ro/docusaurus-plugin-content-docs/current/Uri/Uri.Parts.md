---
title: Uri.Parts
---

# Uri.Parts


## Description

Returnează părţile identificatorului URI absolut de intrare ca înregistrare.


## Syntax

```powerquery
Uri.Parts(
    absoluteUri as text
) as record
```


## Details

Returnează părţile <code>absoluteUri</code> de intrare ca înregistrare, conţinând valori, cum ar fi schemă, gazdă, port, cale, interogare, fragment, nume de utilizator şi parolă.


## Examples

### Example #1 
Găsiţi părţile identificatorului URI absolut „www.adventure-works.com”.
```powerquery
Uri.Parts("www.adventure-works.com")
```

Result: 
```powerquery
[
    Scheme = "http",
    Host = "www.adventure-works.com",
    Port = 80,
    Path = "/",
    Query = [],
    Fragment = "",
    UserName = "",
    Password = ""
]
```


### Example #2 
Decodificați un șir codificat cu procente.
```powerquery
let
    UriUnescapeDataString = (data as text) as text => Uri.Parts("http://contoso?a=" & data)[Query][a]
in
    UriUnescapeDataString("%2Bmoney%24")
```

Result: 
```powerquery
"+money$"
```




## Category
Uri
