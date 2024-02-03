---
title: Table.ToRows
---

# Table.ToRows


## Description

Δημιουργεί μια λίστα με ένθετες λίστες τιμών γραμμής από έναν πίνακα.


## Syntax

```powerquery
Table.ToRows(
    table as table
) as list
```


## Details

Δημιουργεί μια λίστα με ένθετες λίστες τιμών στήλης τον πίνακα, <code>table</code>.  Κάθε στοιχείο λίστας είναι μια εσωτερική λίστα που περιέχει τις τιμές γραμμής.


## Examples

### Example #1 
Δημιουργεί μια λίστα των τιμών γραμμής από τον πίνακα.
```powerquery
Table.ToRows(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"]
    })
)
```

Result: 
```powerquery
{
    {1, "Bob", "123-4567"},
    {2, "Jim", "987-6543"},
    {3, "Paul", "543-7890"}
}
```




## Category
Table.Conversions
