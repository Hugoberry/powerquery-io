---
title: Value.NativeQuery
---

# Value.NativeQuery


## Description

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


## Details

Vyhodnotí príkaz <code>query</code> v porovnaní s tabuľkou <code>target</code> pomocou parametrov, ktoré sú zadané v <code>parameters</code>, a možností, ktoré sú zadané vo voliteľnom zázname <code>options</code>.<br />Výsledok dotazu definuje tabuľka <code>target</code>.<br />Tabuľka <code>target</code> poskytuje kontext pre operáciu popísanú dotazom <code>query</code>.<br /><code>query</code> popisuje dotaz, ktorý sa má vykonať v tabuľke <code>target</code>. Príkaz <code>query</code> je vyjadrený spôsobom špecifickým pre tabuľku <code>target</code> (napr. príkaz T-SQL).<br />Voliteľná hodnota <code>parameters</code> môže obsahovať zoznam alebo záznam, ktorý poskytne vhodné hodnoty parametrov očakávané v príkaze <code>query</code>.<br />Voliteľný záznam <code>options</code> môže obsahovať možnosti, ktoré ovplyvňujú správanie pri vykonaní príkazu <code>query</code> v tabuľke <code>target</code>. Tieto možnosti sú špecifické pre tabuľku <code>target</code>.<br />



## Category
Values
