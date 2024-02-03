---
title: Type.OpenRecord
---

# Type.OpenRecord


## Description

Vráti otvorenú verziu daného typu záznamu (alebo rovnaký typ, ak už je otvorený).


## Syntax

```powerquery
Type.OpenRecord(
    type as type
) as type
```


## Details

Vráti otvorenú verziu daného <code>záznamu</code> <code>type</code> (alebo rovnaký typ, ak už je otvorený).


## Examples

### Example #1 
Vytvor otvorenú verziu &lt;code&gt;typu [ A = číslo]&lt;/code&gt;.
```powerquery
Type.OpenRecord(type [A = number])
```

Result: 
```powerquery
type [A = number, ...]
```




## Category
Type
