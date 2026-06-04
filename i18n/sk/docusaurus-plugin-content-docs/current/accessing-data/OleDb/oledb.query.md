---
title: OleDb.Query
---

# OleDb.Query


Vráti výsledok spusteného natívneho dotazu v zdroji údajov OLE DB.


## Syntax

```powerquery
OleDb.Query(
    connectionString as any,
    query as text,
    optional options as record
) as table
```


## Remarks

Vráti výsledok spustenia `query` s reťazcom pripojenia `connectionString` pomocou OLE DB. `connectionString` môže byť text alebo záznam párov hodnôt vlastností. Hodnoty vlastností môžu byť číselné alebo textové. Na určenie ďalších vlastností možno zadať voliteľný parameter záznamu `options`. Záznam môže obsahovať nasledujúce polia:

-   `ConnectionTimeout` : Trvanie, ktoré určuje, ako dlho sa má čakať pred zanechaním pokusu o pripojenie k serveru. Predvolená hodnota závisí od ovládača.
-   `CommandTimeout` : Trvanie, ktoré určuje, ako dlho smie byť spustený dotaz na strane servera pred zrušením dotazu. Predvolená hodnota je desať minút.
-   `SqlCompatibleWindowsAuth` : Logická hodnota (true/false), ktorá určuje, či sa pre overovanie Windowsom majú vygenerovať možnosti reťazca pripojenia kompatibilné s SQL Serverom. Predvolená hodnota je true.



## Category
Accessing data
