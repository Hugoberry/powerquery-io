---
title: AdoDotNet.DataSource
---

# AdoDotNet.DataSource


Vrátí kolekci schémat pro zdroj dat ADO.NET.


## Syntax

```powerquery
AdoDotNet.DataSource(
    providerName as text,
    connectionString as any,
    optional options as record
) as table
```


## Remarks

Vrátí kolekci schémat pro zdroj dat ADO.NET s názvem zprostředkovatele `providerName` a připojovacím řetězcem `connectionString`. `connectionString` může být text nebo záznam dvojic vlastností a jejich hodnot. Hodnoty vlastností mohou být textové nebo číselné. K určení dalších vlastností je možné zadat nepovinný parametr záznamu `options`. Záznam může obsahovat následující pole:

-   `CommandTimeout` : Doba trvání, která řídí, jak dlouho může dotaz být dotaz na straně serveru spuštěný, než se zruší. Výchozí hodnota je 10 minut.
-   `SqlCompatibleWindowsAuth` : Logická hodnota (true/false), která určuje, jestli se mají generovat možnosti připojovacího řetězce pro ověřování systému Windows (kompatibilní se SQL Serverem). Výchozí hodnota je true.
-   `TypeMap`



## Category
Accessing data
