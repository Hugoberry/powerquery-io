---
title: Uri.Parts
---

# Uri.Parts


Palauttaa syötteen absoluuttisen URI-tunnuksen osat tietueena.


## Syntax

```powerquery
Uri.Parts(
    absoluteUri as text
) as record
```


## Remarks

Palauttaa syötteen `absoluteUri` osat tietueena. Sisältää arvoja, kuten Scheme, Host, Port, Path, Query, Fragment, UserName ja Password.


## Examples

### Example #1
Etsi absoluuttisen URI-tunnuksen "www.adventure-works.com" osat.
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
Pura prosenttikoodatun merkkijonon koodaus.
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
