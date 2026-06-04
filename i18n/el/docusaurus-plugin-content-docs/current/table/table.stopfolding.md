---
title: Table.StopFolding
---

# Table.StopFolding


Εμποδίζει την εκτέλεση τυχόν μεταγενέστερων λειτουργιών στην αρχική προέλευση των δεδομένων.


## Syntax

```powerquery
Table.StopFolding(
    table as table
) as table
```


## Remarks

Εμποδίζει την εκτέλεση τυχόν μεταγενέστερων λειτουργιών στην αρχική προέλευση των δεδομένων στο `table`.


## Examples

### Example #1
Πραγματοποιεί λήψη δεδομένων από έναν πίνακα SQL με τρόπο που αποτρέπει την εκτέλεση τυχόν μεταγενέστερων λειτουργιών ως ερώτημα στον SQL Server.
```powerquery
let
    Source = Sql.Database("SomeSQLServer", "MyDb"),
    MyTable = Source{[Item="MyTable"]}[Data],
    MyLocalTable = Table.StopFolding(MyTable)
in
    MyLocalTable
```

Result: 
```powerquery
table
```




## Category
Table.Other
