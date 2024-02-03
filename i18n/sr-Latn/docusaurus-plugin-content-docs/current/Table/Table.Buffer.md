---
title: Table.Buffer
---

# Table.Buffer


## Description

Baferuje tabelu u memoriju, pri čemu je izoluje od spoljašnjih promena tokom procene.


## Syntax

```powerquery
Table.Buffer(
    table as table,
    optional options as record
) as table
```


## Details

Baferuje tabelu u memoriju, pri čemu je izoluje od spoljnih promena tokom određivanja vrednosti.    Stavljanje u bafer je plitko. Nameće određivanje vrednosti bilo koje skalarne vrednosti ćelije, ali ostavlja vrednosti koje nisu skalarne (zapisi, liste, tabele i drugo) takve kakve jesu.    <br />    <br />    Imajte na umu da korišćenje ove funkcije može ali ne mora da ubrza izvršavanje vaših upita. U nekim slučajevima može da uspori izvršavanje vaših upita zbog dodatnih     troškova čitanja svih podataka i njihovog skladištenja u memoriji, kao i zbog činjenice da stavljanje u bafer sprečava posledično preklapanje. Ako podaci ne moraju da se    stave u bafer, već samo želite da sprečite posledično preklapanje, umesto toga koristite <code>Table.StopFolding</code>.


## Examples

### Example #1 
Učitajte sve redove SQL tabele u memoriju, tako da sve dolazne operacije više neće moći da izvršavaju upite za SQL server.
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
