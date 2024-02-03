---
title: Uri.Parts
---

# Uri.Parts


## Description

입력 절대 URI의 각 부분을 레코드로 반환합니다.


## Syntax

```powerquery
Uri.Parts(
    absoluteUri as text
) as record
```


## Details

입력 <code>absoluteUri</code>의 각 부분을 Scheme, Host, Port, Path, Query, Fragment, UserName 및 Password와 같은 값을 포함하는 레코드로 반환합니다.


## Examples

### Example #1 
절대 URI &#34;www.adventure-works.com&#34;의 각 부분을 찾습니다.
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
백분율로 인코딩된 문자열을 디코딩합니다.
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
