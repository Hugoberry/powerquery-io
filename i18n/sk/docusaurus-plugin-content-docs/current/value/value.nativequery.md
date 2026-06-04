---
title: Value.NativeQuery
---

# Value.NativeQuery


Vyhodnotí dotaz v porovnaní s cieľom.


## Syntax

```powerquery
Value.NativeQuery(
    target as any,
    query as text,
    optional parameters as any,
    optional options as record
) as any
```


## Remarks

Vyhodnotí príkaz `query` v porovnaní s tabuľkou `target` pomocou parametrov, ktoré sú zadané v `parameters`, a možností, ktoré sú zadané vo voliteľnom zázname `options`.

Výsledok dotazu definuje tabuľka `target`.

Tabuľka `target` poskytuje kontext pre operáciu popísanú dotazom `query`.

`query` popisuje dotaz, ktorý sa má vykonať v tabuľke `target`. Príkaz `query` je vyjadrený spôsobom špecifickým pre tabuľku `target` (napr. príkaz T-SQL).

Voliteľná hodnota `parameters` môže obsahovať zoznam alebo záznam, ktorý poskytne vhodné hodnoty parametrov očakávané v príkaze `query`.

Voliteľný záznam `options` môže obsahovať možnosti, ktoré ovplyvňujú správanie pri vykonaní príkazu `query` v tabuľke `target`. Tieto možnosti sú špecifické pre tabuľku `target`.



## Category
Values
