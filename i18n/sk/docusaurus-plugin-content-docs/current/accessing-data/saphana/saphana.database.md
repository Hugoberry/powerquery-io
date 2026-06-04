---
title: SapHana.Database
---

# SapHana.Database


Vráti balíky v databáze SAP HANA.


## Syntax

```powerquery
SapHana.Database(
    server as text,
    optional options as record
) as table
```


## Remarks

Vráti tabuľku viacrozmerných balíkov z databázy SAP HANA `server`. Voliteľný parameter záznamu `options` možno určiť na ovládanie týchto možností:

-   `Query` : Natívny dotaz SQL slúžiaci na načítanie údajov. Ak sú výsledkom dotazu viaceré množiny výsledkov, vráti sa iba prvá.
-   `Distribution` : Možnosť distribúcie pre SAP HANA určujúca hodnotu vlastnosti Distribúcia v reťazci pripojenia. Smerovanie príkazu je metóda určenia správneho serverového uzla distribuovaného systému pred vykonaním príkazu. Predvolená hodnota je SapHanaDistribution.All.
-   `Implementation` : Určuje implementáciu konektora SAP HANA, ktorý sa má používať.
-   `EnableColumnBinding` : Pri načítavaní údajov naviaže premenné na stĺpce množiny výsledkov SAP Hana. Môže potenciálne zlepšiť výkon za cenu mierne vyššieho využitia pamäte. Predvolená hodnota je false.
-   `ConnectionTimeout` : Trvanie, ktoré určuje, ako dlho sa má čakať pred zanechaním pokusu o pripojenie k serveru. Predvolená hodnota je 15 sekúnd.
-   `CommandTimeout` : Trvanie, ktoré určuje, ako dlho smie byť spustený dotaz na strane servera pred zrušením dotazu. Predvolená hodnota je desať minút.



## Category
Accessing data
