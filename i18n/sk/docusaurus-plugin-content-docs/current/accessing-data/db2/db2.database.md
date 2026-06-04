---
title: DB2.Database
---

# DB2.Database


Vráti tabuľku tabuliek a zobrazení SQL dostupných v databáze Db2.


## Syntax

```powerquery
DB2.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Remarks

Vráti tabuľku tabuliek a zobrazení SQL dostupných v databáze Db2 na serveri `server` v rámci inštancie databázy s názvom `database`. Port je možné voliteľne zadať spolu so serverom, pričom port musí byť oddelený dvojbodkou. Voliteľný parameter záznamu, `options`, je možné zadať na ovládanie nasledujúcich možností:

-   `CreateNavigationProperties` : Logická hodnota (True/False), ktorá nastavuje, či sa majú generovať vlastnosti navigácie v prípade vrátených hodnôt (predvolená hodnota je True).
-   `NavigationPropertyNameGenerator` : Funkcia, ktorá sa používa na tvorbu názvov vlastností navigácie.
-   `Query` : Natívny dotaz SQL slúžiaci na načítanie údajov. Ak sú výsledkom dotazu viaceré množiny výsledkov, vráti sa iba prvá.
-   `CommandTimeout` : Trvanie, ktoré určuje, ako dlho smie byť spustený dotaz na strane servera pred zrušením dotazu. Predvolená hodnota je desať minút.
-   `ConnectionTimeout` : Trvanie, ktoré určuje, ako dlho sa má čakať pred zanechaním pokusu o pripojenie k serveru. Predvolená hodnota závisí od ovládača.
-   `HierarchicalNavigation` : Logická hodnota (True/False), ktorá nastavuje, či sa majú zobraziť tabuľky zoskupené podľa názvov schémy (predvolená hodnota je False).
-   `Implementation` : Určuje implementáciu interného poskytovateľa databázy, ktorá sa má použiť. Platné hodnoty sú: "IBM" a "Microsoft".
-   `BinaryCodePage` : Číslo identifikátora CCSID (Coded Character Set Identifier) na dekódovanie binárnych údajov Db2 FOR BIT na znakové reťazce. Vzťahuje sa na implementáciu = "Microsoft". Ak chcete zakázať konverziu, nastavte hodnotu 0 (predvolené). Ak chcete vykonať konverziu založenú na kódovaní databázy, nastavte hodnotu 1. Ak chcete vykonať konverziu na kódovanie aplikácie, nastavte iné číslo CCSID.
-   `PackageCollection` : Určuje hodnotu reťazca pre kolekciu balíka (predvolená hodnota je NULLID), ktorá umožňuje používať zdieľané balíky potrebné na spracovanie príkazov SQL. Vzťahuje sa na hodnotu Implementation = "Microsoft".
-   `UseDb2ConnectGateway` : Určuje, či sa pripojenie vykonáva cez bránu Db2 Connect. Vzťahuje sa na hodnotu Implementation = "Microsoft".

Parameter záznamu sa zadáva napríklad ako \[možnosť1 = hodnota1, možnosť2 = hodnota2...\] alebo \[Dotaz = "select ..." \].



## Category
Accessing data
