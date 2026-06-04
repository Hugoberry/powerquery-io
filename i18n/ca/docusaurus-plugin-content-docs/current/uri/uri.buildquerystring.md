---
title: Uri.BuildQueryString
---

# Uri.BuildQueryString


Agrupeu un registre dins d'una cadena de consulta de l'URI.


## Syntax

```powerquery
Uri.BuildQueryString(
    query as record
) as text
```


## Remarks

Agrupeu el registre `query` dins d'una cadena de consulta de l'URI, caràcters d'escapada si és necessari.


## Examples

### Example #1
Codifiqueu una cadena de consulta que conté alguns caràcters especials.
```powerquery
Uri.BuildQueryString([a = "1", b = "+$"])
```

Result: 
```powerquery
"a=1&b=%2B%24"
```




## Category
Uri
