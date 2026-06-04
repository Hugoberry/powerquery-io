---
title: Table.FuzzyJoin
---

# Table.FuzzyJoin


Rindas no abām aptuveni atbilstošajām tabulām tiek savienotas, pamatojoties uz norādītajām atslēgām.


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

Rindas no `table1` savieno ar rindām no `table2`, pamatojoties uz vērtību aptuveno atbilstību atslēgas kolonnās, kuras ir atlasītas pēc `key1` (attiecībā uz `table1`) un `key2` (attiecībā uz `table2`).

Aptuvenā atbilstība ir salīdzinājums, kas balstīts uz teksta līdzību, ne vienādību.

Pēc noklusējuma tiek veikta iekšējā savienošana, taču var iekļaut papildu `joinKind`, lai norādītu savienojuma veidu. Opcijas ietver:

-   `JoinKind.Inner`
-   `JoinKind.LeftOuter`
-   `JoinKind.RightOuter`
-   `JoinKind.FullOuter`
-   `JoinKind.LeftAnti`
-   `JoinKind.RightAnti`
-   `JoinKind.LeftSemi`
-   `JoinKind.RightSemi`

Papildu `joinOptions` komplekts var tikt iekļauts, lai norādītu, kā salīdzināt atslēgas kolonnas. Opcijas iekļauj:

-   `ConcurrentRequests` : Skaitlis diapazonā no 1 līdz 8, kas norāda to paralēlo pavedienu skaitu, ko izmantot aptuvenajai atbilstībai. Noklusējuma vērtība ir 1.
-   `Culture` : Atļauj ierakstu saskaņošanu atbilstoši kultūrspecifiskām kārtulām. Tas var būt jebkurš derīgs kultūras nosaukums. Piemēram, kultūras opcija "ja-JP" saskaņo ierakstus atbilstoši japāņu valodas kultūrai. Noklusējuma vērtība ir "", kas saskaņo atbilstoši angļu valodas invarianta kultūrai.
-   `IgnoreCase` : Loģiskā vērtība (true/false), kas atļauj reģistrnejutīgu atslēgu saskaņošanu. Piemēram, ja true, "Vīnogas" tiek saskaņotas ar "vīnogas". Noklusējuma vērtība ir true.
-   `IgnoreSpace` : Loģiskā vērtība (true/false), kas ļauj kombinēt teksta daļas, lai atrastu atbilstības. Piemēram, ja true, "Vīn ogas" tiek saskaņots ar "Vīnogas". Noklusējuma vērtība ir true.
-   `NumberOfMatches` : Vesels skaitlis, kas norāda maksimālo atbilstošo rindu skaitu, ko var atgriezt katrai ievades rindai. Piemēram, vērtība 1 atgriezīs tikai vienu atbilstošu rindu katrai ievades rindai. Ja šī opcija netiek norādīta, tiek atgrieztas visas atbilstošās rindas.
-   `SimilarityColumnName` : Kolonnas nosaukums, kas norāda ievades vērtības līdzību ar šīs ievades reprezentatīvo vērtību. Noklusējuma vērtība ir Null, un tādā gadījumā jauna kolonna līdzībām netiek pievienota.
-   `Threshold` : Skaitlis diapazonā no 0,00 līdz 1,00, kas norāda līdzības vērtējumu, pie kura tiks atrastas divas vērtības. Piemēram, "Vīnogas" un "Vīnoas" (trūkst "g"),) tiek saskaņotas tikai tad, ja šī opcija ir iestatīta uz mazāku par 0,90. Slieksnis 1,00 atļauj tikai precīzas atbilstības. (Ņemiet vērā, ka aptuvenā "precīzā atbilstība" var ignorēt atšķirības, piemēram, lielos burtus, vārdu secību un pieturzīmes.) Noklusējuma vērtība ir 0,80.
-   `TransformationTable` : Tabula, kas ļauj saskaņot ierakstus atbilstoši pielāgotu vērtību kartējumiem. Tajā ir jābūt kolonnām "No" un "Uz". Piemēram, vērtība "Vīnogas" tiek saskaņota ar "Rozīnes", ja transformācijas tabulā kolonna "No", kurā ir vērtība "Vīnogas", kolonna "Uz", kas kurā ir vērtība "Rozīnes". Ņemiet vērā, ka transformācija tiks lietota visiem transformācijas tabulas teksta gadījumiem. Izmantojot iepriekšminēto transformācijas tabulu, teksts "Vīnogas ir saldas" tiks saskaņots arī ar tekstu "Rozīnes ir saldas".


## Examples

### Example #1
Kreisās puses iekšējo aptuvenais divu tabulu apvienojums, pamatojoties uz \[FirstName\]
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
