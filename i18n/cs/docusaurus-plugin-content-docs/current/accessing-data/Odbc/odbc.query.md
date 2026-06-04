---
title: Odbc.Query
---

# Odbc.Query


Vrací výsledek spuštění nativního dotazu z datového zdroje ODBC.


## Syntax

```powerquery
Odbc.Query(
    connectionString as any,
    query as text,
    optional options as record
) as table
```


## Remarks

Vrátí výsledek spuštění `query` s připojovacím řetězcem `connectionString` s použitím ODBC. `connectionString` může být text nebo záznam párů hodnot vlastnosti. Hodnoty vlastnosti můžou být text nebo číslo. K určení dalších vlastností je možné zadat nepovinný parametr záznamu `options`. Záznam může obsahovat následující pole:

-   `ConnectionTimeout` : Doba trvání, která řídí, jak dlouho se má čekat, než se pokus o připojení k serveru opustí. Výchozí hodnota je 15 s.
-   `CommandTimeout` : Doba trvání, která řídí, jak dlouho může dotaz být dotaz na straně serveru spuštěný, než se zruší. Výchozí hodnota je 10 minut.
-   `SqlCompatibleWindowsAuth` : Logická hodnota (true/false), která určuje, jestli se mají generovat možnosti připojovacího řetězce pro ověřování systému Windows (kompatibilní se SQL Serverem). Výchozí hodnota je true.


## Examples

### Example #1
Vrátí výsledek spuštění jednoduchého dotazu na zadaný připojovací řetězec.
```powerquery
Odbc.Query("dsn=your_dsn", "select * from Customers")
```

Result: 
```powerquery
table
```




## Category
Accessing data
