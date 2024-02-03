---
title: List.PositionOfAny
---

# List.PositionOfAny


## Description

Pateikia pirmąjį sąrašo reikšmės poslinkį.


## Syntax

```powerquery
List.PositionOfAny(
    list as list,
    values as list,
    optional occurrence as Occurrence.Type,
    optional equationCriteria as any
) as any
```


## Details

Pateikia sąrašo <code>values</code> reikšmės pirmojo atvejo poslinkį sąraše <code>list</code>. Jei atvejų nerandama, pateikiama -1.    Galima nurodyti pasirenkamą atvejo parametrą <code>occurrence</code>.<ul>   <li><code>occurrence</code>: maksimalus galimų pateikti atvejų skaičius.</li></ul>


## Examples

### Example #1 
Sąraše \{1, 2, 3} raskite pirmąją padėtį, kurioje rodoma reikšmė 2 arba 3.
```powerquery
List.PositionOfAny({1, 2, 3}, {2, 3})
```

Result: 
```powerquery
1
```




## Category
List.Membership functions
