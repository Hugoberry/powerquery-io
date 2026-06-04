---
title: Binary.ViewFunction
---

# Binary.ViewFunction


Vytvorí funkciu, do ktorej môže zasahovať obslužný program definovaný v zobrazení (prostredníctvom funkcie Binary.View).


## Syntax

```powerquery
Binary.ViewFunction(
    function as function
) as function
```


## Remarks

Vytvorí funkciu zobrazenia založenú na `function`, s ktorou možno pracovať v zobrazení vytvorenom pomocou funkcie `Binary.View`.

Na definovanie obslužného programu pre funkciu zobrazenia sa dá použiť obslužný program `OnInvoke` zobrazenia `Binary.View`.

Rovnako ako pri obslužných programoch pre vstavané operácie platí, že ak obslužný program `OnInvoke` nie je zadaný, neobsluhuje danú funkciu zobrazenia alebo zobrazí chybu, cez zobrazenie sa použije `function`.

Úplnejší popis funkcie `Binary.View` a vlastných funkcií zobrazenia nájdete v publikovanej dokumentácii vlastného konektora Power Query.



## Category
Binary
