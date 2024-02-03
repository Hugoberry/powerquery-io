---
title: Uri.Parts
---

# Uri.Parts


## Description

Trả về các phần của URI đầu vào tuyệt đối ở dạng bản ghi.


## Syntax

```powerquery
Uri.Parts(
    absoluteUri as text
) as record
```


## Details

Trả về các phần của <code>absoluteUri</code> đầu vào ở dạng bản ghi, chứa các giá trị như Scheme, Host, Port, Path, Query, Fragment, UserName và Password.


## Examples

### Example #1 
Tìm các phần của URI tuyệt đối &#34;www.adventure-works.com&#34;.
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
Giải mã chuỗi đuợc mã hóa bằng phần trăm.
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
