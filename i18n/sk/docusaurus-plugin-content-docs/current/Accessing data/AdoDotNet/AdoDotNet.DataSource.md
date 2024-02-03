---
title: AdoDotNet.DataSource
---

# AdoDotNet.DataSource


## Description

Vráti kolekciu schémy pre zdroj údajov ADO.NET.


## Syntax

```powerquery
AdoDotNet.DataSource(
    providerName as text,
    connectionString as any,
    optional options as record
) as table
```


## Details

Vráti kolekciu schémy pre zdroj údajov ADO.NET s názvom poskytovateľa <code>providerName</code> a reťazcom pripojenia <code>connectionString</code>. <code>connectionString</code> môže byť text alebo záznam párov hodnôt vlastností. Hodnoty vlastností môžu byť číselné alebo textové. Na určenie ďalších vlastností možno zadať voliteľný parameter záznamu <code>options</code>. Záznam môže obsahovať nasledujúce polia:    <ul><li><code>CommandTimeout</code> : Trvanie, ktor&#233; určuje, ako dlho smie byť spusten&#253; dotaz na strane servera pred zrušen&#237;m dotazu. Predvolen&#225; hodnota je desať min&#250;t.</li><li><code>SqlCompatibleWindowsAuth</code> : Logick&#225; hodnota (true/false), ktor&#225; určuje, či sa pre overovanie Windowsom maj&#250; vygenerovať možnosti reťazca pripojenia kompatibiln&#233; s SQL Serverom. Predvolen&#225; hodnota je true.</li><li><code>TypeMap</code></li></ul>



## Category
Accessing data
