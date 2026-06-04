---
title: Record.RenameFields
---

# Record.RenameFields


Εφαρμόζει μετονομασίες από μια λίστα στη μορφή \{ old, new \}.


## Syntax

```powerquery
Record.RenameFields(
    record as record,
    renames as list,
    optional missingField as MissingField.Type
) as record
```


## Remarks

Επιστρέφει μια εγγραφή μετά τη μετονομασία των πεδίων της εισόδου `record` στα νέα ονόματα πεδίων που καθορίζονται στη λίστα `renames`. Για πολλαπλές μετονομασίες, μπορεί να χρησιμοποιηθεί μια ένθετη λίστα (\{ \{old1, new1\}, \{old2, new2\} \}).


## Examples

### Example #1
Μετονομάζει το πεδίο "UnitPrice" σε "Price" από την εγγραφή.
```powerquery
Record.RenameFields(
    [OrderID = 1, CustomerID = 1, Item = "Fishing rod", UnitPrice = 100.0],
    {"UnitPrice", "Price"}
)
```

Result: 
```powerquery
[OrderID = 1, CustomerID = 1, Item = "Fishing rod", Price = 100.0]
```


### Example #2
Μετονομάζει τα πεδία "UnitPrice" σε "Price" και "OrderNum" σε "OrderID" από την εγγραφή.
```powerquery
Record.RenameFields(
    [OrderNum = 1, CustomerID = 1, Item = "Fishing rod", UnitPrice = 100.0],
    {
        {"UnitPrice", "Price"},
        {"OrderNum", "OrderID"}
    }
)
```

Result: 
```powerquery
[OrderID = 1, CustomerID = 1, Item = "Fishing rod", Price = 100.0]
```




## Category
Record.Transformations
