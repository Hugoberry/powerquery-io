---
title: Table.FuzzyGroup
---

# Table.FuzzyGroup


Grupē tabulas rindas, pamatojoties uz atslēgu aptuveno atbilstību.


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

Grupē `table` rindas pēc aptuvenās atbilstības vērtībām norādītajā kolonnā `key`. Katrai grupai tiek izveidots ieraksts, kurā ir iekļautas atslēgas kolonnas (un to vērtības) kopā ar visām apkopotajām kolonnām, ko norāda `aggregatedColumns`. Šī funkcija nevar garantēt fiksētas rindu secības atgriešanu.

Var iekļaut papildu `options` kopu, lai norādītu, kā salīdzināt atslēgas kolonnas. Opcijas ietver:

-   `Culture` : Atļauj ierakstu grupēšanu atbilstoši kultūrspecifiskām kārtulām. Tas var būt jebkurš derīgs kultūras nosaukums. Piemēram, kultūras opcija "ja-JP" grupē ierakstus atbilstoši japāņu valodas kultūrai. Noklusējuma vērtība ir "", kas grupē atbilstoši angļu valodas invarianta kultūrai.
-   `IgnoreCase` : Loģiskā vērtība (true/false), kas atļauj reģistrnejutīgu atslēgu grupēšanu. Piemēram, ja true, "Vīnogas" tiek grupētas ar "vīnogas". Noklusējuma vērtība ir true.
-   `IgnoreSpace` : Loģiskā vērtība (true/false), kas ļauj kombinēt teksta daļas, lai atrastu grupas. Piemēram, ja true, "Vīn ogas" tiek grupēts ar "Vīnogas". Noklusējuma vērtība ir true.
-   `SimilarityColumnName` : Kolonnas nosaukums, kas norāda ievades vērtības līdzību ar šīs ievades reprezentatīvo vērtību. Noklusējuma vērtība ir Null, un tādā gadījumā jauna kolonna līdzībām netiek pievienota.
-   `Threshold` : Skaitlis diapazonā 0,00 līdz 1,00, kas norāda līdzības vērtējumu, pie kura tiks grupētas divas vērtības. Piemēram, "Vīnogas" un "Vīnoas" (trūkst "g"),) tiek grupētas kopā tikai tad, ja šī opcija ir iestatīta uz mazāku par 0,90. Slieksnis 1,00 atļauj tikai precīzas atbilstības. (Ņemiet vērā, ka aptuvenā "precīzā atbilstība" var ignorēt atšķirības, piemēram, lielos burtus, vārdu secību un pieturzīmes.) Noklusējuma vērtība ir 0,80.
-   `TransformationTable` : Tabula, kas ļauj grupēt ierakstus atbilstoši pielāgotu vērtību kartējumiem. Tajā ir jābūt kolonnām "No" un "Uz". Piemēram, vērtība "Vīnogas" tiek grupēta ar "Rozīnes", ja transformācijas tabulā kolonna "No", kurā ir vērtība "Vīnogas", kolonna "Uz", kas kurā ir vērtība "Rozīnes". Ņemiet vērā, ka transformācija tiks lietota visiem transformācijas tabulas teksta gadījumiem. Izmantojot iepriekšminēto transformācijas tabulu, teksts "Vīnogas ir saldas" tiks grupēts arī ar tekstu "Rozīnes ir saldas".


## Examples

### Example #1
Grupē tabulu, pievienojot apkopojuma kolonnu \[Count\], kurā ir darbinieku skaits katrā atrašanās vietā (`each Table.RowCount(_)`).
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
