---
title: Type.OpenRecord
---

# Type.OpenRecord


## Description

Vrátí otevřenou verzi daného typu záznamu (nebo stejného typu, pokud už je otevřený).


## Syntax

```powerquery
Type.OpenRecord(
    type as type
) as type
```


## Details

Vrátí otevřenou verzi daného záznamu (<code>record</code>) <code>type</code> (nebo stejného typu, pokud už je otevřený).


## Examples

### Example #1 
Vytvoří otevřenou verzi pro &lt;code&gt;type [ A = number,…]&lt;/code&gt;.
```powerquery
Type.OpenRecord(type [A = number])
```

Result: 
```powerquery
type [A = number, ...]
```




## Category
Type
