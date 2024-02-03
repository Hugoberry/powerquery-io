---
title: Table.AddFuzzyClusterColumn
---

# Table.AddFuzzyClusterColumn


## Description

Adaugă o nouă coloană cu valorile reprezentative obținute prin gruparea vagă a valorilor coloanei specificate în tabel.


## Syntax

```powerquery
Table.AddFuzzyClusterColumn(
    table as table,
    columnName as text,
    newColumnName as text,
    optional options as record
) as table
```


## Details

Adaugă o nouă coloană <code>newColumnName</code> la <code>table</code> cu valorile reprezentative <code>columnName</code>. Reprezentanții sunt obținuți prin potrivirea vagă a valorilor din <code>columnName</code> pentru fiecare rând.    Un set opțional de <code>options</code> poate fi inclus pentru a specifica modul de comparare a coloanelor cheie. Opțiunile sunt:     <ul><li><code>Culture</code> : Permite gruparea &#238;nregistrărilor pe baza unor reguli specifice culturii. Poate fi orice nume de cultură valid. De exemplu, o opțiune Cultură „ja-JP” grupează &#238;nregistrările pe baza culturii japoneze. Valoarea implicită este „”, care realizează grupările pe baza culturii invariabile engleze.</li><li><code>IgnoreCase</code> : O valoare logică (True/False) care permite gruparea cheilor care nu sunt sensibile la litere mari și mici. De exemplu, c&#226;nd este True, „Struguri” este grupat cu „struguri”. Valoarea implicită este True.</li><li><code>IgnoreSpace</code> : O valoare logică (True/False) care permite combinarea părților de text pentru a găsi grupuri. De exemplu, c&#226;nd este True, „Stru guri” este grupat cu „Struguri”. Valoarea implicită este True.</li><li><code>SimilarityColumnName</code> : Un nume pentru coloana care arată similaritatea dintre o valoare de intrare și valoarea reprezentativă pentru acea intrare. Valoarea implicită este nulă, caz &#238;n care nu se va adăuga o nouă coloană pentru similitudini.</li><li><code>Threshold</code> : Un număr &#238;ntre 0,00 și 1,00 care specifică scorul de similaritate la care se vor grupa două valori.    De exemplu, „Struguri” și „Sruguri” (lipsește „t”) se grupează numai dacă această opțiune este setată la mai puțin de 0,90.    Un prag de 1,00 permite numai potriviri exacte.    (Rețineți că o „potrivire exactă” vagă poate ignora diferențe precum literele mari și mici, ordinea cuvintelor și semnele de punctuație.)    Valoarea implicită este 0,80.</li><li><code>TransformationTable</code> : Un tabel care permite gruparea &#238;nregistrărilor pe baza mapărilor de valori particularizate. Ar trebui să conțină coloane „De la” și „La”. De exemplu, „Struguri” este grupat cu „Stafide” dacă se furnizează un tabel de transformare cu coloana „De la” care conține „Struguri” și coloana „La” care conține „Stafide”. Rețineți că transformarea se va aplica &#238;n toate aparițiile textului din tabelul de transformare. Cu tabelul de transformare de mai sus, șirul „Strugurii sunt dulci” va fi grupat cu „Stafidele sunt dulci”.</li></ul><br />    


## Examples

### Example #1 
Găsiți valorile reprezentative pentru locația angajaților.
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
