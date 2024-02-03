---
title: MySQL.Database
---

# MySQL.Database


## Description

Vrátí tabulku tabulek, zobrazení a uložených skalárních funkcí SQL dostupných v databázi MySQL.


## Syntax

```powerquery
MySQL.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Details

Vrátí tabulku tabulek, zobrazení a uložených skalárních funkcí SQL dostupných v databázi MySQL na serveru <code>server</code> v instanci databáze <code>database</code>. Společně se serverem se volitelně může zadat port oddělený dvojtečkou. Zadáním nepovinného parametru záznamu <code>options</code> můžete řídit následující možnosti:    <ul><li><code>Encoding</code> : Hodnota TextEncoding, kter&#225; určuje znakovou sadu použitou ke k&#243;dov&#225;n&#237; všech dotazů odeslan&#253;ch na server (v&#253;choz&#237; hodnota je null).</li><li><code>CreateNavigationProperties</code> : Logick&#253; parametr (true/false), kter&#253; nastavuje, jestli se maj&#237; u vr&#225;cen&#253;ch hodnot generovat navigačn&#237; vlastnosti (v&#253;choz&#237; hodnota je true).</li><li><code>NavigationPropertyNameGenerator</code> : Funkce použ&#237;van&#225; ke generov&#225;n&#237; n&#225;zvů navigačn&#237;ch vlastnost&#237;.</li><li><code>Query</code> : Nativn&#237; dotaz SQL použit&#253; k načten&#237; dat. Pokud dotaz vyprodukuje v&#237;ce sad v&#253;sledků, bude vr&#225;cena jenom prvn&#237;.</li><li><code>CommandTimeout</code> : Doba trv&#225;n&#237;, kter&#225; ř&#237;d&#237;, jak dlouho může dotaz b&#253;t dotaz na straně serveru spuštěn&#253;, než se zruš&#237;. V&#253;choz&#237; hodnota je 10 minut.</li><li><code>ConnectionTimeout</code> : Doba trv&#225;n&#237;, kter&#225; ř&#237;d&#237;, jak dlouho se m&#225; čekat, než se pokus o připojen&#237; k serveru opust&#237;. V&#253;choz&#237; hodnota z&#225;vis&#237; na ovladači.</li><li><code>TreatTinyAsBoolean</code> : Logick&#253; parametr (true/false), kter&#253; určuje, jestli maj&#237; b&#253;t sloupce tinyint na serveru vynuceny jako logick&#233; hodnoty. V&#253;choz&#237; hodnota je true.</li><li><code>OldGuids</code> : Logick&#253; parametr (true/false), kter&#253; nastavuje, jestli budou br&#225;ny jako identifik&#225;tory GUID sloupce char(36) (při false) nebo sloupce binary(16) (při true). V&#253;choz&#237; hodnota je false.</li><li><code>ReturnSingleDatabase</code> : Logick&#253; parametr (true/false), kter&#253; nastavuje, jestli maj&#237; b&#253;t vr&#225;ceny všechny tabulky ze všech datab&#225;z&#237; (false), nebo tabulky a zobrazen&#237; ze zadan&#233; datab&#225;ze (true). V&#253;choz&#237; hodnota je false.</li><li><code>HierarchicalNavigation</code> : Logick&#253; parametr (true/false), kter&#253; nastavuje, jestli se maj&#237; tabulky zobrazit seskupen&#233; podle sv&#253;ch n&#225;zvů sch&#233;mat (v&#253;choz&#237; hodnota je false).</li></ul>    Parametr záznamu se zadává například ve formátu [možnost1 = hodnota1, možnost2 = hodnota2...] nebo [Query = "select ..."].    



## Category
Accessing data
