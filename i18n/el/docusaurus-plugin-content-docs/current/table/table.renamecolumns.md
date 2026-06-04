---
title: Table.RenameColumns
---

# Table.RenameColumns


Εφαρμόζει μετονομασίες στη μορφή \{old, new\}.


## Syntax

```powerquery
Table.RenameColumns(
    table as table,
    renames as list,
    optional missingField as MissingField.Type
) as table
```


## Remarks

Εκτελεί τις δεδομένες μετονομασίες στις στήλες του πίνακα `table`. Η λειτουργία αντικατάστασης `renames` αποτελείται από μια λίστα δύο τιμών, το παλιό όνομα στήλης και το νέο όνομα στήλης, τα οποία παρέχονται σε λίστα. Αν η στήλη δεν υπάρχει, προκύπτει σφάλμα, εκτός αν η προαιρετική παράμετρος `missingField` καθορίζει μια εναλλακτική (π.χ. `MissingField.UseNull` ή `MissingField.Ignore`).


## Examples

### Example #1
Αντικαθιστά το όνομα στήλης "CustomerNum" με "CustomerID" στον πίνακα.
```powerquery
Table.RenameColumns(
    Table.FromRecords({[CustomerNum = 1, Name = "Bob", Phone = "123-4567"]}),
    {"CustomerNum", "CustomerID"}
)
```

Result: 
```powerquery
Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]})
```


### Example #2
Αντικαθιστά το όνομα στήλης "CustomerNum" με "CustomerID" και "PhoneNum" με "Phone" στον πίνακα.
```powerquery
Table.RenameColumns(
    Table.FromRecords({[CustomerNum = 1, Name = "Bob", PhoneNum = "123-4567"]}),
    {
        {"CustomerNum", "CustomerID"},
        {"PhoneNum", "Phone"}
    }
)
```

Result: 
```powerquery
Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]})
```


### Example #3
Αντικαθιστά το όνομα στήλης "NewCol" με "NewColumn" στον πίνακα και παραβλέψτε την, αν η στήλη δεν υπάρχει.
```powerquery
Table.RenameColumns(
    Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]}),
    {"NewCol", "NewColumn"},
    MissingField.Ignore
)
```

Result: 
```powerquery
Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]})
```




## Category
Table.Column operations
