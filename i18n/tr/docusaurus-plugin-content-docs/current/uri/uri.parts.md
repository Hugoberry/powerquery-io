---
title: Uri.Parts
---

# Uri.Parts


Girdi tam URI'sinin bölümlerini kayıt olarak döndürür.


## Syntax

```powerquery
Uri.Parts(
    absoluteUri as text
) as record
```


## Remarks

`absoluteUri` girdisinin bölümlerini Scheme, Host, Port, Path, Query, Fragment, UserName ve Password gibi değerler içeren bir kayıt olarak döndürür.


## Examples

### Example #1
"www.adventure-works.com" tam URI'sinin bölümlerini bulur.
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
Yüzde olarak kodlanmış bir dizeyi çözün.
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
