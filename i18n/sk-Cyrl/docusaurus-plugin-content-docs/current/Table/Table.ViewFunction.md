---
title: Table.ViewFunction
---

# Table.ViewFunction


## Description

Vytvorí funkciu, do ktorej môže zasahovať obslužný program definovaný v zobrazení (prostredníctvom funkcie Table.View).


## Syntax

```powerquery
Table.ViewFunction(
    function as function
) as function
```


## Details

Vytvorí funkciu zobrazenia založenú na <code>function</code>, s ktorou možno pracovať v zobrazení vytvorenom pomocou funkcie <code>Table.View</code>.<br />Na definovanie obslužného programu pre funkciu zobrazenia sa dá použiť obslužný program <code>OnInvoke</code> zobrazenia <code>Table.View</code>.<br />Rovnako ako pri obslužných programoch pre vstavané operácie platí, že ak obslužný program <code>OnInvoke</code> nie je zadaný, neobsluhuje danú funkciu zobrazenia alebo zobrazí chybu, cez zobrazenie sa použije <code>function</code>.<br />Úplnejší popis funkcie <code>Table.View</code> a vlastných funkcií zobrazenia nájdete v publikovanej dokumentácii vlastného konektora Power Query.<br />



## Category
Table.Table construction
