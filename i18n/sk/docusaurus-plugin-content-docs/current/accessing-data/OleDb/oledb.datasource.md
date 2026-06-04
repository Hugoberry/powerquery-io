---
title: OleDb.DataSource
---

# OleDb.DataSource


Vráti tabuľku SQL tabuliek a zobrazení zo zdroja údajov OLE DB.


## Syntax

```powerquery
OleDb.DataSource(
    connectionString as any,
    optional options as record
) as table
```


## Remarks

Vráti tabuľku SQL tabuliek a zobrazení zo zdroja údajov OLE DB zadaného reťazcom pripojenia `connectionString`. `connectionString` môže byť text alebo záznam párov hodnôt vlastností. Hodnoty vlastností môžu byť číselné alebo textové. Na zadanie ďalších vlastností možno zadať voliteľný parameter záznamu `options`. Záznam môže obsahovať nasledujúce polia:

-   `CreateNavigationProperties` : Logická hodnota (True/False), ktorá nastavuje, či sa majú generovať vlastnosti navigácie v prípade vrátených hodnôt (predvolená hodnota je True).
-   `NavigationPropertyNameGenerator` : Funkcia, ktorá sa používa na tvorbu názvov vlastností navigácie.
-   `Query` : Natívny dotaz SQL slúžiaci na načítanie údajov. Ak sú výsledkom dotazu viaceré množiny výsledkov, vráti sa iba prvá.
-   `HierarchicalNavigation` : Logická hodnota (true/false), ktorá nastavuje, či sa majú zobraziť tabuľky zoskupené podľa názvov schémy (predvolená hodnota je false).
-   `ConnectionTimeout` : Trvanie, ktoré určuje, ako dlho sa má čakať pred zanechaním pokusu o pripojenie k serveru. Predvolená hodnota závisí od ovládača.
-   `CommandTimeout` : Trvanie, ktoré určuje, ako dlho smie byť spustený dotaz na strane servera pred zrušením dotazu. Predvolená hodnota je desať minút.
-   `SqlCompatibleWindowsAuth` : Logická hodnota (true/false), ktorá určuje, či sa pre overovanie Windowsom majú vygenerovať možnosti reťazca pripojenia kompatibilné s SQL Serverom. Predvolená hodnota je true.

Parameter záznamu je zadaný vo forme \[option1 = value1, option2 = value2...\] alebo \[Query = "select ..."\], napríklad.



## Category
Accessing data
