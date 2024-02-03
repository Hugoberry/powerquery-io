---
title: Type.IsOpenRecord
---

# Type.IsOpenRecord


## Description

Daje odgovor da li je tip zapisa otvoren.


## Syntax

```powerquery
Type.IsOpenRecord(
    type as type
) as logical
```


## Details

Vraća <code>logical</code>, ukazujući na to da li je zapis <code>type</code> otvoren.


## Examples

### Example #1 
Odredite da li je zapis &lt;code&gt;type [ A = number, ...]&lt;/code&gt; otvoren.
```powerquery
Type.IsOpenRecord(type [A = number, ...])
```

Result: 
```powerquery
true
```




## Category
Type
