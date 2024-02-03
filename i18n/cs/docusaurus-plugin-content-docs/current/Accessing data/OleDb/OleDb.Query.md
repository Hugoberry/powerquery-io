---
title: OleDb.Query
---

# OleDb.Query


## Description

Vrací výsledek spuštění nativního dotazu na datovém zdroji OLE DB.


## Syntax

```powerquery
OleDb.Query(
    connectionString as any,
    query as text,
    optional options as record
) as table
```


## Details

Vrátí výsledek spuštění <code>query</code> s připojovacím řetězcem <code>connectionString</code> s použitím OLE DB. <code>connectionString</code> může být text nebo záznam párů hodnot vlastnosti. Hodnoty vlastnosti můžou být text nebo číslo. K určení dalších vlastností je možné zadat nepovinný parametr záznamu <code>options</code>. Záznam může obsahovat následující pole:    <ul><li><code>ConnectionTimeout</code> : Doba trv&#225;n&#237;, kter&#225; ř&#237;d&#237;, jak dlouho se m&#225; čekat, než se pokus o připojen&#237; k serveru opust&#237;. V&#253;choz&#237; hodnota z&#225;vis&#237; na ovladači.</li><li><code>CommandTimeout</code> : Doba trv&#225;n&#237;, kter&#225; ř&#237;d&#237;, jak dlouho může dotaz b&#253;t dotaz na straně serveru spuštěn&#253;, než se zruš&#237;. V&#253;choz&#237; hodnota je 10 minut.</li><li><code>SqlCompatibleWindowsAuth</code> : Logick&#225; hodnota (true/false), kter&#225; určuje, jestli se maj&#237; generovat možnosti připojovac&#237;ho řetězce pro ověřov&#225;n&#237; syst&#233;mu Windows (kompatibiln&#237; se SQL Serverem). V&#253;choz&#237; hodnota je true.</li></ul>



## Category
Accessing data
