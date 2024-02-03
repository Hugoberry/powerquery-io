---
title: Uri.BuildQueryString
---

# Uri.BuildQueryString


## Description

Monte um registro em uma cadeia de caracteres de consulta da URI.


## Syntax

```powerquery
Uri.BuildQueryString(
    query as record
) as text
```


## Details

Monte o registro <code>query</code> em uma cadeia de caracteres de consulta da URI, liberando caracteres conforme necessário.


## Examples

### Example #1 
Codifique uma cadeia de caracteres de consulta que contém alguns caracteres especiais.
```powerquery
Uri.BuildQueryString([a = "1", b = "+$"])
```

Result: 
```powerquery
"a=1&b=%2B%24"
```




## Category
Uri
