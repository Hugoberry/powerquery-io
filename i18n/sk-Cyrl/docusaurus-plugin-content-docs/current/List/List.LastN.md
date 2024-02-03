---
title: List.LastN
---

# List.LastN


## Description

Vráti poslednú hodnotu v zozname.  Voliteľne možno stanoviť počet hodnôt, ktoré sa majú vrátiť, alebo oprávňujúcu podmienku.


## Syntax

```powerquery
List.LastN(
    list as list,
    optional countOrCondition as any
) as any
```


## Details

Vráti poslednú položku zoznamu <code>list</code>. Ak je zoznam prázdny, dôjde k výnimke. Táto funkcia použije voliteľný parameter, <code>countOrCondition</code>, na podporu získania viacerých položiek alebo filtrovania položiek. Parameter <code>countOrCondition</code> možno stanoviť tromi spôsobmi: <ul>  <li>Ak je stanovený počet, vráti sa najviac toľko položiek. </li>  <li>Ak je stanovená podmienka, vrátia sa všetky položky, ktoré pôvodne spĺňali podmienku, počnúc od konca zoznamu. Keď niektorá položka nesplní túto podmienku, žiadne ďalšie položky sa nezahrnú. </li>  <li>Ak má tento parameter hodnotu null, vráti sa posledná položka v zozname.</li> </ul>


## Examples

### Example #1 
Nájdite poslednú hodnotu v zozname \{3, 4, 5, -1, 7, 8, 2}.
```powerquery
List.LastN({3, 4, 5, -1, 7, 8, 2}, 1)
```

Result: 
```powerquery
{2}
```


### Example #2 
Nájdite posledné hodnoty v zozname \{3, 4, 5, -1, 7, 8, 2}, ktoré sú väčšie ako 0.
```powerquery
List.LastN({3, 4, 5, -1, 7, 8, 2}, each _ > 0)
```

Result: 
```powerquery
{7, 8, 2}
```




## Category
List.Selection
