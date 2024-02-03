---
title: Table.First
---

# Table.First


## Description

Επιστρέφει την πρώτη γραμμή ή μια καθορισμένη προεπιλεγμένη τιμή.


## Syntax

```powerquery
Table.First(
    table as table,
    optional default as any
) as any
```


## Details

Επιστρέφει την πρώτη γραμμή του <code>table</code> ή μια προαιρετική προεπιλεγμένη τιμή, <code>default</code>, εάν ο πίνακας είναι κενός.


## Examples

### Example #1 
Βρίσκει την πρώτη γραμμή του πίνακα.
```powerquery
Table.First(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"]
    })
)
```

Result: 
```powerquery
[CustomerID = 1, Name = "Bob", Phone = "123-4567"]
```


### Example #2 
Βρείτε την πρώτη γραμμή του πίνακα &lt;code&gt;(\{})&lt;/code&gt; ή επιστρέψτε [a = 0, b = 0] εάν είναι κενή.
```powerquery
Table.First(Table.FromRecords({}), [a = 0, b = 0])
```

Result: 
```powerquery
[a = 0, b = 0]
```




## Category
Table.Row operations
