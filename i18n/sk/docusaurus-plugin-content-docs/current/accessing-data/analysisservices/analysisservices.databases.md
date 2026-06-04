---
title: AnalysisServices.Databases
---

# AnalysisServices.Databases


Vráti databázy služieb Analysis Services v konkrétnom hostiteľovi.


## Syntax

```powerquery
AnalysisServices.Databases(
    server as text,
    optional options as record
) as table
```


## Remarks

Vráti databázy v inštancii služieb Analysis Services, `server`. Možno poskytnúť voliteľný parameter záznamu, `options`, na zadanie ďalších vlastností. Záznam môže obsahovať tieto polia:

-   `TypedMeasureColumns` : Logická hodnota určujúca, či sa pre typy pridaných stĺpcov s mierkami použijú typy zadané v multidimenzionálnom alebo tabuľkovom modeli. Pri nastavení na hodnotu false sa pre všetky stĺpce s mierkami bude používať typ number. Predvolená hodnota nastavená pre túto možnosť je false.
-   `Culture` : Názov kultúry určujúci kultúru pre údaje. Zodpovedá to vlastnosti reťazca pripojenia Locale Identifier.
-   `CommandTimeout` : Trvanie, ktoré určuje, ako dlho smie byť spustený dotaz na strane servera pred zrušením dotazu. Predvolená hodnota závisí od ovládača.
-   `ConnectionTimeout` : Trvanie, ktoré určuje, ako dlho sa má čakať pred zanechaním pokusu o pripojenie k serveru. Predvolená hodnota závisí od ovládača.
-   `SubQueries` : Číslo (0, 1 alebo 2) určujúce hodnotu vlastnosti SubQueries v reťazci pripojenia. Riadi sa tým správanie vypočítaných členov pri podvýberoch alebo podkockách. (Predvolená hodnota je 2).
-   `Implementation`



## Category
Accessing data
