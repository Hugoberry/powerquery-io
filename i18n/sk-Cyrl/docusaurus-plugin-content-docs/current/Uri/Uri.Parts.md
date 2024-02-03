---
title: Uri.Parts
---

# Uri.Parts


## Description

Vráti časti vstupného absolútneho identifikátora URI ako záznam.


## Syntax

```powerquery
Uri.Parts(
    absoluteUri as text
) as record
```


## Details

Vráti časti vstupu <code>absoluteUri</code> ako záznam, pričom bude obsahovať hodnoty ako Scheme, Host, Port, Path, Query, Fragment, UserName a Password.


## Examples

### Example #1 
Nájdite časti vstupného absolútneho identifikátora URI &#34;www.adventure-works.com&#34;.
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
Dekódovať percentovo kódovaný reťazec.
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
