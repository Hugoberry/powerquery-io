---
title: List.FirstN
---

# List.FirstN


## Description

Vrátí první sadu položek v seznamu na základě určení počtu položek k vrácení nebo kvalifikující podmínky.


## Syntax

```powerquery
List.FirstN(
    list as list,
    countOrCondition as any
) as any
```


## Details

 <ul>  <li>Pokud je zadané číslo, vrátí sadu položek obsahující maximálně tolik položek, kolik určuje toto číslo. </li>  <li>Pokud je zadaná podmínka, vrátí všechny položky, které podmínku splňují. Pokud jakákoliv položka podmínku nesplňuje, už se další položky po této položce nezpracují. </li> </ul>


## Examples

### Example #1 
Vyhledá v seznamu \{3, 4, 5, -1, 7, 8, 2} výchozí hodnoty, které jsou větší než 0.
```powerquery
List.FirstN({3, 4, 5, -1, 7, 8, 2}, each _ > 0)
```

Result: 
```powerquery
{3, 4, 5}
```




## Category
List.Selection
