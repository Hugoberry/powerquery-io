---
title: Type.ClosedRecord
---

# Type.ClosedRecord


## Description

Zwraca zamkniętą wersję podanego typu rekordu (lub ten sam typ, jeśli jest już zamknięty).


## Syntax

```powerquery
Type.ClosedRecord(
    type as type
) as type
```


## Details

Zwraca zamkniętą wersję podanego elementu <code>record</code> <code>type</code> (lub ten sam typ, jeśli jest już zamknięty).


## Examples

### Example #1 
Utwórz zamkniętą wersję elementu &lt;code&gt;type [ A = number,…]&lt;/code&gt;.
```powerquery
Type.ClosedRecord(type [A = number, ...])
```

Result: 
```powerquery
type [A = number]
```




## Category
Type
