---
title: Uri.BuildQueryString
---

# Uri.BuildQueryString


Oversæt en post til en URI-forespørgselsstreng.


## Syntax

```powerquery
Uri.BuildQueryString(
    query as record
) as text
```


## Remarks

Oversæt posten <code>query</code> til en URI-forespørgselsstreng, og angiv escapetegn efter behov.


## Examples

### Example #1 
Kod en forespørgselsstreng, der indeholder specialtegn.
```powerquery
Uri.BuildQueryString([a = "1", b = "+$"])
```

Result: 
```powerquery
"a=1&b=%2B%24"
```




## Category
Uri
