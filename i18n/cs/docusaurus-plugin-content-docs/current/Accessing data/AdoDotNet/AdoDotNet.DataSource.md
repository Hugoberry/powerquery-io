---
title: AdoDotNet.DataSource
---

# AdoDotNet.DataSource


## Description

Vrátí kolekci schémat pro zdroj dat ADO.NET.


## Syntax

```powerquery
AdoDotNet.DataSource(
    providerName as text,
    connectionString as any,
    optional options as record
) as table
```


## Details

Vrátí kolekci schémat pro zdroj dat ADO.NET s názvem zprostředkovatele <code>providerName</code> a připojovacím řetězcem <code>connectionString</code>. <code>connectionString</code> může být text nebo záznam dvojic vlastností a jejich hodnot. Hodnoty vlastností mohou být textové nebo číselné. K určení dalších vlastností je možné zadat nepovinný parametr záznamu <code>options</code>. Záznam může obsahovat následující pole:    <ul><li><code>CommandTimeout</code> : Doba trv&#225;n&#237;, kter&#225; ř&#237;d&#237;, jak dlouho může dotaz b&#253;t dotaz na straně serveru spuštěn&#253;, než se zruš&#237;. V&#253;choz&#237; hodnota je 10 minut.</li><li><code>SqlCompatibleWindowsAuth</code> : Logick&#225; hodnota (true/false), kter&#225; určuje, jestli se maj&#237; generovat možnosti připojovac&#237;ho řetězce pro ověřov&#225;n&#237; syst&#233;mu Windows (kompatibiln&#237; se SQL Serverem). V&#253;choz&#237; hodnota je true.</li><li><code>TypeMap</code></li></ul>



## Category
Accessing data
