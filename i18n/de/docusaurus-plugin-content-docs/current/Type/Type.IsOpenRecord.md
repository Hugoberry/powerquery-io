---
title: Type.IsOpenRecord
---

# Type.IsOpenRecord


## Description

Gibt zurück, ob ein Datensatztyp geöffnet ist.


## Syntax

```powerquery
Type.IsOpenRecord(
    type as type
) as logical
```


## Details

Gibt einen <code>logischen</code> Wert zurück, der angibt, ob ein Datensatz <code>type</code> geöffnet ist.


## Examples

### Example #1 
Bestimmen Sie, ob der Datensatz &lt;code&gt;type [ A = number, ...]&lt;/code&gt; geöffnet ist.
```powerquery
Type.IsOpenRecord(type [A = number, ...])
```

Result: 
```powerquery
true
```




## Category
Type
