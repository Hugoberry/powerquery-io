---
title: List.Select
---

# List.Select


## Description

Returnează o listă de valori care se potrivesc condiţiei.


## Syntax

```powerquery
List.Select(
    list as list,
    selection as function
) as list
```


## Details

Returnează o listă de valori din lista <code>list</code>, care se potrivesc condiţiei de selectare <code>selection</code>.


## Examples

### Example #1 
Găsiţi valorile din lista \{1, -3, 4, 9, -2} care sunt mai mari decât 0.
```powerquery
List.Select({1, -3, 4, 9, -2}, each _ > 0)
```

Result: 
```powerquery
{1, 4, 9}
```




## Category
List.Selection
