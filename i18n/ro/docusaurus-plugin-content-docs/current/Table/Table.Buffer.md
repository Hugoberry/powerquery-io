---
title: Table.Buffer
---

# Table.Buffer


## Description

Utilizează un tabel ca zonă tampon în memorie, izolându-l de modificările externe în timpul evaluării.


## Syntax

```powerquery
Table.Buffer(
    table as table,
    optional options as record
) as table
```


## Details

Utilizează un tabel ca zonă tampon în memorie, izolându-l de modificările externe în timpul evaluării.    Utilizarea ca zonă tampon este superficială. Aceasta forțează evaluarea oricărei valori scalare a celulelor, dar lasă valorile non-scalare (înregistrări, liste, tabele ș.a.m.d.) ca atare.    <br />    <br />    Rețineți că utilizarea acestei funcții ar putea sau nu face ca interogările să ruleze mai rapid. În unele cazuri, interogările dvs. pot rula mai lent din cauza adăugării     costului citirii tuturor datelor și al stocării lor în memorie, precum și din cauză că utilizarea ca zonă tampon împiedică reformularea în aval. Dacă nu este nevoie ca datele să fie    utilizate ca zonă tampon și doar doriți să împiedicați reformularea în aval, utilizați în schimb <code>Table.StopFolding</code>.


## Examples

### Example #1 
Încărcați toate rândurile unui tabel SQL în memorie, astfel încât orice operațiune descendentă să nu mai poată interoga serverul SQL.
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
