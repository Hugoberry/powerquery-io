---
title: Uri.BuildQueryString
---

# Uri.BuildQueryString


## Description

Bir kaydı bir URI sorgu dizesinde derleyin.


## Syntax

```powerquery
Uri.BuildQueryString(
    query as record
) as text
```


## Details

<code>query</code> kaydını bir URI sorgu dizesinde derleyin ve gerekirse karakterleri atlayın.


## Examples

### Example #1 
Özel karakterler içeren bir sorgu dizesini kodlayın.
```powerquery
Uri.BuildQueryString([a = "1", b = "+$"])
```

Result: 
```powerquery
"a=1&b=%2B%24"
```




## Category
Uri
