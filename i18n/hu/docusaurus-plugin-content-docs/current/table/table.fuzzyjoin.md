---
title: Table.FuzzyJoin
---

# Table.FuzzyJoin


Összeilleszti a két tábla azon sorait, amelyek a megadott kulcsok alapján intelligens (fuzzy) egyezést mutatnak.


## Syntax

```powerquery
Table.FuzzyJoin(
    table1 as table,
    key1 as any,
    table2 as table,
    key2 as any,
    optional joinKind as JoinKind.Type,
    optional joinOptions as record
) as table
```


## Remarks

A(z) `table1` sorait illeszti össze a(z) `table2` soraival a(z) `key1` által (`table1` esetén) és a(z) `key2` által (`table2` esetén) kiválasztott kulcsoszlopok értékeinek fuzzy keresése alapján.

A fuzzy keresés egy olyan összehasonlítás, amely nem a szövegek egyezésén, hanem a hasonlóságukon alapul.

Alapértelmezés szerint a program egy belső illesztést hajt végre, de egy opcionális `joinKind` is megadható az illesztés típusának meghatározásához. Elérhető beállítások:

-   `JoinKind.Inner`
-   `JoinKind.LeftOuter`
-   `JoinKind.RightOuter`
-   `JoinKind.FullOuter`
-   `JoinKind.LeftAnti`
-   `JoinKind.RightAnti`
-   `JoinKind.LeftSemi`
-   `JoinKind.RightSemi`

Az opcionális `joinOptions` halmaz hozzáadható annak megadásához, hogy miként történjen a kulcsoszlopok összehasonlítása. Elérhető beállítások:

-   `ConcurrentRequests` : Egy 1 és 8 közötti szám, amely megadja a fuzzy kereséshez használandó párhuzamos szálak számát. Az alapértelmezett érték 1.
-   `Culture` : Lehetővé teszi a rekordok kulturáliskörnyezet-specifikus szabályok szerinti egyeztetését. Ez lehet bármilyen érvényes kulturáliskörnyezet-név. Ha például a Kulturális környezet beállítás értéke ja-JP, akkor a japán kulturális környezet alapján egyezteti a rekordokat. Az alapértelmezett érték a „”, amely a semleges angol kulturális környezet alapján végzi az egyeztetést.
-   `IgnoreCase` : Egy logikai (igaz/hamis) érték, amely lehetővé teszi a kulcsok kis-és nagybetűk megkülönböztetése nélküli egyeztetését. Igaz érték esetén a „Szőlő” például egyezőnek minősül a „szőlő” szóval. Az alapértelmezett érték Igaz.
-   `IgnoreSpace` : Egy logikai (igaz/hamis) érték, amely lehetővé teszi a szövegrészek kombinálását az egyezések kereséséhez. Igaz érték esetén a „Sző lő” például egyezőnek minősül a „Szőlő” szóval. Az alapértelmezett érték Igaz.
-   `NumberOfMatches` : Egy egész szám, amely megadja az egyező sorok maximális visszaadható számát minden bemeneti sor esetében. Az 1 érték például az egyes bemeneti sorokkal leginkább egyező sort adja vissza. Ha ez a beállítás nincs megadva, a rendszer az összes egyező sort visszaadja.
-   `SimilarityColumnName` : A bemeneti érték és az adott bemenethez tartozó reprezentatív érték közötti hasonlóságot ábrázoló oszlop neve. Az alapértelmezett érték a null, amely esetben a rendszer nem ad meg egy új oszlopot a hasonlóságoknak.
-   `Threshold` : Egy 0,00 és 1,00 közötti szám, amely meghatározza azt a hasonlósági pontszámot, amelyen két érték egyeztetve lesz. Például a „Szőlő” és a „Szlő” (hiányzó „ő” betűvel) csak akkor lesz egyeztetve, ha a beállítás értéke kisebb, mint 0,90. Az 1,00 küszöbérték csak a pontos egyezéseket engedélyezi. (Vegye figyelembe, hogy a fuzzy „pontos egyezés” figyelmen kívül hagyhat olyan különbségeket, mint például a kis- és nagybetűhasználatot, a szósorrendet és az írásjeleket.) Az alapértelmezett érték 0,80.
-   `TransformationTable` : Egy táblázat, amely lehetővé teszi a rekordok egyéni értéktársítások alapján történő egyeztetését. Tartalmaznia kell a „From” és „To” oszlopokat. A „Szőlő” például akkor lesz egyeztetve a „Mazsola” szóval, ha meg van adva egy átalakítási tábla, ahol a „From” oszlopban a „Szőlő” érték, a „To” oszlopban pedig a „Mazsola” érték szerepel. Vegye figyelembe, hogy az átalakítás az átalakítási táblában található összes a szövegelőfordulásra érvényes lesz. A fenti átalakítási tábla esetén például „A szőlő édes” a „Mazsola édes” kifejezéssel is egyeztetve lesz.


## Examples

### Example #1
Két tábla bal oldali intelligens (fuzzy) belső illesztése \[FirstName\] alapján
```powerquery
Table.FuzzyJoin(
    Table.FromRecords(
        {
            [CustomerID = 1, FirstName1 = "Bob", Phone = "555-1234"],
            [CustomerID = 2, FirstName1 = "Robert", Phone = "555-4567"]
        },
        type table [CustomerID = nullable number, FirstName1 = nullable text, Phone = nullable text]
    ),
    {"FirstName1"},
    Table.FromRecords(
        {
            [CustomerStateID = 1, FirstName2 = "Bob", State = "TX"],
            [CustomerStateID = 2, FirstName2 = "bOB", State = "CA"]
        },
        type table [CustomerStateID = nullable number, FirstName2 = nullable text, State = nullable text]
    ),
    {"FirstName2"},
    JoinKind.LeftOuter,
    [IgnoreCase = true, IgnoreSpace = false]
)
```

Result: 
```powerquery
Table.FromRecords({
    [
        CustomerID = 1,
        FirstName1 = "Bob",
        Phone = "555-1234",
        CustomerStateID = 1,
        FirstName2 = "Bob",
        State = "TX"
    ],
    [
        CustomerID = 1,
        FirstName1 = "Bob",
        Phone = "555-1234",
        CustomerStateID = 2,
        FirstName2 = "bOB",
        State = "CA"
    ],
    [
        CustomerID = 2,
        FirstName1 = "Robert",
        Phone = "555-4567",
        CustomerStateID = null,
        FirstName2 = null,
        State = null
    ]
})
```




## Category
Table.Transformation
