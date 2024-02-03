---
title: Record.RenameFields
---

# Record.RenameFields


## Description

Εφαρμόζει μετονομασίες από μια λίστα στη μορφή \{ old, new }.


## Syntax

```powerquery
Record.RenameFields(
    record as record,
    renames as list,
    optional missingField as MissingField.Type
) as record
```


## Details

Επιστρέφει μια εγγραφή μετά τη μετονομασία των πεδίων της εισόδου <code>record</code> στα νέα ονόματα πεδίων που καθορίζονται στη λίστα <code>renames</code>. Για πολλαπλές μετονομασίες, μπορεί να χρησιμοποιηθεί μια ένθετη λίστα (\{ \{old1, new1}, \{old2, new2} }.


## Examples

### Example #1 
Μετονομάζει το πεδίο &#34;UnitPrice&#34; σε &#34;Price&#34; από την εγγραφή.
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
Μετονομάζει τα πεδία &#34;UnitPrice&#34; σε &#34;Price&#34; και &#34;OrderNum&#34; σε &#34;OrderID&#34; από την εγγραφή.
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
