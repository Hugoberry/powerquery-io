---
title: Table.FuzzyGroup
---

# Table.FuzzyGroup


## Description

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


## Details

Csoportosítja a(z) <code>table</code> sorait az adott <code>key</code> oszlopban lévő értékek alapján minden egyes sor esetében.    Minden csoport esetében létrejön egy rekord, amely tartalmazza a kulcsoszlopokat (és azok értékeit) a(z) <code>aggregatedColumns</code> által meghatározott összesített oszlopokkal együtt.   A sorok rögzített sorrendben való visszaadása nem garantált.    Az opcionális <code>options</code> hozzáadható annak megadásához, hogy miként történjen a kulcsoszlopok összehasonlítása. Elérhető beállítások:    <ul><li><code>Culture</code> : Lehetőv&#233; teszi a rekordok kultur&#225;lisk&#246;rnyezet-specifikus szab&#225;lyok szerinti csoportos&#237;t&#225;s&#225;t. Ez lehet b&#225;rmilyen &#233;rv&#233;nyes kultur&#225;lisk&#246;rnyezet-n&#233;v. Ha p&#233;ld&#225;ul a Kultur&#225;lis k&#246;rnyezet be&#225;ll&#237;t&#225;s &#233;rt&#233;ke ja-JP, akkor a jap&#225;n kultur&#225;lis k&#246;rnyezet alapj&#225;n csoportos&#237;tja a rekordokat. Az alap&#233;rtelmezett &#233;rt&#233;k a „”, amely a semleges angol kultur&#225;lis k&#246;rnyezet alapj&#225;n v&#233;gzi a csoportos&#237;t&#225;st.</li><li><code>IgnoreCase</code> : Egy logikai (igaz/hamis) &#233;rt&#233;k, amely lehetőv&#233; teszi a kulcsok kis-&#233;s nagybetűk megk&#252;l&#246;nb&#246;ztet&#233;se n&#233;lk&#252;li csoportos&#237;t&#225;s&#225;t. Igaz &#233;rt&#233;k eset&#233;n a „Szőlő” p&#233;ld&#225;ul a „szőlő” sz&#243;val van csoportos&#237;tva. Az alap&#233;rtelmezett &#233;rt&#233;k Igaz.</li><li><code>IgnoreSpace</code> : Egy logikai (igaz/hamis) &#233;rt&#233;k, amely lehetőv&#233; teszi a sz&#246;vegr&#233;szek kombin&#225;l&#225;s&#225;t a csoportok keres&#233;s&#233;hez. Igaz &#233;rt&#233;k eset&#233;n a „Sző lő” p&#233;ld&#225;ul a „Szőlő” sz&#243;val van csoportos&#237;tva. Az alap&#233;rtelmezett &#233;rt&#233;k Igaz.</li><li><code>SimilarityColumnName</code> : A bemeneti &#233;rt&#233;k &#233;s az adott bemenethez tartoz&#243; reprezentat&#237;v &#233;rt&#233;k k&#246;z&#246;tti hasonl&#243;s&#225;got &#225;br&#225;zol&#243; oszlop neve. Az alap&#233;rtelmezett &#233;rt&#233;k a null, amely esetben a rendszer nem ad meg egy &#250;j oszlopot a hasonl&#243;s&#225;goknak.</li><li><code>Threshold</code> : Egy 0,00 &#233;s 1,00 k&#246;z&#246;tti sz&#225;m, amely meghat&#225;rozza azt a hasonl&#243;s&#225;gi pontsz&#225;mot, amelyen k&#233;t &#233;rt&#233;k csoportos&#237;tva lesz.    P&#233;ld&#225;ul a „Szőlő” &#233;s a „Szlő” (hi&#225;nyz&#243; „ő” betűvel) csak akkor lesz csoportos&#237;tva, ha a be&#225;ll&#237;t&#225;s &#233;rt&#233;ke kisebb, mint 0,90.    Az 1,00 k&#252;sz&#246;b&#233;rt&#233;k csak a pontos egyez&#233;seket enged&#233;lyezi.    (Vegye figyelembe, hogy a fuzzy „pontos egyez&#233;s” figyelmen k&#237;v&#252;l hagyhat olyan k&#252;l&#246;nbs&#233;geket, mint p&#233;ld&#225;ul a kis- &#233;s nagybetűhaszn&#225;latot, a sz&#243;sorrendet &#233;s az &#237;r&#225;sjeleket.)    Az alap&#233;rtelmezett &#233;rt&#233;k 0,80.</li><li><code>TransformationTable</code> : Egy t&#225;bl&#225;zat, amely lehetőv&#233; teszi a rekordok egy&#233;ni &#233;rt&#233;kt&#225;rs&#237;t&#225;sok alapj&#225;n t&#246;rt&#233;nő csoportos&#237;t&#225;s&#225;t. Tartalmaznia kell a „From” &#233;s „To” oszlopokat. A „Szőlő” p&#233;ld&#225;ul akkor lesz csoportos&#237;tva a „Mazsola” sz&#243;val, ha meg van adva egy &#225;talak&#237;t&#225;si t&#225;bla, ahol a „From” oszlopban a „Szőlő” &#233;rt&#233;k, a „To” oszlopban pedig a „Mazsola” &#233;rt&#233;k szerepel. Vegye figyelembe, hogy az &#225;talak&#237;t&#225;s az &#225;talak&#237;t&#225;si t&#225;bl&#225;ban tal&#225;lhat&#243; &#246;sszes a sz&#246;vegelőfordul&#225;sra &#233;rv&#233;nyes lesz. A fenti &#225;talak&#237;t&#225;si t&#225;bla eset&#233;n p&#233;ld&#225;ul „A szőlő &#233;des” a „Mazsola &#233;des” kifejez&#233;ssel is csoportos&#237;tva lesz.</li></ul><br />


## Examples

### Example #1 
A táblázat csoportosítása egy [Count] (szám) összesített oszlop hozzáadásával, amely az egyes helyeken lévő alkalmazottak számát tartalmazza (&#34;each Table.RowCount(_))&#34;).
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
