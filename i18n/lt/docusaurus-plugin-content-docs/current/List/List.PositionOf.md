---
title: List.PositionOf
---

# List.PositionOf


## Description

Pateikia sąrašo reikšmės poslinkį (-ius).


## Syntax

```powerquery
List.PositionOf(
    list as list,
    value as any,
    optional occurrence as Occurrence.Type,
    optional equationCriteria as any
) as any
```


## Details

Pateikiamas poslinkis, kuriuo reikšmė <code>value</code> rodoma sąraše <code>list</code>. Jei reikšmė nerodoma, pateikiama -1.    Galima nurodyti pasirenkamą atvejo parametrą <code>occurrence</code>.<ul>   <li><code>occurrence</code>: maksimalus skaičius atvejų, kurie bus pateikiami.</li></ul>


## Examples

### Example #1 
Sąraše \{1, 2, 3} raskite padėtį, kurioje rodoma reikšmė 3.
```powerquery
List.PositionOf({1, 2, 3}, 3)
```

Result: 
```powerquery
2
```




## Category
List.Membership functions
