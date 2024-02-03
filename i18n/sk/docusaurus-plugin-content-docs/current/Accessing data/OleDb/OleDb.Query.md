---
title: OleDb.Query
---

# OleDb.Query


## Description

Vráti výsledok spusteného natívneho dotazu v zdroji údajov OLE DB.


## Syntax

```powerquery
OleDb.Query(
    connectionString as any,
    query as text,
    optional options as record
) as table
```


## Details

Vráti výsledok spustenia <code>query</code> s reťazcom pripojenia <code>connectionString</code> pomocou OLE DB. <code>connectionString</code> môže byť text alebo záznam párov hodnôt vlastností. Hodnoty vlastností môžu byť číselné alebo textové. Na určenie ďalších vlastností možno zadať voliteľný parameter záznamu <code>options</code>. Záznam môže obsahovať nasledujúce polia:    <ul><li><code>ConnectionTimeout</code> : Trvanie, ktor&#233; určuje, ako dlho sa m&#225; čakať pred zanechan&#237;m pokusu o pripojenie k serveru. Predvolen&#225; hodnota z&#225;vis&#237; od ovl&#225;dača.</li><li><code>CommandTimeout</code> : Trvanie, ktor&#233; určuje, ako dlho smie byť spusten&#253; dotaz na strane servera pred zrušen&#237;m dotazu. Predvolen&#225; hodnota je desať min&#250;t.</li><li><code>SqlCompatibleWindowsAuth</code> : Logick&#225; hodnota (true/false), ktor&#225; určuje, či sa pre overovanie Windowsom maj&#250; vygenerovať možnosti reťazca pripojenia kompatibiln&#233; s SQL Serverom. Predvolen&#225; hodnota je true.</li></ul>



## Category
Accessing data