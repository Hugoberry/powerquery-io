---
title: List.LastN
---

# List.LastN


Vráti zoznam poslednej položky alebo položiek v zadanom zozname. Voliteľne možno stanoviť počet hodnôt, ktoré sa majú vrátiť, alebo oprávňujúcu podmienku.


## Syntax

```powerquery
List.LastN(
    list as list,
    optional countOrCondition as any
) as any
```


## Remarks

Vráti zoznam poslednej položky alebo položiek v zadanom zozname.

-   `list`: Zoznam, ktorý sa má preskúmať. Ak je zoznam prázdny, vráti sa prázdny zoznam.
-   `countOrCondition`: (Voliteľné) Podporuje zber viacerých položiek alebo filtrovanie položiek. Hoci je tento parameter uvedený ako voliteľný, ak táto hodnota nie je zadaná alebo je `null`, dôjde k chybe. Tento parameter možno špecifikovať dvoma spôsobmi:
    -   Ak je uvedené číslo, vráti sa maximálne toľko položiek.
    -   Ak je špecifikovaná podmienka, vrátia sa všetky položky, ktoré spĺňajú túto podmienku, počnúc koncom zoznamu. Akonáhle položka nespĺňa podmienku, ďalšie položky sa už nezohľadňujú.


## Examples

### Example #1
Nájdite poslednú hodnotu v zozname \{3, 4, 5, -1, 7, 8, 2\}.
```powerquery
List.LastN({3, 4, 5, -1, 7, 8, 2}, 1)
```

Result: 
```powerquery
{2}
```


### Example #2
Nájdite posledné hodnoty v zozname \{3, 4, 5, -1, 7, 8, 2\}, ktoré sú väčšie ako 0.
```powerquery
List.LastN({3, 4, 5, -1, 7, 8, 2}, each _ > 0)
```

Result: 
```powerquery
{7, 8, 2}
```




## Category
List.Selection
