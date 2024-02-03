---
title: Uri.BuildQueryString
---

# Uri.BuildQueryString


## Description

Жазбаны URI сұрау жолына біріктіру.


## Syntax

```powerquery
Uri.BuildQueryString(
    query as record
) as text
```


## Details

Қажетінше таңбаларды пайдаланбай отырып, <code>query</code> жазабсын URI сұрау жолына біріктіру.


## Examples

### Example #1 
Арнайы таңбалары бар сұрау жолын кодтау.
```powerquery
Uri.BuildQueryString([a = "1", b = "+$"])
```

Result: 
```powerquery
"a=1&b=%2B%24"
```




## Category
Uri
