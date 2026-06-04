---
title: Table.AddFuzzyClusterColumn
---

# Table.AddFuzzyClusterColumn


A tábla megadott oszlopában található értékek intelligens csoportosításával beszerzett reprezentatív értékekkel rendelkező új oszlopot ad hozzá.


## Syntax

```powerquery
Table.AddFuzzyClusterColumn(
    table as table,
    columnName as text,
    newColumnName as text,
    optional options as record
) as table
```


## Remarks

Egy `newColumnName` nevű új oszlopot ad hozzá a(z) `table` elemhez a következő reprezentatív értékeivel: `columnName`. A reprezentatív értékek beszerzése a(z) `columnName` értékeinek minden egyes sorra vonatkozó intelligens egyeztetésével történik.

Az opcionális `options` halmaz hozzáadható annak megadásához, hogy miként történjen a kulcsoszlopok összehasonlítása. Elérhető beállítások:

-   `Culture` : Lehetővé teszi a rekordok kulturáliskörnyezet-specifikus szabályok szerinti csoportosítását. Ez lehet bármilyen érvényes kulturáliskörnyezet-név. Ha például a Kulturális környezet beállítás értéke ja-JP, akkor a japán kulturális környezet alapján csoportosítja a rekordokat. Az alapértelmezett érték a „”, amely a semleges angol kulturális környezet alapján végzi a csoportosítást.
-   `IgnoreCase` : Egy logikai (igaz/hamis) érték, amely lehetővé teszi a kulcsok kis-és nagybetűk megkülönböztetése nélküli csoportosítását. Igaz érték esetén a „Szőlő” például a „szőlő” szóval van csoportosítva. Az alapértelmezett érték Igaz.
-   `IgnoreSpace` : Egy logikai (igaz/hamis) érték, amely lehetővé teszi a szövegrészek kombinálását a csoportok kereséséhez. Igaz érték esetén a „Sző lő” például a „Szőlő” szóval van csoportosítva. Az alapértelmezett érték Igaz.
-   `SimilarityColumnName` : A bemeneti érték és az adott bemenethez tartozó reprezentatív érték közötti hasonlóságot ábrázoló oszlop neve. Az alapértelmezett érték a null, amely esetben a rendszer nem ad meg egy új oszlopot a hasonlóságoknak.
-   `Threshold` : Egy 0,00 és 1,00 közötti szám, amely meghatározza azt a hasonlósági pontszámot, amelyen két érték csoportosítva lesz. Például a „Szőlő” és a „Szlő” (hiányzó „ő” betűvel) csak akkor lesz csoportosítva, ha a beállítás értéke kisebb, mint 0,90. Az 1,00 küszöbérték csak a pontos egyezéseket engedélyezi. (Vegye figyelembe, hogy a fuzzy „pontos egyezés” figyelmen kívül hagyhat olyan különbségeket, mint például a kis- és nagybetűhasználatot, a szósorrendet és az írásjeleket.) Az alapértelmezett érték 0,80.
-   `TransformationTable` : Egy táblázat, amely lehetővé teszi a rekordok egyéni értéktársítások alapján történő csoportosítását. Tartalmaznia kell a „From” és „To” oszlopokat. A „Szőlő” például akkor lesz csoportosítva a „Mazsola” szóval, ha meg van adva egy átalakítási tábla, ahol a „From” oszlopban a „Szőlő” érték, a „To” oszlopban pedig a „Mazsola” érték szerepel. Vegye figyelembe, hogy az átalakítás az átalakítási táblában található összes a szövegelőfordulásra érvényes lesz. A fenti átalakítási tábla esetén például „A szőlő édes” a „Mazsola édes” kifejezéssel is csoportosítva lesz.


## Examples

### Example #1
Az alkalmazottak tartózkodási helyére vonatkozó reprezentatív értékek keresése.
```powerquery
Table.AddFuzzyClusterColumn(
    Table.FromRecords(
        {
            [EmployeeID = 1, Location = "Seattle"],
            [EmployeeID = 2, Location = "seattl"],
            [EmployeeID = 3, Location = "Vancouver"],
            [EmployeeID = 4, Location = "Seatle"],
            [EmployeeID = 5, Location = "vancover"],
            [EmployeeID = 6, Location = "Seattle"],
            [EmployeeID = 7, Location = "Vancouver"]
        },
        type table [EmployeeID = nullable number, Location = nullable text]
    ),
    "Location",
    "Location_Cleaned",
    [IgnoreCase = true, IgnoreSpace = true]
)
```

Result: 
```powerquery
Table.FromRecords(
    {
        [EmployeeID = 1, Location = "Seattle", Location_Cleaned = "Seattle"],
        [EmployeeID = 2, Location = "seattl", Location_Cleaned = "Seattle"],
        [EmployeeID = 3, Location = "Vancouver", Location_Cleaned = "Vancouver"],
        [EmployeeID = 4, Location = "Seatle", Location_Cleaned = "Seattle"],
        [EmployeeID = 5, Location = "vancover", Location_Cleaned = "Vancouver"],
        [EmployeeID = 6, Location = "Seattle", Location_Cleaned = "Seattle"],
        [EmployeeID = 7, Location = "Vancouver", Location_Cleaned = "Vancouver"]
    },
    type table [EmployeeID = nullable number, Location = nullable text, Location_Cleaned = nullable text]
)
```




## Category
Table.Transformation
