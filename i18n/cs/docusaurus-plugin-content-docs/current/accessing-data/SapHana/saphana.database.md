---
title: SapHana.Database
---

# SapHana.Database


Vrací balíčky v databázi SAP HANA.


## Syntax

```powerquery
SapHana.Database(
    server as text,
    optional options as record
) as table
```


## Remarks

Vrací tabulku multidimenzionálních balíčků z databáze SAP HANA `server`. Zadáním volitelného parametru záznamu, `options`, je možné ovládat následující možnosti:

-   `Query` : Nativní dotaz SQL použitý k načtení dat. Pokud dotaz vyprodukuje více sad výsledků, bude vrácena jenom první.
-   `Distribution` : Parametr SapHanaDistribution, který nastavuje hodnotu vlastnosti „Distribution“ v připojovacím řetězci. Metoda vyhodnocení správného uzlu serveru distribuovaného systému před provedením příkazu je směrování příkazu. Výchozí hodnota je SapHanaDistribution.All.
-   `Implementation` : Určuje implementaci konektoru SAP HANA, která se má použít.
-   `EnableColumnBinding` : Při načítání dat vytvoří vazbu proměnných na sloupce sady výsledků dotazu SAP HANA. Může potenciálně zvýšit výkon za cenu mírně vyššího využití paměti. Výchozí hodnota je false.
-   `ConnectionTimeout` : Doba trvání, která řídí, jak dlouho se má čekat, než se pokus o připojení k serveru opustí. Výchozí hodnota je 15 s.
-   `CommandTimeout` : Doba trvání, která řídí, jak dlouho může dotaz být dotaz na straně serveru spuštěný, než se zruší. Výchozí hodnota je 10 minut.



## Category
Accessing data
