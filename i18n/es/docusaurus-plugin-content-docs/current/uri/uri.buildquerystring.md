---
title: Uri.BuildQueryString
---

# Uri.BuildQueryString


Ensamble un registro en una cadena de consulta de URI.


## Syntax

```powerquery
Uri.BuildQueryString(
    query as record
) as text
```


## Remarks

Ensamble el registro <code>query</code> en una cadena de consulta de URI, evitando caracteres según resulte necesario.


## Examples

### Example #1 
Codifique una cadena de consulta que contenga varios caracteres especiales.
```powerquery
Uri.BuildQueryString([a = "1", b = "+$"])
```

Result: 
```powerquery
"a=1&b=%2B%24"
```




## Category
Uri
