---
title: Table.FuzzyGroup
---

# Table.FuzzyGroup


Csoportosítja a táblázat sorait a kulcsok intelligens (fuzzy) egyezése alapján.


## Syntax

```powerquery
Table.FuzzyGroup(
    table as table,
    key as any,
    aggregatedColumns as list,
    optional options as record
) as table
```


## Remarks

Csoportosítja a(z) `table` sorait az adott `key` oszlopban lévő értékek alapján minden egyes sor esetében. Minden csoport esetében létrejön egy rekord, amely tartalmazza a kulcsoszlopokat (és azok értékeit) a(z) `aggregatedColumns` által meghatározott összesített oszlopokkal együtt. A sorok rögzített sorrendben való visszaadása nem garantált.

Az opcionális `options` hozzáadható annak megadásához, hogy miként történjen a kulcsoszlopok összehasonlítása. Elérhető beállítások:

-   `Culture` : Lehetővé teszi a rekordok kulturáliskörnyezet-specifikus szabályok szerinti csoportosítását. Ez lehet bármilyen érvényes kulturáliskörnyezet-név. Ha például a Kulturális környezet beállítás értéke ja-JP, akkor a japán kulturális környezet alapján csoportosítja a rekordokat. Az alapértelmezett érték a „”, amely a semleges angol kulturális környezet alapján végzi a csoportosítást.
-   `IgnoreCase` : Egy logikai (igaz/hamis) érték, amely lehetővé teszi a kulcsok kis-és nagybetűk megkülönböztetése nélküli csoportosítását. Igaz érték esetén a „Szőlő” például a „szőlő” szóval van csoportosítva. Az alapértelmezett érték Igaz.
-   `IgnoreSpace` : Egy logikai (igaz/hamis) érték, amely lehetővé teszi a szövegrészek kombinálását a csoportok kereséséhez. Igaz érték esetén a „Sző lő” például a „Szőlő” szóval van csoportosítva. Az alapértelmezett érték Igaz.
-   `SimilarityColumnName` : A bemeneti érték és az adott bemenethez tartozó reprezentatív érték közötti hasonlóságot ábrázoló oszlop neve. Az alapértelmezett érték a null, amely esetben a rendszer nem ad meg egy új oszlopot a hasonlóságoknak.
-   `Threshold` : Egy 0,00 és 1,00 közötti szám, amely meghatározza azt a hasonlósági pontszámot, amelyen két érték csoportosítva lesz. Például a „Szőlő” és a „Szlő” (hiányzó „ő” betűvel) csak akkor lesz csoportosítva, ha a beállítás értéke kisebb, mint 0,90. Az 1,00 küszöbérték csak a pontos egyezéseket engedélyezi. (Vegye figyelembe, hogy a fuzzy „pontos egyezés” figyelmen kívül hagyhat olyan különbségeket, mint például a kis- és nagybetűhasználatot, a szósorrendet és az írásjeleket.) Az alapértelmezett érték 0,80.
-   `TransformationTable` : Egy táblázat, amely lehetővé teszi a rekordok egyéni értéktársítások alapján történő csoportosítását. Tartalmaznia kell a „From” és „To” oszlopokat. A „Szőlő” például akkor lesz csoportosítva a „Mazsola” szóval, ha meg van adva egy átalakítási tábla, ahol a „From” oszlopban a „Szőlő” érték, a „To” oszlopban pedig a „Mazsola” érték szerepel. Vegye figyelembe, hogy az átalakítás az átalakítási táblában található összes a szövegelőfordulásra érvényes lesz. A fenti átalakítási tábla esetén például „A szőlő édes” a „Mazsola édes” kifejezéssel is csoportosítva lesz.


## Examples

### Example #1
A táblázat csoportosítása egy \[Count\] (szám) összesített oszlop hozzáadásával, amely az egyes helyeken lévő alkalmazottak számát tartalmazza (`each Table.RowCount(_)`).
```powerquery
Table.FuzzyGroup(
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
    {"Count", each Table.RowCount(_)},
    [IgnoreCase = true, IgnoreSpace = true]
)
```

Result: 
```powerquery
Table.FromRecords({
    [Location = "Seattle", Count = 4],
    [Location = "Vancouver", Count = 3]
})
```




## Category
Table.Transformation
