---
title: Type.OpenRecord
---

# Type.OpenRecord


## Description

Берілген жазба түрінің ашық нұсқасын (бұрын ашылған болса, сол түрін) береді.


## Syntax

```powerquery
Type.OpenRecord(
    type as type
) as type
```


## Details

Берілген <code>type</code> <code>жазбаының</code> ашық нұсқасын(бұрын ашылған болса, сол түрін) береді.


## Examples

### Example #1 
&lt;code&gt;type [ A = number]&lt;/code&gt; түрінің ашық нұсқасын жасаңыз.
```powerquery
Type.OpenRecord(type [A = number])
```

Result: 
```powerquery
type [A = number, ...]
```




## Category
Type
