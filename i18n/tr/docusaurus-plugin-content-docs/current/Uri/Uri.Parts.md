---
title: Uri.Parts
---

# Uri.Parts


## Description

Girdi tam URI&#39;sinin bölümlerini kayıt olarak döndürür.


## Syntax

```powerquery
Uri.Parts(
    absoluteUri as text
) as record
```


## Details

<code>absoluteUri</code> girdisinin bölümlerini Scheme, Host, Port, Path, Query, Fragment, UserName ve Password gibi değerler içeren bir kayıt olarak döndürür.


## Examples

### Example #1 
&#34;www.adventure-works.com&#34; tam URI&#39;sinin bölümlerini bulur.
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
