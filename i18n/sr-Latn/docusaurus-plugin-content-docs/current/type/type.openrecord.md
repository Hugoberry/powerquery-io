---
title: Type.OpenRecord
---

# Type.OpenRecord


Vraća otvorenu verziju datog tipa zapisa (ili isti tip ako je već otvoren).


## Syntax

```powerquery
Type.OpenRecord(
    type as type
) as type
```


## Remarks

Vraća otvorenu verziju za dati `record` `type` (ili isti tip ako je već otvoren).


## Examples

### Example #1
Kreirajte otvorenu verziju za `type [ A = number]`.
```powerquery
Type.OpenRecord(type [A = number])
```

Result: 
```powerquery
type [A = number, ...]
```




## Category
Type
