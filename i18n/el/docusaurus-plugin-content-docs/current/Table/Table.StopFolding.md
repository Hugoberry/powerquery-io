---
title: Table.StopFolding
---

# Table.StopFolding


## Description

Εμποδίζει την εκτέλεση τυχόν μεταγενέστερων λειτουργιών στην αρχική προέλευση των δεδομένων.


## Syntax

```powerquery
Table.StopFolding(
    table as table
) as table
```


## Details

Εμποδίζει την εκτέλεση τυχόν μεταγενέστερων λειτουργιών στην αρχική προέλευση των δεδομένων στο <code>table</code>.


## Examples

### Example #1 
Πραγματοποιεί λήψη δεδομένων από έναν πίνακα SQL με τρόπο που αποτρέπει την εκτέλεση τυχόν μεταγενέστερων λειτουργιών ως ερώτημα στον SQL Server.
```powerquery
let
    Source = Sql.Database("SomeSQLServer", "MyDb"),
    MyTable = Source{[Item="MyTable"]}[Data],
    MyLocalTable = Table.StopFolding(dbo_MyTable)
in
    MyLocalTable
```

Result: 
```powerquery
table
```




## Category
Table.Other
