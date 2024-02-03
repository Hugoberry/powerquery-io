---
title: Uri.Parts
---

# Uri.Parts


## Description

Restituisce le parti dell&#39;URI assoluto di input come record.


## Syntax

```powerquery
Uri.Parts(
    absoluteUri as text
) as record
```


## Details

Restituisce le parti di <code>absoluteUri</code> di input come record, contenenti valori quali schema, host, porta, percorso, query, frammento, nome utente e password.


## Examples

### Example #1 
Trovare le parti dell&#39;URI assoluto &#34;www.adventure-works.com&#34;.
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
Decodifica una stringa codificata in percentuale.
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
