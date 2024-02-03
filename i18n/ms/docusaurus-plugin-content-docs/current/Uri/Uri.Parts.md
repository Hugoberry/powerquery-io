---
title: Uri.Parts
---

# Uri.Parts


## Description

Mengembalikan bahagian URI mutlak input sebagai rekod.


## Syntax

```powerquery
Uri.Parts(
    absoluteUri as text
) as record
```


## Details

Mengembalikan bahagian input <code>absoluteUri</code> sebagai rekod, yang mengandungi nilai seperti Skim, Hos, Port, Laluan, Pertanyaan, Pecahan, Nama Pengguna dan Kata Laluan.


## Examples

### Example #1 
Cari bahagian URI mutlak &#34;www.adventure-works.com&#34;.
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
Nyahkod rentetan terkod peratus.
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
