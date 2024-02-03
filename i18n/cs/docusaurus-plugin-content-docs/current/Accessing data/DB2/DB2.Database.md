---
title: DB2.Database
---

# DB2.Database


## Description

Vrátí tabulku tabulek a zobrazení SQL dostupných v databázi Db2.


## Syntax

```powerquery
DB2.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Details

Vrátí tabulku tabulek a zobrazení SQL dostupných v databázi Db2 na serveru <code>server</code> v instanci databáze <code>database</code>. Společně se serverem se volitelně může zadat port oddělený dvojtečkou. Zadáním volitelného parametru záznamu <code>options</code> můžete řídit následující možnosti:    <ul><li><code>CreateNavigationProperties</code> : Logick&#253; parametr (true/false), kter&#253; nastavuje, jestli se maj&#237; u vr&#225;cen&#253;ch hodnot generovat navigačn&#237; vlastnosti (v&#253;choz&#237; hodnota je true).</li><li><code>NavigationPropertyNameGenerator</code> : Funkce použ&#237;van&#225; ke generov&#225;n&#237; n&#225;zvů navigačn&#237;ch vlastnost&#237;.</li><li><code>Query</code> : Nativn&#237; dotaz SQL použit&#253; k načten&#237; dat. Pokud dotaz vyprodukuje v&#237;ce sad v&#253;sledků, bude vr&#225;cena jenom prvn&#237;.</li><li><code>CommandTimeout</code> : Doba trv&#225;n&#237;, kter&#225; ř&#237;d&#237;, jak dlouho může dotaz b&#253;t dotaz na straně serveru spuštěn&#253;, než se zruš&#237;. V&#253;choz&#237; hodnota je 10 minut.</li><li><code>ConnectionTimeout</code> : Doba trv&#225;n&#237;, kter&#225; ř&#237;d&#237;, jak dlouho se m&#225; čekat, než se pokus o připojen&#237; k serveru opust&#237;. V&#253;choz&#237; hodnota z&#225;vis&#237; na ovladači.</li><li><code>HierarchicalNavigation</code> : Logick&#253; parametr (true/false), kter&#253; nastavuje, jestli se maj&#237; tabulky zobrazit seskupen&#233; podle sv&#253;ch n&#225;zvů sch&#233;mat (v&#253;choz&#237; hodnota je false).</li><li><code>Implementation</code> : Určuje implementaci zprostředkovatele intern&#237; datab&#225;ze, kter&#225; se m&#225; použ&#237;t. Platn&#233; hodnoty jsou: &quot;IBM&quot; a &quot;Microsoft&quot;.</li><li><code>BinaryCodePage</code> : Č&#237;slo pro identifik&#225;tor CCSID (Coded Character Set Identifier) k dek&#243;dov&#225;n&#237; bin&#225;rn&#237;ch dat Db2 FOR BIT na znakov&#233; řetězce. Plat&#237; pro Implementation = “Microsoft”. Nastaven&#237; hodnoty 0 zak&#225;že konverzi (v&#253;choz&#237;). Nastaven&#237; hodnoty 1 provede konverzi na z&#225;kladě k&#243;dov&#225;n&#237; datab&#225;ze. Nastaven&#237; jin&#233;ho č&#237;sla CCSID provede konverzi na z&#225;kladě k&#243;dov&#225;n&#237; aplikace.</li><li><code>PackageCollection</code> : Určuje řetězcovou hodnotu pro kolekci bal&#237;čků (v&#253;choz&#237; hodnota je NULLID), aby se umožnilo použit&#237; sd&#237;len&#253;ch bal&#237;čků požadovan&#253;ch pro zpracov&#225;n&#237; př&#237;kazů SQL. Použije se pro Implementation = &quot;Microsoft&quot;.</li><li><code>UseDb2ConnectGateway</code> : Určuje, jestli se připojen&#237; uskutečňuje prostřednictv&#237;m br&#225;ny Db2 Connect. Plat&#237; pro Implementation = &quot;Microsoft&quot;.</li></ul>    Parametr záznamu se zadává například ve formátu [možnost1 = hodnota1, možnost2 = hodnota2...] nebo [Query = "select ..."].    



## Category
Accessing data
