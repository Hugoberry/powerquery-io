---
title: Odbc.DataSource
---

# Odbc.DataSource


## Description

Vrátí tabulku tabulek a zobrazení SQL ze zdroje dat ODBC. 


## Syntax

```powerquery
Odbc.DataSource(
    connectionString as any,
    optional options as record
) as table
```


## Details

Vrátí tabulku tabulek a zobrazení SQL ze zdroje dat ODBC určeného připojovacím řetězcem <code>connectionString</code>. <code>connectionString</code> může být text nebo záznam párů hodnot vlastnosti. Hodnoty vlastnosti můžou být text nebo číslo. K určení dalších vlastností je možné zadat nepovinný parametr záznamu <code>options</code>. Záznam může obsahovat následující pole:    <ul><li><code>CreateNavigationProperties</code> : Logick&#253; parametr (true/false), kter&#253; nastavuje, jestli se maj&#237; u vr&#225;cen&#253;ch hodnot generovat navigačn&#237; vlastnosti (v&#253;choz&#237; hodnota je true).</li><li><code>HierarchicalNavigation</code> : Logick&#253; parametr (true/false), kter&#253; nastavuje, jestli se maj&#237; tabulky zobrazit seskupen&#233; podle sv&#253;ch n&#225;zvů sch&#233;mat (v&#253;choz&#237; hodnota je false).</li><li><code>ConnectionTimeout</code> : Doba trv&#225;n&#237;, kter&#225; ř&#237;d&#237;, jak dlouho se m&#225; čekat, než se pokus o připojen&#237; k serveru opust&#237;. V&#253;choz&#237; hodnota je 15 s.</li><li><code>CommandTimeout</code> : Doba trv&#225;n&#237;, kter&#225; ř&#237;d&#237;, jak dlouho může dotaz b&#253;t dotaz na straně serveru spuštěn&#253;, než se zruš&#237;. V&#253;choz&#237; hodnota je 10 minut.</li><li><code>SqlCompatibleWindowsAuth</code> : Logick&#225; hodnota (true/false), kter&#225; určuje, jestli se maj&#237; generovat možnosti připojovac&#237;ho řetězce pro ověřov&#225;n&#237; syst&#233;mu Windows (kompatibiln&#237; se SQL Serverem). V&#253;choz&#237; hodnota je true.</li></ul>


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
