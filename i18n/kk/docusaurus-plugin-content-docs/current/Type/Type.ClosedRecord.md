---
title: Type.ClosedRecord
---

# Type.ClosedRecord


## Description

Берілген жазба түрінің жабық нұсқасын (бұрын жабылған болса, сол түрін) береді.


## Syntax

```powerquery
Type.ClosedRecord(
    type as type
) as type
```


## Details

Берілген <code>type</code> <code>жазбасының</code> жабық нұсқасын (бұрын жабылған болса, сол түрін) береді.


## Examples

### Example #1 
&lt;code&gt;type [ A = number,…]&lt;/code&gt; жабық нұсқасын жасаңыз.
```powerquery
Type.ClosedRecord(type [A = number, ...])
```

Result: 
```powerquery
type [A = number]
```




## Category
Type
