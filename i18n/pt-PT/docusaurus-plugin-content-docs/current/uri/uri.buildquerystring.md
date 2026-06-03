---
title: Uri.BuildQueryString
---

# Uri.BuildQueryString


Monte um registo numa cadeia de consulta URI.


## Syntax

```powerquery
Uri.BuildQueryString(
    query as record
) as text
```


## Remarks

Monte o registo `query` numa cadeia de consulta URI, efetuando escape dos carateres conforme necessário.


## Examples

### Example #1
Codifique uma cadeia de consulta com alguns carateres especiais.
```powerquery
Uri.BuildQueryString([a = "1", b = "+$"])
```

Result: 
```powerquery
"a=1&b=%2B%24"
```




## Category
Uri
