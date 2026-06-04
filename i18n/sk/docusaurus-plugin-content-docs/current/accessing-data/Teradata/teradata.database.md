---
title: Teradata.Database
---

# Teradata.Database


Vráti tabuľku tabuliek a zobrazení SQL z databázy Teradata.


## Syntax

```powerquery
Teradata.Database(
    server as text,
    optional options as record
) as table
```


## Remarks

Vráti tabuľku SQL tabuliek a zobrazení z databázy Teradata na serveri `server`. Port je možné voliteľne zadať spolu so serverom, pričom port musí byť oddelený dvojbodkou. Voliteľný parameter záznamu, `options`, je možné zadať na ovládanie nasledujúcich možností:

-   `CreateNavigationProperties` : Logická hodnota (True/False), ktorá nastavuje, či sa majú generovať vlastnosti navigácie v prípade vrátených hodnôt (predvolená hodnota je True).
-   `NavigationPropertyNameGenerator` : Funkcia, ktorá sa používa na tvorbu názvov vlastností navigácie.
-   `Query` : Natívny dotaz SQL slúžiaci na načítanie údajov. Ak sú výsledkom dotazu viaceré množiny výsledkov, vráti sa iba prvá.
-   `CommandTimeout` : Trvanie, ktoré určuje, ako dlho smie byť spustený dotaz na strane servera pred zrušením dotazu. Predvolená hodnota je desať minút.
-   `ConnectionTimeout` : Trvanie, ktoré určuje, ako dlho sa má čakať pred zanechaním pokusu o pripojenie k serveru. Predvolená hodnota závisí od ovládača.
-   `HierarchicalNavigation` : Logická hodnota (True/False), ktorá nastavuje, či sa majú zobraziť tabuľky zoskupené podľa názvov schémy (predvolená hodnota je False).

Parameter záznamu sa zadáva napríklad ako \[možnosť1 = hodnota1, možnosť2 = hodnota2...\] alebo \[Dotaz = "select ..." \].



## Category
Accessing data
