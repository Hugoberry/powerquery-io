---
title: List.Distinct
---

# List.Distinct


## Description

Vráti zoznam hodnôt s odstránenými duplikátmi.


## Syntax

```powerquery
List.Distinct(
    list as list,
    optional equationCriteria as any
) as list
```


## Details

Vráti zoznam obsahujúci všetky hodnoty v zozname <code>list</code> s odstránenými duplikátmi. Ak je zoznam prázdny, výsledkom je prázdny zoznam.


## Examples

### Example #1 
Odstráňte duplikáty zo zoznamu \{1, 1, 2, 3, 3, 3}.
```powerquery
List.Distinct({1, 1, 2, 3, 3, 3})
```

Result: 
```powerquery
{1, 2, 3}
```




## Category
List.Selection
