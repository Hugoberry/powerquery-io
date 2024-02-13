---
title: Table.FindText
---

# Table.FindText


वे सभी पंक्तियाँ लौटाता है जिनमें तालिका में दिया गया पाठ है.


## Syntax

```powerquery
Table.FindText(
    table as table,
    text as text
) as table
```


## Remarks

तालिका <code>table</code> की वे पंक्तियाँ लौटाता है जिनमें पाठ <code>text</code> है. अगर पाठ नहीं मिलता है, तो एक रिक्त तालिका को लौटाया जाता है.


## Examples

### Example #1 
तालिका की उन पंक्तियों को ढूँढें जिनमें &#34;Bob&#34; है.
```powerquery
Table.FindText(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
    }),
    "Bob"
)
```

Result: 
```powerquery
Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]})
```




## Category
Table.Row operations
