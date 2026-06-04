---
title: Type.ClosedRecord
---

# Type.ClosedRecord


Vraća zatvorenu verziju datog tipa zapisa (ili isti tip ako je već zatvoren).


## Syntax

```powerquery
Type.ClosedRecord(
    type as type
) as type
```


## Remarks

Vraća zatvorenu verziju za dati `record` `type` (ili isti tip ako je već zatvoren).


## Examples

### Example #1
Kreirajte zatvorenu verziju za `type [ A = number,...]`.
```powerquery
Type.ClosedRecord(type [A = number, ...])
```

Result: 
```powerquery
type [A = number]
```




## Category
Type
