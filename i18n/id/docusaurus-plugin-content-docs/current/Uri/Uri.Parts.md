---
title: Uri.Parts
---

# Uri.Parts


## Description

Menghasilkan bagian dari URI absolut input sebagai data.


## Syntax

```powerquery
Uri.Parts(
    absoluteUri as text
) as record
```


## Details

Menghasilkan bagian dari input <code>absoluteUri</code> sebagai data, berisi nilai seperti Skema, Host, Port, Jalur, Kueri, Fragmen, Nama Pengguna, dan Sandi.


## Examples

### Example #1 
Mencari bagian dari URI absolut &#34;www.adventure-works.com&#34;.
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
Dekodekan string persen yang dikodekan.
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
