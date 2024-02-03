---
title: Table.AddFuzzyClusterColumn
---

# Table.AddFuzzyClusterColumn


## Description

Pievieno jaunu kolonnu ar reprezentatīvām vērtībām, kas iegūtas, aptuveni grupējot tabulā norādītās kolonnas vērtības.


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

Šim (<code>table</code>) pievieno jaunu kolonnu <code>newColumnName</code> ar reprezentatīvām <code>columnName</code> vērtībām. Katrai rindai pārstāvji tiek iegūti, aptuveni saskaņojot <code>columnName</code> vērtības.    Var iekļaut papildu <code>options</code> kopu, lai norādītu, kā salīdzināt atslēgas kolonnas. Opcijas ietver:     <ul><li><code>Culture</code> : Atļauj ierakstu grupēšanu atbilstoši kultūrspecifiskām kārtulām. Tas var būt jebkurš derīgs kultūras nosaukums. Piemēram, kultūras opcija &quot;ja-JP&quot; grupē ierakstus atbilstoši japāņu valodas kultūrai. Noklusējuma vērtība ir &quot;&quot;, kas grupē atbilstoši angļu valodas invarianta kultūrai.</li><li><code>IgnoreCase</code> : Loģiskā vērtība (true/false), kas atļauj reģistrnejutīgu atslēgu grupēšanu. Piemēram, ja true, &quot;Vīnogas&quot; tiek grupētas ar &quot;vīnogas&quot;. Noklusējuma vērtība ir true.</li><li><code>IgnoreSpace</code> : Loģiskā vērtība (true/false), kas ļauj kombinēt teksta daļas, lai atrastu grupas. Piemēram, ja true, &quot;Vīn ogas&quot; tiek grupēts ar &quot;Vīnogas&quot;. Noklusējuma vērtība ir true.</li><li><code>SimilarityColumnName</code> : Kolonnas nosaukums, kas norāda ievades vērtības līdzību ar šīs ievades reprezentatīvo vērtību. Noklusējuma vērtība ir Null, un tādā gadījumā jauna kolonna līdzībām netiek pievienota.</li><li><code>Threshold</code> : Skaitlis diapazonā 0,00 līdz 1,00, kas norāda līdzības vērtējumu, pie kura tiks grupētas divas vērtības.    Piemēram, &quot;Vīnogas&quot; un &quot;Vīnoas&quot; (trūkst &quot;g&quot;),) tiek grupētas kopā tikai tad, ja šī opcija ir iestatīta uz mazāku par 0,90.    Slieksnis 1,00 atļauj tikai precīzas atbilstības.    (Ņemiet vērā, ka aptuvenā &quot;precīzā atbilstība&quot; var ignorēt atšķirības, piemēram, lielos burtus, vārdu secību un pieturzīmes.)    Noklusējuma vērtība ir 0,80.</li><li><code>TransformationTable</code> : Tabula, kas ļauj grupēt ierakstus atbilstoši pielāgotu vērtību kartējumiem. Tajā ir jābūt kolonnām &quot;No&quot; un &quot;Uz&quot;. Piemēram, vērtība &quot;Vīnogas&quot; tiek grupēta ar &quot;Rozīnes&quot;, ja transformācijas tabulā kolonna &quot;No&quot;, kurā ir vērtība &quot;Vīnogas&quot;, kolonna &quot;Uz&quot;, kas kurā ir vērtība &quot;Rozīnes&quot;. Ņemiet vērā, ka transformācija tiks lietota visiem transformācijas tabulas teksta gadījumiem. Izmantojot iepriekšminēto transformācijas tabulu, teksts &quot;Vīnogas ir saldas&quot; tiks grupēts arī ar tekstu &quot;Rozīnes ir saldas&quot;.</li></ul><br />    


## Examples

### Example #1 
Atrodiet reprezentatīvas vērtības darbinieku atrašanās vietai.
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
