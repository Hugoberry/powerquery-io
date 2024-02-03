---
title: SapHana.Database
---

# SapHana.Database


## Description

Vrací balíčky v databázi SAP HANA.


## Syntax

```powerquery
SapHana.Database(
    server as text,
    optional options as record
) as table
```


## Details

Vrací tabulku multidimenzionálních balíčků z databáze SAP HANA <code>server</code>. Zadáním volitelného parametru záznamu, <code>options</code>, je možné ovládat následující možnosti:    <ul><li><code>Query</code> : Nativn&#237; dotaz SQL použit&#253; k načten&#237; dat. Pokud dotaz vyprodukuje v&#237;ce sad v&#253;sledků, bude vr&#225;cena jenom prvn&#237;.</li><li><code>Distribution</code> : Parametr SapHanaDistribution, kter&#253; nastavuje hodnotu vlastnosti „Distribution“ v připojovac&#237;m řetězci. Metoda vyhodnocen&#237; spr&#225;vn&#233;ho uzlu serveru distribuovan&#233;ho syst&#233;mu před proveden&#237;m př&#237;kazu je směrov&#225;n&#237; př&#237;kazu. V&#253;choz&#237; hodnota je SapHanaDistribution.All.</li><li><code>Implementation</code> : Určuje implementaci konektoru SAP HANA, kter&#225; se m&#225; použ&#237;t.</li><li><code>EnableColumnBinding</code> : Při nač&#237;t&#225;n&#237; dat vytvoř&#237; vazbu proměnn&#253;ch na sloupce sady v&#253;sledků dotazu SAP HANA. Může potenci&#225;lně zv&#253;šit v&#253;kon za cenu m&#237;rně vyšš&#237;ho využit&#237; paměti. V&#253;choz&#237; hodnota je false.</li><li><code>ConnectionTimeout</code> : Doba trv&#225;n&#237;, kter&#225; ř&#237;d&#237;, jak dlouho se m&#225; čekat, než se pokus o připojen&#237; k serveru opust&#237;. V&#253;choz&#237; hodnota je 15 s.</li><li><code>CommandTimeout</code> : Doba trv&#225;n&#237;, kter&#225; ř&#237;d&#237;, jak dlouho může dotaz b&#253;t dotaz na straně serveru spuštěn&#253;, než se zruš&#237;. V&#253;choz&#237; hodnota je 10 minut.</li></ul>    



## Category
Accessing data
