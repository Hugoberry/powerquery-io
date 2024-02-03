---
title: Table.SelectRowsWithErrors
---

# Table.SelectRowsWithErrors


## Description

Tiek atgriezta tabula tikai ar tām ievades tabulas rindām, kas ietver kļūdu vismaz vienā no šūnām. Ja ir norādīts kolonnu saraksts, tad kļūdas tiek pārbaudītas tikai šūnās, kas ir norādītajās kolonnās.


## Syntax

```powerquery
Table.SelectRowsWithErrors(
    table as table,
    optional columns as list
) as table
```


## Details

Tiek atgriezta tabula tikai ar tām ievades tabulas rindām, kas ietver kļūdu vismaz vienā no šūnām. Ja ir norādīts kolonnu saraksts, tad kļūdas tiek pārbaudītas tikai šūnās, kas ir norādītajās kolonnās.


## Examples

### Example #1 
Atlasīt to klientu vārdus, kuriem atbilstošajās rindās ir kļūdas.
```powerquery
Table.SelectRowsWithErrors(
    Table.FromRecords({
        [CustomerID = ..., Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
    })
)[Name]
```

Result: 
```powerquery
{"Bob"}
```




## Category
Table.Row operations
