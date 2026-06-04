---
title: Type.IsOpenRecord
---

# Type.IsOpenRecord


Returnează dacă un tip de înregistrare este deschis.


## Syntax

```powerquery
Type.IsOpenRecord(
    type as type
) as logical
```


## Remarks

Returnează o valoare `logică` indicând dacă o înregistrare `type` este deschisă.


## Examples

### Example #1
Determinați dacă înregistrarea de `type [ A = number, ...]` este deschisă.
```powerquery
Type.IsOpenRecord(type [A = number, ...])
```

Result: 
```powerquery
true
```




## Category
Type
