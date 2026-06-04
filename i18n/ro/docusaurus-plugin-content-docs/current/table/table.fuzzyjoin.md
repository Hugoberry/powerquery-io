---
title: Table.FuzzyJoin
---

# Table.FuzzyJoin


Unește rândurile din cele două tabele care se potrivesc aproximativ în funcție de cheile date.


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

Unește rândurile din `table1` cu rândurile din `table2`, pe baza potrivirii vagi a valorilor din coloanele cheie selectate după `key1` (pentru `table1`) și `key2` (pentru `table2`).

Potrivirea vagă este o comparație ce se bazează pe similaritatea textului, nu pe egalitate.

În mod implicit, se efectuează o unire internă; totuși, poate fi inclus parametrul opțional `joinKind` pentru a specifica tipul de unire. Opțiunile sunt:

-   `JoinKind.Inner`
-   `JoinKind.LeftOuter`
-   `JoinKind.RightOuter`
-   `JoinKind.FullOuter`
-   `JoinKind.LeftAnti`
-   `JoinKind.RightAnti`
-   `JoinKind.LeftSemi`
-   `JoinKind.RightSemi`

Se poate include un set opțional de `joinOptions` pentru a specifica modul de comparare a coloanelor cheie. Opțiunile sunt:

-   `ConcurrentRequests` : Un număr între 1 și 8 care specifică numărul de fire paralele de utilizat pentru potrivirea vagă. Valoarea implicită este 1.
-   `Culture` : Permite potrivirea înregistrărilor pe baza unor reguli specifice culturii. Poate fi orice nume de cultură valid. De exemplu, o opțiune Cultură „ja-JP” potrivește înregistrările pe baza culturii japoneze. Valoarea implicită este „”, care realizează grupările pe baza culturii invariabile engleze.
-   `IgnoreCase` : O valoare logică (True/False) care permite potrivirea cheilor care nu sunt sensibile la litere mari și mici. De exemplu, când este True, „Struguri” se potrivește cu „struguri”. Valoarea implicită este True.
-   `IgnoreSpace` : O valoare logică (True/False) care permite combinarea părților de text pentru a găsi potriviri. De exemplu, când este True, „Stru guri” este potrivit cu „Struguri”. Valoarea implicită este True.
-   `NumberOfMatches` : Un număr întreg care specifică numărul maxim de rânduri care se potrivesc ce pot fi returnate pentru fiecare rând de intrare. De exemplu, o valoare 1 va returna cel mult un rând care se potrivește pentru fiecare rând de intrare. Dacă această opțiune nu este furnizată, se returnează toate rândurile care se potrivesc.
-   `SimilarityColumnName` : Un nume pentru coloana care arată similaritatea dintre o valoare de intrare și valoarea reprezentativă pentru acea intrare. Valoarea implicită este nulă, caz în care nu se va adăuga o nouă coloană pentru similitudini.
-   `Threshold` : Un număr între 0,00 și 1,00 care specifică scorul de similaritate la care se vor potrivi două valori. De exemplu, „Struguri” și „Sruguri” (lipsește „t”) se potrivesc numai dacă această opțiune este setată la mai puțin de 0,90. Un prag de 1,00 permite numai potriviri exacte. (Rețineți că o „potrivire exactă” vagă poate ignora diferențe precum literele mari și mici, ordinea cuvintelor și semnele de punctuație.) Valoarea implicită este 0,80.
-   `TransformationTable` : Un tabel care permite potrivirea înregistrărilor pe baza mapărilor de valori particularizate. Ar trebui să conțină coloane „De la” și „La”. De exemplu, „Struguri” este potrivit cu „Stafide” dacă se furnizează un tabel de transformare cu coloana „De la” care conține „Struguri” și coloana „La” care conține „Stafide”. Rețineți că transformarea se va aplica în toate aparițiile textului din tabelul de transformare. Cu tabelul de transformare de mai sus, șirul „Strugurii sunt dulci” va fi potrivit cu „Stafidele sunt dulci”.


## Examples

### Example #1
Uniune aproximativă internă la stânga a două tabele, în funcție de \[FirstName\]
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
