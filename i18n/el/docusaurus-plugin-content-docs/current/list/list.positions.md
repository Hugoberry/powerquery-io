---
title: List.Positions
---

# List.Positions


Επιστρέφει μια λίστα με τις αποκλίσεις για την είσοδο.


## Syntax

```powerquery
List.Positions(
    list as list
) as list
```


## Remarks

Επιστρέφει μια λίστα με τις αντισταθμίσεις για την καθορισμένη λίστα εισόδου.

-   `list`: Η λίστα εισόδου.

Όταν χρησιμοποιείτε `List.Transform` για να αλλάξετε μια λίστα, η λίστα θέσεων μπορεί να χρησιμοποιηθεί για να αποκτήσει πρόσβαση ο μετασχηματισμός στη θέση.


## Examples

### Example #1
Βρείτε τις αποκλίσεις των τιμών της λίστας \{1, 2, 3, 4, null, 5\}.
```powerquery
List.Positions({1, 2, 3, 4, null, 5})
```

Result: 
```powerquery
{0, 1, 2, 3, 4, 5}
```


### Example #2
Δημιουργήστε έναν πίνακα που εκχωρεί ένα αναγνωριστικό σε κάθε πελάτη με βάση τη θέση του πελάτη στη λίστα.
```powerquery
let
    customers = {"Alice", "Bob", "Charlie", "Diana"},
    resultTable =
        Table.FromRecords(
            List.Transform(
                List.Positions(customers),
                each [
                    IDNumber = _ + 1,   // Make it 1-based
                    CustomerName = customers{_}
                ]
            ),
            type table [IDNumber = Int64.Type, CustomerName = text]
        )
in
    resultTable
```

Result: 
```powerquery
#table (type table[IDNumber = Int64.Type, CustomerName = text],
{
    {1, "Alice"},
    {2, "Bob"},
    {3, "Charlie"},
    {4, "Diana"}
})
```




## Category
List.Selection
