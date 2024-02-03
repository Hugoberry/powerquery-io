---
title: Function.ScalarVector
---

# Function.ScalarVector


## Description

Vytvorí skalárnu funkciu nad vektorovou funkciou, dávkuje viacero vyvolaní.


## Syntax

```powerquery
Function.ScalarVector(
    scalarFunctionType as type,
    vectorFunction as function
) as function
```


## Details

Vráti skalárnu funkciu typu <code>scalarFunctionType</code>, ktorá vyvolá <code>vectorFunction</code> s jedným riadkom argumentov a vráti jeden výstup. Okrem toho, keď sa skalárna funkcia opakovane použije pre každý riadok tabuľky vstupov, ako napríklad Table.AddColumn, namiesto toho sa <code>vectorFunction</code> použije raz pre všetky vstupy. <br /><code>vectorFunction</code> sa odovzdá ako tabuľka, ktorej stĺpce sa zhodujú v názve a v umiestnení parametra v <code>scalarFunctionType</code>. Každý riadok tejto tabuľky obsahuje argumenty pre jedno volanie skalárnej funkcie so stĺpcami zodpovedajúcimi parametrom vo funkcii <code>scalarFunctionType</code>.<br /><code>vectorFunction</code> musí vrátiť zoznam rovnakej dĺžky ako vstupná tabuľka, ktorej položky v každej pozícii musia mať rovnaký výsledok, ako by prinieslo vyhodnotenie skalárnej funkcie na vstupnom riadku v rovnakej pozícii.<br />Očakáva sa, že vstupnú tabuľku dodá stream, takže sa očakáva, že <code>vectorFunction</code> bude streamovať svoj výstup popri tom, ako bude prichádzať vstup. Vždy sa pracuje len s jedným blokom vstupných údajov naraz. <code>vectorFunction</code> hlavne nesmie vykonať enumeráciu vstupnej tabuľky viac než raz.<br />



## Category
Function
