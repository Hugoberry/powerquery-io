---
title: Uri.Parts
---

# Uri.Parts


Returnerer delene i den absolutte URI for input som en post.


## Syntax

```powerquery
Uri.Parts(
    absoluteUri as text
) as record
```


## Remarks

Returnerer delene af <code>absoluteUri</code> for input som en post, der indeholder værdier, f.eks. Scheme, Host, Port, Path, Query, Fragment, UserName og Password.


## Examples

### Example #1 
Find delene i den absolutte URI for input &#34;www.adventure-works.com&#34;.
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
Afkod en procentkodet streng.
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
