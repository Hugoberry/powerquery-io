---
title: Table.FuzzyGroup
---

# Table.FuzzyGroup


Zoskupí riadky v tabuľke na základe približnej zhody kľúčov.


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

Zoskupí riadky tabuľky `table` podľa približnej zhody hodnôt v zadanom stĺpci `key` (pre každý riadok). Pre každú skupinu sa vytvorí záznam, ktorý obsahuje kľúčové stĺpce (a ich hodnoty) spolu so všetkými agregovanými stĺpcami určenými pomocou `aggregatedColumns`. Táto funkcia nemôže zaručiť vrátenie pevného poradia riadkov.

Dá sa zahrnúť aj nepovinná množina `options`, ktorá určuje, ako sa majú kľúčové stĺpce porovnávať. Možnosti zahŕňajú:

-   `Culture` : Povoľuje zoskupenie záznamov na základe pravidiel špecifických pre jazykovú verziu. Môže ísť o ľubovoľný platný názov jazykovej verzie. Možnosť jazykovej verzie ja-JP napríklad zoskupí záznamy podľa japonskej jazykovej verzie. Predvolená hodnota je "", ktorá zoskupuje na základe invariantnej anglickej jazykovej verzie.
-   `IgnoreCase` : Logická hodnota (true/false), ktorá povoľuje zoskupenie kľúčov bez rozlišovania veľkých a malých písmen. Pri hodnote True sa napríklad výraz „Hrozno“ zoskupí s hodnotami „hrozno“. Predvolená hodnota je True.
-   `IgnoreSpace` : Logická hodnota (true/false), ktorá umožňuje skombinovať časti textu s cieľom nájsť skupiny. Pri hodnote True sa napríklad výraz „Hro zno“ zoskupí s hodnotami „hrozno“. Predvolená hodnota je True.
-   `SimilarityColumnName` : Názov stĺpca, ktorý zobrazuje podobnosť medzi vstupnou a reprezentatívnou hodnotou daného vstupu. Predvolená hodnota je null. V takom prípade sa nepridá nový stĺpec pre podobnosti.
-   `Threshold` : Číslo medzi 0,00 a 1,00 určujúce skóre podobnosti, pri ktorom sa dve hodnoty zoskupia. Hodnoty Hrozno“ a Hrono“ (chýba písmeno z) sa napríklad zoskupia len vtedy, ak je táto možnosť nastavená na hodnotu nižšiu ako 0,90. Prahová hodnota 1,00 povoľuje iba presné zhody. (Upozorňujeme, že približná „presná zhoda“ môže ignorovať rozdiely, ako sú malé a veľké písmená, slovosled alebo interpunkcia.) Predvolená hodnota je 0,80.
-   `TransformationTable` : Tabuľka, ktorá povoľuje zoskupenie na základe priradení vlastných hodnôt. Mala by obsahovať stĺpce „From“ a „To“. Hodnota „Hrozno“ sa napríklad zoskupí s hodnotou „Hrozienko“, ak sa zadá tabuľka transformácie, v ktorej stĺpec „From“ obsahuje výraz „Hrozno“ a stĺpec „To“ obsahuje výraz „Hrozienko“. Všimnite si, že transformácia sa použije na všetky výskyty textu v tabuľke transformácie. Pomocou vyššie uvedenej tabuľky transformácie sa aj hodnoty „Hrozno je sladké“ budú zoskupovať s hodnotami „hrozienko je sladké“.


## Examples

### Example #1
Zoskupte tabuľku pridaním agregačného stĺpca \[Count\], ktorý obsahuje počet zamestnancov v každej lokalite (`each Table.RowCount(_)`).
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
