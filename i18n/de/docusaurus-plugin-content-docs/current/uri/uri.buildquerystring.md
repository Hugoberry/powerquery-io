---
title: Uri.BuildQueryString
---

# Uri.BuildQueryString


Datensatz als URI-Abfragezeichenfolge zusammenstellen.


## Syntax

```powerquery
Uri.BuildQueryString(
    query as record
) as text
```


## Remarks

Stellen Sie den Datensatz '`query`' als URI-Abfragezeichenfolge zusammen, und kommentieren Sie Zeichen dabei wie erforderlich aus.


## Examples

### Example #1
Kodieren einer Abfragezeichenfolge, die Sonderzeichen enthält.
```powerquery
Uri.BuildQueryString([a = "1", b = "+$"])
```

Result: 
```powerquery
"a=1&b=%2B%24"
```




## Category
Uri
