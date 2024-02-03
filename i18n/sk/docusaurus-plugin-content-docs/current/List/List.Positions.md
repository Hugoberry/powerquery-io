---
title: List.Positions
---

# List.Positions


## Description

Vráti zoznam posunov pre vstup.


## Syntax

```powerquery
List.Positions(
    list as list
) as list
```


## Details

Vráti zoznam posunov pre vstupný zoznam <code>list</code>.    Pri použití parametra List.Transform na zmenu zoznamu možno použiť zoznam pozícií s cieľom poskytnúť funkcii transformácie prístup k príslušnej pozícii.


## Examples

### Example #1 
Nájdite posuny hodnôt v zozname \{1, 2, 3, 4, null, 5}.
```powerquery
List.Positions({1, 2, 3, 4, null, 5})
```

Result: 
```powerquery
{0, 1, 2, 3, 4, 5}
```




## Category
List.Selection
