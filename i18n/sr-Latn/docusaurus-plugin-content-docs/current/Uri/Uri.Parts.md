---
title: Uri.Parts
---

# Uri.Parts


## Description

Vraća delove ulaznog apsolutnog URI identifikatora u vidu zapisa.


## Syntax

```powerquery
Uri.Parts(
    absoluteUri as text
) as record
```


## Details

Vraća delove ulaznog <code>absoluteUri</code> u vidu zapisa koji sadrži vrednosti kao što su Scheme, Host, Port, Path, Query, Fragment, UserName i Password.


## Examples

### Example #1 
Pronalaženje delova apsolutnog URI identifikatora „www.adventure-works.com“.
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
Dekodirajte procentualno kodiranu nisku.
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
