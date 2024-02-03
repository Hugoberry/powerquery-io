---
title: Uri.Parts
---

# Uri.Parts


## Description

Devolve as partes do URI de entrada absoluto como un rexistro.


## Syntax

```powerquery
Uri.Parts(
    absoluteUri as text
) as record
```


## Details

Devolve as partes do <code>absoluteUri</code> de entrada como un rexistro, que conteñen valores como Esquema, Computador servidor, Porto, Camiño, Consulta, Fragmento, Nome de usuario e Contrasinal.


## Examples

### Example #1 
Buscar as partes do URI absoluto &#34;www.adventure-works.com&#34;.
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
Descodifica unha cadea parcialmente codificada.
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
