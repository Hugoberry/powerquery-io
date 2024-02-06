---
title: List.Distinct
---

# List.Distinct


Returnerer en liste over værdier, hvor dublerede værdier er fjernet.


## Syntax

```powerquery
List.Distinct(
    list as list,
    optional equationCriteria as any
) as list
```


## Remarks

Returnerer en liste, som indeholder alle værdier på listen <code>list</code>, hvor dublerede værdier er fjernet. Hvis listen er tom, er resultatet en tom liste.


## Examples

### Example #1 
Fjern de dublerede værdier fra listen \{1, 1, 2, 3, 3, 3}.
```powerquery
List.Distinct({1, 1, 2, 3, 3, 3})
```

Result: 
```powerquery
{1, 2, 3}
```




## Category
List.Selection
