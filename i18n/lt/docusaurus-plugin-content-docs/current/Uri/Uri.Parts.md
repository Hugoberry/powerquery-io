---
title: Uri.Parts
---

# Uri.Parts


## Description

Pateikiamos įvesties absoliučiojo URI dalys kaip įrašas.


## Syntax

```powerquery
Uri.Parts(
    absoluteUri as text
) as record
```


## Details

Pateikiamos įvesties <code>absoluteUri</code> dalys kaip įrašas, kuriame yra reikšmės, pvz., Scheme, Host, Port, Path, Query, Fragment, UserName ir Password.


## Examples

### Example #1 
Raskite absoliutaus URI „www.adventure-works.com“ dalis.
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
Iškoduoti eilutę, užkoduotą procento simboliais.
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
