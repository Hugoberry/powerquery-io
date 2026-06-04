---
title: Uri.Parts
---

# Uri.Parts


Retorna les parts de l'URI absolut d'entrada com a registre.


## Syntax

```powerquery
Uri.Parts(
    absoluteUri as text
) as record
```


## Remarks

Retorna les parts de l'`absoluteUri` d'entrada com a registre, que conté valors com ara Scheme, Host, Port, Path, Query, Fragment, UserName i Password.


## Examples

### Example #1
Troba les parts de l'URI absolut "www.adventure-works.com".
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
Descodifiqueu una cadena amb codificació de percentatge.
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
