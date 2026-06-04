---
title: AnalysisServices.Database
---

# AnalysisServices.Database


Vrátí tabulku multidimenzionálních krychlí nebo tabulkových modelů z databáze služby Analysis Services.


## Syntax

```powerquery
AnalysisServices.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Remarks

Vrátí tabulku multidimenzionálních krychlí nebo tabulkových modelů z databáze služby Analysis Services `database` na serveru `server`. Pomocí nepovinného parametru záznamu `options` můžete řídit následující možnosti:

-   `Query` : Nativní dotaz MDX použitý k načtení dat.
-   `TypedMeasureColumns` : Logická hodnota, která udává, jestli se pro typy přidaných sloupců míry budou používat typy určené v multidimenzionálním nebo tabulkovém modelu. Při nastavení false se pro všechny sloupce míry použije typ „number“. Výchozí hodnotou pro tuto možnost je false.
-   `Culture` : Název jazykové verze, který určuje jazykovou verzi pro data. Odpovídá vlastnosti „Locale Identifier“ v připojovacím řetězci.
-   `CommandTimeout` : Doba trvání, která řídí, jak dlouho může dotaz být dotaz na straně serveru spuštěný, než se zruší. Výchozí hodnota závisí na ovladači.
-   `ConnectionTimeout` : Doba trvání, která řídí, jak dlouho se má čekat, než se pokus o připojení k serveru opustí. Výchozí hodnota závisí na ovladači.
-   `SubQueries` : Číslo (0, 1 nebo 2), které nastavuje hodnotu vlastnosti SubQueries v připojovacím řetězci. Řídí chování počítaných členů při podvýběrech nebo subkrychlích. (Výchozí hodnota je 2).
-   `Implementation`



## Category
Accessing data
