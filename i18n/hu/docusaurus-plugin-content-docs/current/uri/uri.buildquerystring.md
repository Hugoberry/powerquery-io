---
title: Uri.BuildQueryString
---

# Uri.BuildQueryString


Rekord lefordítása URI-lekérdezési sztringgé.


## Syntax

```powerquery
Uri.BuildQueryString(
    query as record
) as text
```


## Remarks

A(z) `query` rekord lefordítása URI-lekérdezési sztringgé az escape-karakterek szükség szerinti figyelmen kívül hagyásával.


## Examples

### Example #1
Különleges karaktereket is tartalmazó lekérdezési sztring kódolása.
```powerquery
Uri.BuildQueryString([a = "1", b = "+$"])
```

Result: 
```powerquery
"a=1&b=%2B%24"
```




## Category
Uri
