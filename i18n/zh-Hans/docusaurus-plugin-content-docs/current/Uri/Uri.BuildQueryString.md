---
title: Uri.BuildQueryString
---

# Uri.BuildQueryString


将记录汇编入 URI 查询字符串。


## Syntax

```powerquery
Uri.BuildQueryString(
    query as record
) as text
```


## Remarks

将记录 <code>query</code> 汇编入 URI 查询字符串，根据需要转义字符。


## Examples

### Example #1 
对包含某些特殊字符的查询字符串进行编码。
```powerquery
Uri.BuildQueryString([a = "1", b = "+$"])
```

Result: 
```powerquery
"a=1&b=%2B%24"
```




## Category
Uri
