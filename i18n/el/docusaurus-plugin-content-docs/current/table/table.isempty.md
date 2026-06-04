---
title: Table.IsEmpty
---

# Table.IsEmpty


Υποδεικνύει αν ο πίνακας περιέχει γραμμές.


## Syntax

```powerquery
Table.IsEmpty(
    table as table
) as logical
```


## Remarks

Υποδεικνύει αν ο πίνακας `table` περιέχει γραμμές. Επιστρέφει την τιμή `true`, αν δεν υπάρχουν γραμμές (δηλαδή ο πίνακας είναι κενός), διαφορετικά επιστρέφει τιμή `false`.


## Examples

### Example #1
Προσδιορίζει αν ο πίνακας είναι κενός.
```powerquery
Table.IsEmpty(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"]
    })
)
```

Result: 
```powerquery
false
```


### Example #2
Προσδιορίστε αν ο πίνακας `({})` είναι κενός.
```powerquery
Table.IsEmpty(Table.FromRecords({}))
```

Result: 
```powerquery
true
```




## Category
Table.Information
