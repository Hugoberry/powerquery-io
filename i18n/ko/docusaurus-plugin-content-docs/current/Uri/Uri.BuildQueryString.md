---
title: Uri.BuildQueryString
---

# Uri.BuildQueryString


## Description

레코드를 URI 쿼리 문자열로 어셈블합니다.


## Syntax

```powerquery
Uri.BuildQueryString(
    query as record
) as text
```


## Details

<code>query</code> 레코드를 URI 쿼리 문자열로 어셈블하고, 필요에 따라 문자를 이스케이프합니다.


## Examples

### Example #1 
특수 문자를 포함한 쿼리 문자열을 인코딩합니다.
```powerquery
Uri.BuildQueryString([a = "1", b = "+$"])
```

Result: 
```powerquery
"a=1&b=%2B%24"
```




## Category
Uri
