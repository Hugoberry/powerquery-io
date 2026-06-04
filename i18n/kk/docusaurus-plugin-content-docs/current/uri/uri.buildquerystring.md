---
title: Uri.BuildQueryString
---

# Uri.BuildQueryString


Жазбаны URI сұрау жолына біріктіру.


## Syntax

```powerquery
Uri.BuildQueryString(
    query as record
) as text
```


## Remarks

Қажетінше таңбаларды пайдаланбай отырып, `query` жазабсын URI сұрау жолына біріктіру.


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
