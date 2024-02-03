---
title: List.Numbers
---

# List.Numbers


## Description

Vrátí seznam čísel na základě předané počáteční hodnoty, počtu hodnot a volitelné hodnoty přírůstku.


## Syntax

```powerquery
List.Numbers(
    start as number,
    count as number,
    optional increment as number
) as list
```


## Details

Vrátí seznam čísel na základě předané počáteční hodnoty, počtu hodnot a volitelné hodnoty přírůstku. Výchozí hodnota přírůstku je 1.<ul>   <li><code>start</code>: Počáteční hodnota seznamu.</li>   <li><code>count</code>: Počet hodnot, které mají být vytvořeny.</li>   <li><code>increment</code>: <i>[Volitelné]</i> Hodnota přírůstku. Pokud je tato hodnota vynechána, hodnoty narůstají o hodnotu 1.</li></ul>


## Examples

### Example #1 
Vygeneruje seznam 10 po sobě jdoucích čísel začínající hodnotou 1.
```powerquery
List.Numbers(1, 10)
```

Result: 
```powerquery
{
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10
}
```


### Example #2 
Vygeneruje seznam 10 čísel začínající číslem 1. Každé další číslo v seznamu je o 2 vyšší než předchozí.
```powerquery
List.Numbers(1, 10, 2)
```

Result: 
```powerquery
{
    1,
    3,
    5,
    7,
    9,
    11,
    13,
    15,
    17,
    19
}
```




## Category
List.Generators
