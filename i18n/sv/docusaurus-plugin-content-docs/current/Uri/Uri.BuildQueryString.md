---
title: Uri.BuildQueryString
---

# Uri.BuildQueryString


## Description

Assemblera en post till en URI-frågesträng.


## Syntax

```powerquery
Uri.BuildQueryString(
    query as record
) as text
```


## Details

Assemblera posten <code>query</code> till en URI-frågesträng, med undantagstecken vid behov.


## Examples

### Example #1 
Koda en frågesträng som innehåller specialtecken.
```powerquery
Uri.BuildQueryString([a = "1", b = "+$"])
```

Result: 
```powerquery
"a=1&b=%2B%24"
```




## Category
Uri
