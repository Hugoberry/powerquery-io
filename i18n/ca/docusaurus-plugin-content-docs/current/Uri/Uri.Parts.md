---
title: Uri.Parts
---

# Uri.Parts


## Description

Retorna les parts de l&#39;URI absolut d&#39;entrada com a registre.


## Syntax

```powerquery
Uri.Parts(
    absoluteUri as text
) as record
```


## Details

Retorna les parts de l'<code>absoluteUri</code> d'entrada com a registre, que conté valors com ara Scheme, Host, Port, Path, Query, Fragment, UserName i Password.


## Examples

### Example #1 
Troba les parts de l&#39;URI absolut &#34;www.adventure-works.com&#34;.
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
