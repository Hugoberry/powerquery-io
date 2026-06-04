---
title: Table.ReplaceErrorValues
---

# Table.ReplaceErrorValues


Αντικαθιστά τις τιμές σφαλμάτων στις καθορισμένες στήλες με την αντίστοιχη τιμή που καθορίζεται.


## Syntax

```powerquery
Table.ReplaceErrorValues(
    table as table,
    errorReplacement as list
) as table
```


## Remarks

Replaces the error values in the specified columns of the `table` with the new values in the `errorReplacement` list. The format of the list is \{\{column1, value1\}, ...\}. There may only be one replacement value per column, specifying the column more than once will result in an error.


## Examples

### Example #1
Αντικαθιστά την τιμή σφάλματος με το κείμενο "world" στον πίνακα.
```powerquery
Table.ReplaceErrorValues(
    Table.FromRows({{1, "hello"}, {3, ...}}, {"A", "B"}),
    {"B", "world"}
)
```

Result: 
```powerquery
Table.FromRecords({
    [A = 1, B = "hello"],
    [A = 3, B = "world"]
})
```


### Example #2
Αντικαθιστά την τιμή σφάλματος στη στήλη A με το κείμενο "hello" και στη στήλη B με το κείμενο "world" στον πίνακα.
```powerquery
Table.ReplaceErrorValues(
    Table.FromRows({{..., ...}, {1, 2}}, {"A", "B"}),
    {{"A", "hello"}, {"B", "world"}}
)
```

Result: 
```powerquery
Table.FromRecords({
    [A = "hello", B = "world"],
    [A = 1, B = 2]
})
```




## Category
Table.Transformation
