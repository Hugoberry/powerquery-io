---
title: Table.FromValue
---

# Table.FromValue


Δημιουργεί έναν πίνακα με μια στήλη από τις παρεχόμενες τιμές.


## Syntax

```powerquery
Table.FromValue(
    value as any,
    optional options as record
) as table
```


## Remarks

Creates a table with a column containing the provided value or list of values, `value`. An optional record parameter, `options`, may be specified to control the following options:

-   `DefaultColumnName`: The column name used when constructing a table from a list or scalar value.


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
