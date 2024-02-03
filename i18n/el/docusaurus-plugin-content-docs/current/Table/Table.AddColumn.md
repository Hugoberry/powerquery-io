---
title: Table.AddColumn
---

# Table.AddColumn


## Description

Προσθέτει μια στήλη με το καθορισμένο όνομα. Η τιμή υπολογίζεται με τη χρήση της καθορισμένης συνάρτησης επιλογής με κάθε γραμμή να λαμβάνεται ως είσοδος.


## Syntax

```powerquery
Table.AddColumn(
    table as table,
    newColumnName as text,
    columnGenerator as function,
    optional columnType as type
) as table
```


## Details

Προσθέτει μια στήλη με το όνομα <code>newColumnName</code> στον πίνακα <code>table</code>. Οι τιμές για τη στήλη υπολογίζονται με τη χρήση της καθορισμένης συνάρτησης επιλογής <code>columnGenerator</code> με κάθε γραμμή να λαμβάνεται ως είσοδος.


## Examples

### Example #1 
Προσθέστε μια στήλη αριθμών με το όνομα &#34;TotalPrice&#34; στον πίνακα, με κάθε τιμή να είναι το άθροισμα των στηλών [Price] και [Shipping].
```powerquery
Table.AddColumn(
    Table.FromRecords({
        [OrderID = 1, CustomerID = 1, Item = "Fishing rod", Price = 100.0, Shipping = 10.00],
        [OrderID = 2, CustomerID = 1, Item = "1 lb. worms", Price = 5.0, Shipping = 15.00],
        [OrderID = 3, CustomerID = 2, Item = "Fishing net", Price = 25.0, Shipping = 10.00]
    }),
    "TotalPrice",
    each [Price] + [Shipping],
    type number
)
```

Result: 
```powerquery
Table.FromRecords({
    [OrderID = 1, CustomerID = 1, Item = "Fishing rod", Price = 100, Shipping = 10, TotalPrice = 110],
    [OrderID = 2, CustomerID = 1, Item = "1 lb. worms", Price = 5, Shipping = 15, TotalPrice = 20],
    [OrderID = 3, CustomerID = 2, Item = "Fishing net", Price = 25, Shipping = 10, TotalPrice = 35]
})
```




## Category
Table.Transformation
