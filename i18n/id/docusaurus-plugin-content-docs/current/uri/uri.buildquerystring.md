---
title: Uri.BuildQueryString
---

# Uri.BuildQueryString


Menggabungkan data ke string kueri URI.


## Syntax

```powerquery
Uri.BuildQueryString(
    query as record
) as text
```


## Remarks

Menggabungkan `query` data ke string kueri URI, hindari karakter jika perlu.


## Examples

### Example #1
Enkode string kueri yang berisi beberapa karakter khusus.
```powerquery
Uri.BuildQueryString([a = "1", b = "+$"])
```

Result: 
```powerquery
"a=1&b=%2B%24"
```




## Category
Uri
