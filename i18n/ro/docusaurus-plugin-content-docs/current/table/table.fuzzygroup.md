---
title: Table.FuzzyGroup
---

# Table.FuzzyGroup


Grupează rândurile din tabel pe baza unei potriviri vagi a cheilor.


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

Grupează rândurile `table` prin potrivire vagă a valorilor din coloana specificată, `key`, pentru fiecare rând. Pentru fiecare grup, se construiește o înregistrare care conține coloanele cheie (și valorile lor), împreună cu toate coloanele agregate specificate de `aggregatedColumns`. Această funcție nu poate garanta returnarea unei ordini fixe a rândurilor.

Un set opțional de `options` poate fi inclus pentru a specifica modul de comparare a coloanelor cheie. Opțiunile includ:

-   `Culture` : Permite gruparea înregistrărilor pe baza unor reguli specifice culturii. Poate fi orice nume de cultură valid. De exemplu, o opțiune Cultură „ja-JP” grupează înregistrările pe baza culturii japoneze. Valoarea implicită este „”, care realizează grupările pe baza culturii invariabile engleze.
-   `IgnoreCase` : O valoare logică (True/False) care permite gruparea cheilor care nu sunt sensibile la litere mari și mici. De exemplu, când este True, „Struguri” este grupat cu „struguri”. Valoarea implicită este True.
-   `IgnoreSpace` : O valoare logică (True/False) care permite combinarea părților de text pentru a găsi grupuri. De exemplu, când este True, „Stru guri” este grupat cu „Struguri”. Valoarea implicită este True.
-   `SimilarityColumnName` : Un nume pentru coloana care arată similaritatea dintre o valoare de intrare și valoarea reprezentativă pentru acea intrare. Valoarea implicită este nulă, caz în care nu se va adăuga o nouă coloană pentru similitudini.
-   `Threshold` : Un număr între 0,00 și 1,00 care specifică scorul de similaritate la care se vor grupa două valori. De exemplu, „Struguri” și „Sruguri” (lipsește „t”) se grupează numai dacă această opțiune este setată la mai puțin de 0,90. Un prag de 1,00 permite numai potriviri exacte. (Rețineți că o „potrivire exactă” vagă poate ignora diferențe precum literele mari și mici, ordinea cuvintelor și semnele de punctuație.) Valoarea implicită este 0,80.
-   `TransformationTable` : Un tabel care permite gruparea înregistrărilor pe baza mapărilor de valori particularizate. Ar trebui să conțină coloane „De la” și „La”. De exemplu, „Struguri” este grupat cu „Stafide” dacă se furnizează un tabel de transformare cu coloana „De la” care conține „Struguri” și coloana „La” care conține „Stafide”. Rețineți că transformarea se va aplica în toate aparițiile textului din tabelul de transformare. Cu tabelul de transformare de mai sus, șirul „Strugurii sunt dulci” va fi grupat cu „Stafidele sunt dulci”.


## Examples

### Example #1
Grupați tabelul adăugând o coloană agregată \[Count\] care conține numărul de angajați din fiecare locație (`each Table.RowCount(_)`).
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
