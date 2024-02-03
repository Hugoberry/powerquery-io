---
title: Table.Last
---

# Table.Last


## Description

Επιστρέφει την τελευταία γραμμή ή μια καθορισμένη προεπιλεγμένη τιμή.


## Syntax

```powerquery
Table.Last(
    table as table,
    optional default as any
) as any
```


## Details

Επιστρέφει την τελευταία γραμμή του <code>table</code> ή μια προαιρετική προεπιλεγμένη τιμή, <code>default</code>, εάν ο πίνακας είναι κενός.


## Examples

### Example #1 
Βρίσκει την τελευταία γραμμή του πίνακα.
```powerquery
Table.Last(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"]
    })
)
```

Result: 
```powerquery
[CustomerID = 3, Name = "Paul", Phone = "543-7890"]
```


### Example #2 
Βρείτε την τελευταία γραμμή του πίνακα &lt;code&gt;(\{})&lt;/code&gt; ή επιστρέψτε [a = 0, b = 0] εάν είναι κενή.
```powerquery
Table.Last(Table.FromRecords({}), [a = 0, b = 0])
```

Result: 
```powerquery
[a = 0, b = 0]
```




## Category
Table.Row operations
