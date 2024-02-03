---
title: Type.OpenRecord
---

# Type.OpenRecord


## Description

Zwraca otwartą wersję podanego typu rekordu (lub ten sam typ, jeśli jest już otwarty).


## Syntax

```powerquery
Type.OpenRecord(
    type as type
) as type
```


## Details

Zwraca otwartą wersję podanego elementu <code>record</code> <code>type</code> (lub ten sam typ, jeśli jest już otwarty).


## Examples

### Example #1 
Utwórz otwartą wersję elementu &lt;code&gt;type [ A = number]&lt;/code&gt;.
```powerquery
Type.OpenRecord(type [A = number])
```

Result: 
```powerquery
type [A = number, ...]
```




## Category
Type
