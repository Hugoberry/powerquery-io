---
title: Table.FromValue
---

# Table.FromValue


## Description

Δημιουργεί έναν πίνακα με μια στήλη από τις παρεχόμενες τιμές.


## Syntax

```powerquery
Table.FromValue(
    value as any,
    optional options as record
) as table
```


## Details

Δημιουργεί έναν πίνακα με μια στήλη που περιέχει την παρεχόμενη τιμή ή λίστα τιμών, <code>value</code>. Μπορεί να καθοριστεί μια προαιρετική παράμετρος εγγραφής, <code>options</code>, για τον έλεγχο των ακόλουθων επιλογών:    <ul>    <li> <code>DefaultColumnName</code> : Το όνομα στήλης που χρησιμοποιείται κατά τη δημιουργία ενός πίνακα από μια λίστα ή μια ανυσματική τιμή.</li>    </ul>  


## Examples

### Example #1 
Δημιουργήστε έναν πίνακα από την τιμή 1.
```powerquery
Table.FromValue(1)
```

Result: 
```powerquery
Table.FromRecords({[Value = 1]})
```


### Example #2 
Δημιουργεί έναν πίνακα από τη λίστα.
```powerquery
Table.FromValue({1, "Bob", "123-4567"})
```

Result: 
```powerquery
Table.FromRecords({
    [Value = 1],
    [Value = "Bob"],
    [Value = "123-4567"]
})
```


### Example #3 
Δημιουργία πίνακα από την τιμή 1 με ένα προσαρμοσμένο όνομα στήλης.
```powerquery
Table.FromValue(1, [DefaultColumnName = "MyValue"])
```

Result: 
```powerquery
Table.FromRecords({[MyValue = 1]})
```




## Category
Table.Table construction
