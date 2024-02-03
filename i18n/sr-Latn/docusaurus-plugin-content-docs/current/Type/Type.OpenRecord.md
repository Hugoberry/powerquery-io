---
title: Type.OpenRecord
---

# Type.OpenRecord


## Description

Vraća otvorenu verziju datog tipa zapisa (ili isti tip ako je već otvoren).


## Syntax

```powerquery
Type.OpenRecord(
    type as type
) as type
```


## Details

Vraća otvorenu verziju za dati <code>record</code> <code>type</code> (ili isti tip ako je već otvoren).


## Examples

### Example #1 
Kreirajte otvorenu verziju za &lt;code&gt;type [ A = number]&lt;/code&gt;.
```powerquery
Type.OpenRecord(type [A = number])
```

Result: 
```powerquery
type [A = number, ...]
```




## Category
Type
