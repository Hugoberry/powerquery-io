---
title: Record.FromTable
---

# Record.FromTable


Δημιουργεί μια εγγραφή από έναν πίνακα της μορφής \{\[Name = name, Value = value\]\}.


## Syntax

```powerquery
Record.FromTable(
    table as table
) as record
```


## Remarks

Επιστρέφει μια εγγραφή από έναν πίνακα εγγραφών `table` που περιέχει ονόματα πεδίων και ονόματα τιμών `{[Name = name, Value = value]}`. Εμφανίζεται σφάλμα αν τα ονόματα πεδίων δεν είναι μοναδικά.


## Examples

### Example #1
Δημιουργεί μια εγγραφή από τον πίνακα της μορφής Table.FromRecords(\{\[Name = "CustomerID", Value = 1\], \[Name = "Name", Value = "Bob"\], \[Name = "Phone", Value = "123-4567"\]\}).
```powerquery
Record.FromTable(
    Table.FromRecords({
        [Name = "CustomerID", Value = 1],
        [Name = "Name", Value = "Bob"],
        [Name = "Phone", Value = "123-4567"]
    })
)
```

Result: 
```powerquery
[CustomerID = 1, Name = "Bob", Phone = "123-4567"]
```




## Category
Record.Serialization
