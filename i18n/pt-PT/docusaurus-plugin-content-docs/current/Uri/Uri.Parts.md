---
title: Uri.Parts
---

# Uri.Parts


## Description

Devolve os componentes do URI absoluto de entrada como um registo.


## Syntax

```powerquery
Uri.Parts(
    absoluteUri as text
) as record
```


## Details

Devolve os componentes do <code>absoluteUri</code> de entrada como um registo, contendo valores como Scheme, Host, Port, Path, Query, Fragment, UserName e Password.


## Examples

### Example #1 
Identificar os componentes do URI absoluto &#34;www.adventure-works.com&#34;.
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
Descodificar uma cadeia codificada de percentagem.
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
