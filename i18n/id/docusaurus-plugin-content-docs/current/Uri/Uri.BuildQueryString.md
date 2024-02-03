---
title: Uri.BuildQueryString
---

# Uri.BuildQueryString


## Description

Menggabungkan data ke string kueri URI.


## Syntax

```powerquery
Uri.BuildQueryString(
    query as record
) as text
```


## Details

Menggabungkan <code>query</code> data ke string kueri URI, hindari karakter jika perlu.


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
