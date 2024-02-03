---
title: AdoDotNet.Query
---

# AdoDotNet.Query


## Description

Vráti výsledok spustenia natívneho dotazu na zdroji údajov ADO.NET.


## Syntax

```powerquery
AdoDotNet.Query(
    providerName as text,
    connectionString as any,
    query as text,
    optional options as record
) as table
```


## Details

Vráti výsledok spustenia <code>query</code> s reťazcom pripojenia <code>connectionString</code> s použitím poskytovateľa ADO.NET <code>providerName</code>. <code>connectionString</code> môže byť text alebo záznam párov hodnôt vlastností. Hodnoty vlastností môžu byť textové alebo číselné. Na určenie ďalších vlastností možno zadať voliteľný parameter záznamu <code>options</code>. Záznam môže obsahovať nasledujúce polia:    <ul><li><code>CommandTimeout</code> : Trvanie, ktor&#233; určuje, ako dlho smie byť spusten&#253; dotaz na strane servera pred zrušen&#237;m dotazu. Predvolen&#225; hodnota je desať min&#250;t.</li><li><code>SqlCompatibleWindowsAuth</code> : Logick&#225; hodnota (true/false), ktor&#225; určuje, či sa pre overovanie Windowsom maj&#250; vygenerovať možnosti reťazca pripojenia kompatibiln&#233; s SQL Serverom. Predvolen&#225; hodnota je true.</li></ul>



## Category
Accessing data
