---
title: Uri.Parts
---

# Uri.Parts


## Description

Vrátí části absolutního identifikátoru URI vstupu jako záznam.


## Syntax

```powerquery
Uri.Parts(
    absoluteUri as text
) as record
```


## Details

Vrátí části identifikátoru <code>absoluteUri</code> vstupu jako záznam, který obsahuje hodnoty jako například Scheme, Host, Port, Path, Query, Fragment, UserName a Password.


## Examples

### Example #1 
Vrátí části absolutního identifikátoru URI www.adventure-works.com.
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
Dekóduje procentuálně zakódovaný řetězec.
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
