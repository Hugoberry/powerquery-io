---
title: Uri.Parts
---

# Uri.Parts


Retorna as partes do URI absoluto de entrada como um registro.


## Syntax

```powerquery
Uri.Parts(
    absoluteUri as text
) as record
```


## Remarks

Retorna as partes do <code>absoluteUri</code> de entrada como um registro, contendo valores como Scheme, Host, Port, Path, Query, Fragment, UserName e Password.


## Examples

### Example #1 
Localize as partes do URI absoluto &#34;www.adventure-works.com&#34;.
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
Decodificar uma cadeia de caracteres codificada por percentual.
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
