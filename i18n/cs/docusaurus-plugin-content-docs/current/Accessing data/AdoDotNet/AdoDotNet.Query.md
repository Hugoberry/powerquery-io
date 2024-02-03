---
title: AdoDotNet.Query
---

# AdoDotNet.Query


## Description

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


## Details

Vrátí výsledek spuštění <code>query</code> s připojovacím řetězcem <code>connectionString</code> pomocí zprostředkovatele ADO.NET <code>providerName</code>. Řetězec <code>connectionString</code> může být text nebo záznam párů hodnot vlastností. Hodnoty vlastností můžou být text nebo čísla. K určení dalších vlastností je možné zadat nepovinný parametr záznamu <code>options</code>. Záznam může obsahovat následující pole:    <ul><li><code>CommandTimeout</code> : Doba trv&#225;n&#237;, kter&#225; ř&#237;d&#237;, jak dlouho může dotaz b&#253;t dotaz na straně serveru spuštěn&#253;, než se zruš&#237;. V&#253;choz&#237; hodnota je 10 minut.</li><li><code>SqlCompatibleWindowsAuth</code> : Logick&#225; hodnota (true/false), kter&#225; určuje, jestli se maj&#237; generovat možnosti připojovac&#237;ho řetězce pro ověřov&#225;n&#237; syst&#233;mu Windows (kompatibiln&#237; se SQL Serverem). V&#253;choz&#237; hodnota je true.</li></ul>



## Category
Accessing data
