---
title: Table.Buffer
---

# Table.Buffer


## Description

Bufferlagrer en tabel i hukommelsen, så den ikke modtager eksterne ændringer under evaluering.


## Syntax

```powerquery
Table.Buffer(
    table as table,
    optional options as record
) as table
```


## Details

Bufferlagrer en tabel i hukommelsen, så den isoleres fra eksterne ændringer under evaluering.    Bufferlagringen er flad. Det gennemtvinger evaluering af skalarcelleværdier, men bevarer ikke-skalarværdier (poster, lister, tabeller osv.), som de er.    <br />    <br />    Bemærk, at brug af denne funktion muligvis eller måske ikke får dine forespørgsler til at køre hurtigere. I nogle tilfælde kan det få dine forespørgsler til at køre langsommere på grund af den tilføjede     omkostninger ved at læse alle dataene og gemme dem i hukommelsen samt det faktum, at bufferlagring forhindrer downstreamfoldning. Hvis dataene ikke behøver at være   bufferlagrede, men du blot ønsker at forhindre downstream foldning, skal du i stedet bruge <code>Table.StopFolding</code>.


## Examples

### Example #1 
Indlæs alle rækkerne i en SQL-tabel i hukommelsen, så downstreamhandlinger ikke længere kan forespørge SQL-serveren.
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
