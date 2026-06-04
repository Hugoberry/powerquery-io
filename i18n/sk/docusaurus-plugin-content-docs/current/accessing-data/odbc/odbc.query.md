---
title: Odbc.Query
---

# Odbc.Query


Vráti výsledok spusteného natívneho dotazu v zdroji údajov ODBC.


## Syntax

```powerquery
Odbc.Query(
    connectionString as any,
    query as text,
    optional options as record
) as table
```


## Remarks

Vráti výsledok spustenia `query` s reťazcom pripojenia `connectionString` pomocou ODBC. `connectionString` môže byť text alebo záznam párov hodnôt vlastností. Hodnoty vlastností môžu byť číselné alebo textové. Na určenie ďalších vlastností možno zadať voliteľný parameter záznamu `options`. Záznam môže obsahovať nasledujúce polia:

-   `ConnectionTimeout` : Trvanie, ktoré určuje, ako dlho sa má čakať pred zanechaním pokusu o pripojenie k serveru. Predvolená hodnota je 15 sekúnd.
-   `CommandTimeout` : Trvanie, ktoré určuje, ako dlho smie byť spustený dotaz na strane servera pred zrušením dotazu. Predvolená hodnota je desať minút.
-   `SqlCompatibleWindowsAuth` : Logická hodnota (true/false), ktorá určuje, či sa pre overovanie Windowsom majú vygenerovať možnosti reťazca pripojenia kompatibilné s SQL Serverom. Predvolená hodnota je true.


## Examples

### Example #1
Vráti výsledok spustenia jednoduchého dotazu na zadaný reťazec pripojenia.
```powerquery
Odbc.Query("dsn=your_dsn", "select * from Customers")
```

Result: 
```powerquery
table
```




## Category
Accessing data
