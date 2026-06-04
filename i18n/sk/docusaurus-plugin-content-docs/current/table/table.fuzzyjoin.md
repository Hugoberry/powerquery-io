---
title: Table.FuzzyJoin
---

# Table.FuzzyJoin


Spojí riadky z dvoch tabuliek, ktorú sa približne zhodujú na základe daných kľúčov.


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

Spojí riadky tabuľky `table1` s riadkami tabuľky `table2` na základe približnej zhody hodnôt kľúčových stĺpcov vybratých pomocou funkcie `key1` (pre tabuľku `table1`) a `key2` (pre tabuľku `table2`).

Približná zhoda je porovnanie založené na podobnosti textu, nie na jeho rovnakosti.

Predvolene sa vykoná vnútorné spojenie, no možno zahrnúť voliteľný typ `joinKind` a určiť tak typ spojenia. Možnosti zahŕňajú:

-   `JoinKind.Inner`
-   `JoinKind.LeftOuter`
-   `JoinKind.RightOuter`
-   `JoinKind.FullOuter`
-   `JoinKind.LeftAnti`
-   `JoinKind.RightAnti`
-   `JoinKind.LeftSemi`
-   `JoinKind.RightSemi`

Dá sa zahrnúť aj nepovinná množina `joinOptions`, ktorá určuje, ako sa majú kľúčové stĺpce porovnávať. Možnosti zahŕňajú:

-   `ConcurrentRequests` : Číslo medzi 1 a 8 určujúce počet paralelných vlákien, ktoré sa majú použiť na približnú zhodu. Predvolená hodnota je 1.
-   `Culture` : Povoľuje zhodné záznamy na základe pravidiel špecifických pre jazykovú verziu. Môže ísť o ľubovoľný platný názov jazykovej verzie. Možnosť jazykovej verzie ja-JP napríklad posudzuje zhodu záznamov podľa japonskej jazykovej verzie. Predvolená hodnota je "", ktorá posudzuje zhodu na základe invariantnej anglickej jazykovej verzie.
-   `IgnoreCase` : Logická hodnota (true/false), ktorá povoľuje posudzovanie zhody kľúčov bez rozlišovania veľkých a malých písmen. Pri hodnote True sa napríklad výraz „Hrozno“ zhoduje s hodnotami „hrozno“. Predvolená hodnota je True.
-   `IgnoreSpace` : Logická hodnota (true/false), ktorá umožňuje skombinovať časti textu s cieľom nájsť zhody. Pri hodnote True sa napríklad výraz „Hro zno“ zhoduje s hodnotami „hrozno“. Predvolená hodnota je True.
-   `NumberOfMatches` : Celé číslo určujúce maximálny počet zhodných riadkov, ktoré sa dajú vrátiť pre každý vstupný riadok. Hodnota 1 sa napríklad vráti pri riadku s najväčšou zhodou pre každý vstupný riadok. Ak táto možnosť nie je zadaná, vrátia sa všetky zhodné riadky.
-   `SimilarityColumnName` : Názov stĺpca, ktorý zobrazuje podobnosť medzi vstupnou a reprezentatívnou hodnotou daného vstupu. Predvolená hodnota je null. V takom prípade sa nepridá nový stĺpec pre podobnosti.
-   `Threshold` : Číslo medzi 0,00 a 1,00 určujúce skóre podobnosti, pri ktorom sa budú dve hodnoty zhodovať. Hodnoty Hrozno“ a Hrono“ (chýba písmeno z) sa napríklad zhodujú len vtedy, ak je táto možnosť nastavená na hodnotu nižšiu ako 0,90. Prahová hodnota 1,00 povoľuje iba presné zhody. (Upozorňujeme, že približná „presná zhoda“ môže ignorovať rozdiely, ako sú malé a veľké písmená, slovosled a interpunkcia.) Predvolená hodnota je 0,80.
-   `TransformationTable` : Tabuľka, ktorá povoľuje zhodné záznamy na základe priradení vlastných hodnôt. Mala by obsahovať stĺpce „From“ a „To“. Hodnota „Hrozno“ sa napríklad zhoduje s hodnotou „Hrozienko“, ak sa zadá tabuľka transformácie, v ktorej stĺpec „From“ obsahuje výraz „Hrozno“ a stĺpec „To“ obsahuje výraz „Hrozienko“. Všimnite si, že transformácia sa použije na všetky výskyty textu v tabuľke transformácie. Pomocou vyššie uvedenej tabuľky transformácie sa aj hodnoty „Hrozno je sladké“ budú zhodovať s hodnotami „Hrozienko je sladké“.


## Examples

### Example #1
Ľavé vnútorné približné spojenie dvoch tabuliek na základe \[FirstName\]
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
