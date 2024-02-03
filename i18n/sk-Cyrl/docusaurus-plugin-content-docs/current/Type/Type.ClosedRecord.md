---
title: Type.ClosedRecord
---

# Type.ClosedRecord


## Description

Vráti uzavretú verziu daného typu záznamu (alebo rovnaký typ, ak už je uzavretý).


## Syntax

```powerquery
Type.ClosedRecord(
    type as type
) as type
```


## Details

Vráti uzavretú verziu daného <code>záznamu</code> <code>type</code> (alebo rovnaký typ, ak už je uzavretý).


## Examples

### Example #1 
Vytvor uzavretú verziu &lt;code&gt;typu [ A = číslo,…]&lt;/code&gt;.
```powerquery
Type.ClosedRecord(type [A = number, ...])
```

Result: 
```powerquery
type [A = number]
```




## Category
Type
