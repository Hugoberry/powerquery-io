---
title: OleDb.DataSource
---

# OleDb.DataSource


## Description

Vrátí tabulku tabulek a zobrazení SQL ze zdroje dat OLE DB.


## Syntax

```powerquery
OleDb.DataSource(
    connectionString as any,
    optional options as record
) as table
```


## Details

Vrátí tabulku tabulek a zobrazení SQL ze zdroje dat OLE DB určeného připojovacím řetězcem <code>connectionString</code>. <code>connectionString</code> může být text nebo záznam dvojic vlastností a hodnot. Hodnoty vlastností můžou být textové nebo číselné. Pomocí volitelného parametru záznamu (<code>options</code>) jde zadat další vlastnosti. Záznam může obsahovat následující pole:    <ul><li><code>CreateNavigationProperties</code> : Logick&#253; parametr (true/false), kter&#253; nastavuje, jestli se maj&#237; u vr&#225;cen&#253;ch hodnot generovat navigačn&#237; vlastnosti (v&#253;choz&#237; hodnota je true).</li><li><code>NavigationPropertyNameGenerator</code> : Funkce použ&#237;van&#225; ke generov&#225;n&#237; n&#225;zvů navigačn&#237;ch vlastnost&#237;.</li><li><code>Query</code> : Nativn&#237; dotaz SQL použit&#253; k načten&#237; dat. Pokud dotaz vyprodukuje v&#237;ce sad v&#253;sledků, bude vr&#225;cena jenom prvn&#237;.</li><li><code>HierarchicalNavigation</code> : Logick&#253; parametr (true/false), kter&#253; nastavuje, jestli se maj&#237; tabulky zobrazit seskupen&#233; podle sv&#253;ch n&#225;zvů sch&#233;mat (v&#253;choz&#237; hodnota je true).</li><li><code>ConnectionTimeout</code> : Doba trv&#225;n&#237;, kter&#225; ř&#237;d&#237;, jak dlouho se m&#225; čekat, než se pokus o připojen&#237; k serveru opust&#237;. V&#253;choz&#237; hodnota z&#225;vis&#237; na ovladači.</li><li><code>CommandTimeout</code> : Doba trv&#225;n&#237;, kter&#225; ř&#237;d&#237;, jak dlouho může dotaz b&#253;t dotaz na straně serveru spuštěn&#253;, než se zruš&#237;. V&#253;choz&#237; hodnota je 10 minut.</li><li><code>SqlCompatibleWindowsAuth</code> : Logick&#225; hodnota (true/false), kter&#225; určuje, jestli se maj&#237; generovat možnosti připojovac&#237;ho řetězce pro ověřov&#225;n&#237; syst&#233;mu Windows (kompatibiln&#237; se SQL Serverem). V&#253;choz&#237; hodnota je true.</li></ul>    Parametr záznamu se zadává například jako [možnost1 = hodnota1, možnost2 = hodnota2...] nebo [Query = "select ..."].



## Category
Accessing data
