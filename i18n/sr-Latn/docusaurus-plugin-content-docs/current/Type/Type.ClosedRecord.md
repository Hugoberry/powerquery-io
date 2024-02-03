---
title: Type.ClosedRecord
---

# Type.ClosedRecord


## Description

Vraća zatvorenu verziju datog tipa zapisa (ili isti tip ako je već zatvoren).


## Syntax

```powerquery
Type.ClosedRecord(
    type as type
) as type
```


## Details

Vraća zatvorenu verziju za dati <code>record</code> <code>type</code> (ili isti tip ako je već zatvoren).


## Examples

### Example #1 
Kreirajte zatvorenu verziju za &lt;code&gt;type [ A = number,…]&lt;/code&gt;.
```powerquery
Type.ClosedRecord(type [A = number, ...])
```

Result: 
```powerquery
type [A = number]
```




## Category
Type
