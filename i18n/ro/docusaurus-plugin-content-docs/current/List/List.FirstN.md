---
title: List.FirstN
---

# List.FirstN


## Description

Returnează primul set de elemente din listă specificând numărul de elemente de returnat sau o condiţie de calificare.


## Syntax

```powerquery
List.FirstN(
    list as list,
    countOrCondition as any
) as any
```


## Details

 <ul>  <li>Dacă se specifică un număr, se returnează maximum numărul de elemente respectiv. </li>  <li>Dacă se specifică o condiție, sunt returnate toate elementele care îndeplinesc inițial condiția. Odată ce un element nu îndeplinește condiția, nu mai sunt luate în considerare elementele ulterioare. </li> </ul>


## Examples

### Example #1 
Găsiţi valorile iniţiale din lista \{3, 4, 5, -1, 7, 8, 2} care sunt mai mari decât 0.
```powerquery
List.FirstN({3, 4, 5, -1, 7, 8, 2}, each _ > 0)
```

Result: 
```powerquery
{3, 4, 5}
```




## Category
List.Selection
