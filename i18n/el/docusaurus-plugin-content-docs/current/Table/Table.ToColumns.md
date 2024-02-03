---
title: Table.ToColumns
---

# Table.ToColumns


## Description

Δημιουργεί μια λίστα με ένθετες λίστες τιμών στήλης από έναν πίνακα.


## Syntax

```powerquery
Table.ToColumns(
    table as table
) as list
```


## Details

Δημιουργεί μια λίστα με ένθετες λίστες τιμών στήλης τον πίνακα, <code>table</code>.  Κάθε στοιχείο λίστας είναι μια εσωτερική λίστα που περιέχει τις τιμές στήλης.


## Examples

### Example #1 
Δημιουργεί μια λίστα των τιμών στήλης από τον πίνακα.
```powerquery
Table.ToColumns(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"]
    })
)
```

Result: 
```powerquery
{{1, 2}, {"Bob", "Jim"}, {"123-4567", "987-6543"}}
```




## Category
Table.Conversions
