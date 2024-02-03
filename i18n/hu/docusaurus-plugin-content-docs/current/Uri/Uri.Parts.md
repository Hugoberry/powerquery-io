---
title: Uri.Parts
---

# Uri.Parts


## Description

A bemeneti abszolút URI részeit adja vissza rekordként.


## Syntax

```powerquery
Uri.Parts(
    absoluteUri as text
) as record
```


## Details

A bemeneti <code>absoluteUri</code> részeit adja vissza rekordként, amely egyebek között Scheme, Host, Port, Path, Query, Fragment, UserName és Password értékeket tartalmaz.


## Examples

### Example #1 
A „www.adventure-works.com” abszolút URI részeinek előállítása
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
Egy százalékjellel kódolt sztring dekódolása.
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
