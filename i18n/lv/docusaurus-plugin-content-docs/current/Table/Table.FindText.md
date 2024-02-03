---
title: Table.FindText
---

# Table.FindText


## Description

Tiek atgrieztas visas rindas, kas ietver tabulā norādīto tekstu.


## Syntax

```powerquery
Table.FindText(
    table as table,
    text as text
) as table
```


## Details

Tiek atgrieztas tās tabulas <code>table</code> rindas, kas ietver tekstu <code>text</code>. Ja teksts netiek atrasts, tiek atgriezta tukša tabula.


## Examples

### Example #1 
Atrodiet tās tabulas rindas, kas ietver &#34;Bob&#34;.
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
