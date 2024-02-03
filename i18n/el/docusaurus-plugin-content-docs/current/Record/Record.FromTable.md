---
title: Record.FromTable
---

# Record.FromTable


## Description

Δημιουργεί μια εγγραφή από έναν πίνακα της μορφής \{[Name = name, Value = value]}.


## Syntax

```powerquery
Record.FromTable(
    table as table
) as record
```


## Details

Επιστρέφει μια εγγραφή από έναν πίνακα εγγραφών <code>table</code> που περιέχει ονόματα πεδίων και ονόματα τιμών <code>\{[Name = name, Value = value]}</code>. Εάν τα ονόματα πεδίων δεν είναι μοναδικά, παρουσιάζεται εξαίρεση.


## Examples

### Example #1 
Δημιουργεί μια εγγραφή από τον πίνακα της μορφής Table.FromRecords(\{[Name = &#34;CustomerID&#34;, Value = 1], [Name = &#34;Name&#34;, Value = &#34;Bob&#34;], [Name = &#34;Phone&#34;, Value = &#34;123-4567&#34;]}).
```powerquery
Record.FromTable(
    Table.FromRecords({
        [Name = "CustomerID", Value = 1],
        [Name = "Name", Value = "Bob"],
        [Name = "Phone", Value = "123-4567"]
    })
)
```

Result: 
```powerquery
[CustomerID = 1, Name = "Bob", Phone = "123-4567"]
```




## Category
Record.Serialization
