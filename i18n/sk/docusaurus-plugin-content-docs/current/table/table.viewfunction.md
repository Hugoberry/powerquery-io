---
title: Table.ViewFunction
---

# Table.ViewFunction


Vytvorí funkciu, do ktorej môže zasahovať obslužný program definovaný v zobrazení (prostredníctvom funkcie Table.View).


## Syntax

```powerquery
Table.ViewFunction(
    function as function
) as function
```


## Remarks

Vytvorí funkciu zobrazenia založenú na `function`, s ktorou možno pracovať v zobrazení vytvorenom pomocou funkcie `Table.View`.

Na definovanie obslužného programu pre funkciu zobrazenia sa dá použiť obslužný program `OnInvoke` zobrazenia `Table.View`.

Rovnako ako pri obslužných programoch pre vstavané operácie platí, že ak obslužný program `OnInvoke` nie je zadaný, neobsluhuje danú funkciu zobrazenia alebo zobrazí chybu, cez zobrazenie sa použije `function`.

Úplnejší popis funkcie `Table.View` a vlastných funkcií zobrazenia nájdete v publikovanej dokumentácii vlastného konektora Power Query.



## Category
Table.Table construction
