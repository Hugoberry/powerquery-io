---
title: Type.ClosedRecord
---

# Type.ClosedRecord


## Description

Vrátí uzavřenou verzi daného typu záznamu (nebo stejného typu, pokud už je uzavřený).


## Syntax

```powerquery
Type.ClosedRecord(
    type as type
) as type
```


## Details

Vrátí uzavřenou verzi daného záznamu (<code>record</code>) <code>type</code> (nebo stejného typu, pokud už je uzavřený).


## Examples

### Example #1 
Vytvoří uzavřenou verzi pro &lt;code&gt;type [ A = number,…]&lt;/code&gt;.
```powerquery
Type.ClosedRecord(type [A = number, ...])
```

Result: 
```powerquery
type [A = number]
```




## Category
Type
