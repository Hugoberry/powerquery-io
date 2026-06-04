---
title: AdoDotNet.DataSource
---

# AdoDotNet.DataSource


Vráti kolekciu schémy pre zdroj údajov ADO.NET.


## Syntax

```powerquery
AdoDotNet.DataSource(
    providerName as text,
    connectionString as any,
    optional options as record
) as table
```


## Remarks

Vráti kolekciu schémy pre zdroj údajov ADO.NET s názvom poskytovateľa `providerName` a reťazcom pripojenia `connectionString`. `connectionString` môže byť text alebo záznam párov hodnôt vlastností. Hodnoty vlastností môžu byť číselné alebo textové. Na určenie ďalších vlastností možno zadať voliteľný parameter záznamu `options`. Záznam môže obsahovať nasledujúce polia:

-   `CommandTimeout` : Trvanie, ktoré určuje, ako dlho smie byť spustený dotaz na strane servera pred zrušením dotazu. Predvolená hodnota je desať minút.
-   `SqlCompatibleWindowsAuth` : Logická hodnota (true/false), ktorá určuje, či sa pre overovanie Windowsom majú vygenerovať možnosti reťazca pripojenia kompatibilné s SQL Serverom. Predvolená hodnota je true.
-   `TypeMap`



## Category
Accessing data
