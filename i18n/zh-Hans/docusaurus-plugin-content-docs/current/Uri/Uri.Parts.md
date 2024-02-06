---
title: Uri.Parts
---

# Uri.Parts


返回输入绝对 URI 的组成部分作为记录。


## Syntax

```powerquery
Uri.Parts(
    absoluteUri as text
) as record
```


## Remarks

返回输入 <code>absoluteUri</code> 的组成部分作为记录，包含诸如方案、主机、端口、路径、查询、片段、用户名和密码等此类值。


## Examples

### Example #1 
查找绝对 URI &#34;www.adventure-works.com&#34; 的组成部分。
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
解码百分比编码字符串。
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
