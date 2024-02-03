---
title: Type.ClosedRecord
---

# Type.ClosedRecord


## Description

Restituisce una versione chiusa del tipo di record specificato (o dello stesso tipo, se è già chiuso).


## Syntax

```powerquery
Type.ClosedRecord(
    type as type
) as type
```


## Details

Restituisce una versione chiusa del tipo di <code>record</code> <code>type</code> specificato (o dello stesso tipo, se è già chiuso).


## Examples

### Example #1 
Creare una versione chiusa di &lt;code&gt;type [ A = number,…]&lt;/code&gt;.
```powerquery
Type.ClosedRecord(type [A = number, ...])
```

Result: 
```powerquery
type [A = number]
```




## Category
Type
