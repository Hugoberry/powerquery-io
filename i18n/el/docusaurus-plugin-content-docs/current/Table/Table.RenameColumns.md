---
title: Table.RenameColumns
---

# Table.RenameColumns


## Description

Εφαρμόζει μετονομασίες στη μορφή \{old, new}.


## Syntax

```powerquery
Table.RenameColumns(
    table as table,
    renames as list,
    optional missingField as MissingField.Type
) as table
```


## Details

Εκτελεί τις δεδομένες μετονομασίες στις στήλες του πίνακα <code>table</code>. Η λειτουργία αντικατάστασης <code>renames</code> αποτελείται από μια λίστα δύο τιμών, το παλιό όνομα στήλης και το νέο όνομα στήλης, τα οποία παρέχονται σε λίστα.    Εάν η στήλη δεν υπάρχει, παρουσιάζεται εξαίρεση εκτός αν η προαιρετική παράμετρος <code>missingField</code> καθορίζει μια εναλλακτική (για παράδειγμα, <code>MissingField.UseNull</code> ή <code>MissingField.Ignore</code>).


## Examples

### Example #1 
Αντικαθιστά το όνομα στήλης &#34;CustomerNum&#34; με &#34;CustomerID&#34; στον πίνακα.
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
Αντικαθιστά το όνομα στήλης &#34;CustomerNum&#34; με &#34;CustomerID&#34; και &#34;PhoneNum&#34; με &#34;Phone&#34; στον πίνακα.
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
Αντικαθιστά το όνομα στήλης &#34;NewCol&#34; με &#34;NewColumn&#34; στον πίνακα και παραβλέψτε την, αν η στήλη δεν υπάρχει.
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
