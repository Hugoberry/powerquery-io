---
title: Table.Buffer
---

# Table.Buffer


## Description

Lentelė kaupiama atmintyje ir vertinimo metu neleidžiama atlikti išorinių keitimų.


## Syntax

```powerquery
Table.Buffer(
    table as table,
    optional options as record
) as table
```


## Details

Lentelė kaupiama atmintyje ir vertinimo metu neleidžiama atlikti išorinių keitimų.    Kaupimas yra paviršinis. Visos skaliarinių langelių reikšmės įvertinamos priverstinai, bet neskaliarinės reikšmės (įrašai, sąrašai, lentelės ir t. t.) paliekamos tokios, kokios yra.    <br />    <br />    Atminkite, kad naudojant šią funkciją užklausos nebūtinai gali veikti greičiau. Kai kuriais atvejais užklausos gali veikti lėčiau dėl įtrauktos parinkties     skaityti ir saugoti atmintyje visus duomenis bei dėl to, kad kaupimas neleidžia proceso pabaigos perdavimo. Jei duomenys neturi būti    kaupiami, bet tiesiog norite išvengti proceso pabaigos perdavimo, vietoj to naudokite <code>Table.StopFolding</code>.


## Examples

### Example #1 
Įkelkite visas SQL lentelės eilutes į atmintį, kad jokios proceso pabaigos operacijos daugiau negalėtų pateikti užklausos SQL serveriui.
```powerquery
let
    Source = Sql.Database("SomeSQLServer", "MyDb"),
    MyTable = Source{[Item="MyTable"]}[Data],
    BufferMyTable = Table.Buffer(dbo_MyTable)
in
    BufferMyTable
```

Result: 
```powerquery
table
```




## Category
Table.Other
