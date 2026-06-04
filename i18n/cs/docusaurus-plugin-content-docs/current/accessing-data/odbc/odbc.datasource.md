---
title: Odbc.DataSource
---

# Odbc.DataSource


Vrátí tabulku tabulek a zobrazení SQL ze zdroje dat ODBC.


## Syntax

```powerquery
Odbc.DataSource(
    connectionString as any,
    optional options as record
) as table
```


## Remarks

Vrátí tabulku tabulek a zobrazení SQL ze zdroje dat ODBC určeného připojovacím řetězcem `connectionString`. `connectionString` může být text nebo záznam párů hodnot vlastnosti. Hodnoty vlastnosti můžou být text nebo číslo. K určení dalších vlastností je možné zadat nepovinný parametr záznamu `options`. Záznam může obsahovat následující pole:

-   `CreateNavigationProperties` : Logický parametr (true/false), který nastavuje, jestli se mají u vrácených hodnot generovat navigační vlastnosti (výchozí hodnota je true).
-   `HierarchicalNavigation` : Logický parametr (true/false), který nastavuje, jestli se mají tabulky zobrazit seskupené podle svých názvů schémat (výchozí hodnota je false).
-   `ConnectionTimeout` : Doba trvání, která řídí, jak dlouho se má čekat, než se pokus o připojení k serveru opustí. Výchozí hodnota je 15 s.
-   `CommandTimeout` : Doba trvání, která řídí, jak dlouho může dotaz být dotaz na straně serveru spuštěný, než se zruší. Výchozí hodnota je 10 minut.
-   `SqlCompatibleWindowsAuth` : Logická hodnota (true/false), která určuje, jestli se mají generovat možnosti připojovacího řetězce pro ověřování systému Windows (kompatibilní se SQL Serverem). Výchozí hodnota je true.


## Examples

### Example #1
Vrátí tabulky a zobrazení SQL ze zadaného připojovacího řetězce.
```powerquery
Odbc.DataSource("dsn=your_dsn")
```

Result: 
```powerquery
table
```




## Category
Accessing data
