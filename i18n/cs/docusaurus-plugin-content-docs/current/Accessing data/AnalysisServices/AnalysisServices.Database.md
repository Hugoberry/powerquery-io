---
title: AnalysisServices.Database
---

# AnalysisServices.Database


## Description

Vrátí tabulku multidimenzionálních krychlí nebo tabulkových modelů z databáze služby Analysis Services.


## Syntax

```powerquery
AnalysisServices.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Details

Vrátí tabulku multidimenzionálních krychlí nebo tabulkových modelů z databáze služby Analysis Services <code>database</code> na serveru <code>server</code>. Pomocí nepovinného parametru záznamu <code>options</code> můžete řídit následující možnosti:    <ul><li><code>Query</code> : Nativn&#237; dotaz MDX použit&#253; k načten&#237; dat.</li><li><code>TypedMeasureColumns</code> : Logick&#225; hodnota, kter&#225; ud&#225;v&#225;, jestli se pro typy přidan&#253;ch sloupců m&#237;ry budou použ&#237;vat typy určen&#233; v multidimenzion&#225;ln&#237;m nebo tabulkov&#233;m modelu. Při nastaven&#237; false se pro všechny sloupce m&#237;ry použije typ „number“. V&#253;choz&#237; hodnotou pro tuto možnost je false.</li><li><code>Culture</code> : N&#225;zev jazykov&#233; verze, kter&#253; určuje jazykovou verzi pro data. Odpov&#237;d&#225; vlastnosti „Locale Identifier“ v připojovac&#237;m řetězci.</li><li><code>CommandTimeout</code> : Doba trv&#225;n&#237;, kter&#225; ř&#237;d&#237;, jak dlouho může dotaz b&#253;t dotaz na straně serveru spuštěn&#253;, než se zruš&#237;. V&#253;choz&#237; hodnota z&#225;vis&#237; na ovladači.</li><li><code>ConnectionTimeout</code> : Doba trv&#225;n&#237;, kter&#225; ř&#237;d&#237;, jak dlouho se m&#225; čekat, než se pokus o připojen&#237; k serveru opust&#237;. V&#253;choz&#237; hodnota z&#225;vis&#237; na ovladači.</li><li><code>SubQueries</code> : Č&#237;slo (0, 1 nebo 2), kter&#233; nastavuje hodnotu vlastnosti SubQueries v připojovac&#237;m řetězci. Ř&#237;d&#237; chov&#225;n&#237; poč&#237;tan&#253;ch členů při podv&#253;běrech nebo subkrychl&#237;ch. (V&#253;choz&#237; hodnota je 2).</li><li><code>Implementation</code></li></ul>    



## Category
Accessing data
