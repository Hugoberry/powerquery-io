---
title: Uri.BuildQueryString
---

# Uri.BuildQueryString


## Description

將記錄組合至 URI 查詢字串中。


## Syntax

```powerquery
Uri.BuildQueryString(
    query as record
) as text
```


## Details

將記錄 <code>query</code> 組合至 URI 查詢字串中，依需要逸出字元。


## Examples

### Example #1 
將包含某些特殊字元的查詢字串編碼。
```powerquery
Uri.BuildQueryString([a = "1", b = "+$"])
```

Result: 
```powerquery
"a=1&b=%2B%24"
```




## Category
Uri
