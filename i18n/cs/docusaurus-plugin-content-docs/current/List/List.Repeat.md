---
title: List.Repeat
---

# List.Repeat


## Description

Vrátí seznam obsahující určený počet opakování původního seznamu.


## Syntax

```powerquery
List.Repeat(
    list as list,
    count as number
) as list
```


## Details

Vrátí seznam který obsahuje <code>count</code> opakování původního seznamu <code>list</code>.


## Examples

### Example #1 
Vytvoří seznam, který obsahuje 3 opakování seznamu \{1, 2}.
```powerquery
List.Repeat({1, 2}, 3)
```

Result: 
```powerquery
{1, 2, 1, 2, 1, 2}
```




## Category
List.Transformation functions
