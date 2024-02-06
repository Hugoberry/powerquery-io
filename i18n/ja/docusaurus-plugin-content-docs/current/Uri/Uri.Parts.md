---
title: Uri.Parts
---

# Uri.Parts


レコードとして入力絶対 URI の一部を返します。


## Syntax

```powerquery
Uri.Parts(
    absoluteUri as text
) as record
```


## Remarks

Scheme、Host、Port、Path、Query、Fragment、UserName、Password などの値を含むレコードとして入力 <code>absoluteUri</code> の一部を返します。


## Examples

### Example #1 
絶対 URI &#34;www.adventure-works.com&#34; の一部を検索します。
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
パーセント エンコードされた文字列をデコードします。
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
