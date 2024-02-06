---
title: Uri.Parts
---

# Uri.Parts


將輸入絕對 URI 的各部分傳回成記錄。


## Syntax

```powerquery
Uri.Parts(
    absoluteUri as text
) as record
```


## Remarks

將輸入 <code>absoluteUri</code> 的各部分傳回成記錄，包含 Scheme、Host、Port、Path、Query、Fragment、UserName 和 Password 等值。


## Examples

### Example #1 
尋找絕對 URI &#34;www.adventure-works.com&#34; 的各部分。
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
將百分比編碼字串解碼。
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
