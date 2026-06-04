---
title: AdoDotNet.Query
---

# AdoDotNet.Query


Vrací výsledek spuštění nativního dotazu z datového zdroje ADO.NET.


## Syntax

```powerquery
AdoDotNet.Query(
    providerName as text,
    connectionString as any,
    query as text,
    optional options as record
) as table
```


## Remarks

Vrátí výsledek spuštění `query` s připojovacím řetězcem `connectionString` pomocí zprostředkovatele ADO.NET `providerName`. Řetězec `connectionString` může být text nebo záznam párů hodnot vlastností. Hodnoty vlastností můžou být text nebo čísla. K určení dalších vlastností je možné zadat nepovinný parametr záznamu `options`. Záznam může obsahovat následující pole:

-   `CommandTimeout` : Doba trvání, která řídí, jak dlouho může dotaz být dotaz na straně serveru spuštěný, než se zruší. Výchozí hodnota je 10 minut.
-   `SqlCompatibleWindowsAuth` : Logická hodnota (true/false), která určuje, jestli se mají generovat možnosti připojovacího řetězce pro ověřování systému Windows (kompatibilní se SQL Serverem). Výchozí hodnota je true.



## Category
Accessing data
