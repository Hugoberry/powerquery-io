---
title: Uri.BuildQueryString
---

# Uri.BuildQueryString


Złóż rekord w ciąg zapytania URI.


## Syntax

```powerquery
Uri.BuildQueryString(
    query as record
) as text
```


## Remarks

Złóż rekord <code>query</code> w ciąg zapytania URI, stosując w razie potrzeby znaki ucieczki.


## Examples

### Example #1 
Kodowanie ciągu zapytania zawierającego znaki specjalne.
```powerquery
Uri.BuildQueryString([a = "1", b = "+$"])
```

Result: 
```powerquery
"a=1&b=%2B%24"
```




## Category
Uri
