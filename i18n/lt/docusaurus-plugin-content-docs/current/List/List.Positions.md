---
title: List.Positions
---

# List.Positions


## Description

Pateikiamas įvesties poslinkių sąrašas.


## Syntax

```powerquery
List.Positions(
    list as list
) as list
```


## Details

Pateikiamas įvesties sąrašo <code>list</code> poslinkių sąrašas.    Naudojant List.Transform norint pakeisti sąrašą, galima naudoti padėčių sąrašą, kad padėčiai būtų suteikta transformavimo prieiga.


## Examples

### Example #1 
Raskite reikšmių poslinkius sąraše \{1, 2, 3, 4, null, 5}.
```powerquery
List.Positions({1, 2, 3, 4, null, 5})
```

Result: 
```powerquery
{0, 1, 2, 3, 4, 5}
```




## Category
List.Selection
