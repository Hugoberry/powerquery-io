---
title: Odbc.DataSource
---

# Odbc.DataSource


Vráti tabuľku SQL tabuliek a zobrazení zo zdroja údajov ODBC.


## Syntax

```powerquery
Odbc.DataSource(
    connectionString as any,
    optional options as record
) as table
```


## Remarks

Vráti tabuľku SQL tabuliek a zobrazení zo zdroja údajov ODBC zadaného reťazcom pripojenia `connectionString`. `connectionString` môže byť text alebo záznam párov hodnôt vlastností. Hodnoty vlastností môžu byť číselné alebo textové. Na určenie ďalších vlastností možno zadať voliteľný parameter záznamu `options`. Záznam môže obsahovať nasledujúce polia:

-   `CreateNavigationProperties` : Logická hodnota (True/False), ktorá nastavuje, či sa majú generovať vlastnosti navigácie v prípade vrátených hodnôt (predvolená hodnota je True).
-   `HierarchicalNavigation` : Logická hodnota (True/False), ktorá nastavuje, či sa majú zobraziť tabuľky zoskupené podľa názvov schémy (predvolená hodnota je False).
-   `ConnectionTimeout` : Trvanie, ktoré určuje, ako dlho sa má čakať pred zanechaním pokusu o pripojenie k serveru. Predvolená hodnota je 15 sekúnd.
-   `CommandTimeout` : Trvanie, ktoré určuje, ako dlho smie byť spustený dotaz na strane servera pred zrušením dotazu. Predvolená hodnota je desať minút.
-   `SqlCompatibleWindowsAuth` : Logická hodnota (true/false), ktorá určuje, či sa pre overovanie Windowsom majú vygenerovať možnosti reťazca pripojenia kompatibilné s SQL Serverom. Predvolená hodnota je true.


## Examples

### Example #1
Vráti tabuľky a zobrazenia SQL zo zadaného reťazca pripojenia.
```powerquery
Odbc.DataSource("dsn=your_dsn")
```

Result: 
```powerquery
table
```




## Category
Accessing data
