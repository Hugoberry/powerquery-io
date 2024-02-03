---
title: Table.AddFuzzyClusterColumn
---

# Table.AddFuzzyClusterColumn


## Description

Dodaje nove kolone sa reprezentativnim vrednostima dobijenim približnim grupisanjem vrednosti navedene kolone u tabeli.


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

Dodaje novu kolonu <code>newColumnName</code> u <code>table</code> sa reprezentativnim vrednostima <code>columnName</code>. Reprezentativne vrednosti se dobijaju približnim podudaranjem vrednosti iz <code>columnName</code>, za svaki red.    Može da se uklјuči opcionalni skup <code>options</code> da bi se naveo način poređenja kolona klјuča. Opcije uklјučuju:     <ul><li><code>Culture</code> : Omogućava grupisanje zapisa na osnovu pravila specifičnih za kulturu. To može da bude bilo koje važeće ime kulture. Na primer, opcija kulture „ja-JP“ grupiše zapise na osnovu japanske kulture. Podrazumevana vrednost je „“, koja grupiše na osnovu nepromenlјive engleske kulture.</li><li><code>IgnoreCase</code> : Logička (true/false) vrednost koja omogućava grupisanje klјuča koje ne razlikuje mala i velika slova. Na primer, kada se podesi vrednost „true“, „Grožđe“ se grupiše sa „grožđe“. Podrazumevana vrednost je „true“.</li><li><code>IgnoreSpace</code> : Logička (true/false) vrednost koja omogućava kombinovanje delova teksta kako bi se pronašle grupe. Na primer, kada se podesi vrednost „true“, „Gro žđe“ se grupiše sa „Grožđe“. Podrazumevana vrednost je „true“.</li><li><code>SimilarityColumnName</code> : Ime za kolonu koja prikazuje sličnost između ulazne vrednosti i reprezentativne vrednosti za taj unos. Podrazumevana opcija je bez vrednosti i u tom slučaju neće biti dodata nova kolona za sličnosti.</li><li><code>Threshold</code> : Broj između 0,00 i 1,00 koji navodi ocenu sličnosti po kojoj će se dve vrednosti grupisati.    Na primer, „Grožđe“ i „Grože“ (nedostaje slovo „đ“) grupišu se zajedno samo ako je ova opcija podešena na manje od 0,90.    Granična vrednost od 1,00 dozvoljava samo potpuna podudaranja.    (Imajte u vidu da približno „Potpuno podudaranje“ može da zanemaruje razlike kao što su veličina slova, redosled reči i interpunkcije.)    Podrazumevana vrednost je 0,80.</li><li><code>TransformationTable</code> : Tabela koja omogućava grupisanje zapisa na osnovu mapiranja prilagođene vrednosti. Trebalo bi da sadrži kolone „Iz“ i „U“. Na primer, „Grožđe se grupiše sa „Suvo grožđe“ ako je data tabela transformacije sa kolonom „Iz“ koja sadrži „Grožđe“ i kolonom „U“ koja sadrži „Suvo grožđe“. Imajte na umu da se transformacija primenjuje na sva pojavlјivanja teksta u tabeli transformacije. Na osnovu gorenavedene tabele transformacije i „Grožđe je slatko“ grupisaće se sa „Suvo grožđe je slatko“.</li></ul><br />    


## Examples

### Example #1 
Pronađite reprezentativne vrednosti za lokaciju zaposlenih.
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
