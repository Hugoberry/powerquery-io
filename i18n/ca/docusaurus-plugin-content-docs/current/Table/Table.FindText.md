---
title: Table.FindText
---

# Table.FindText


## Description

Retorna totes les files que contenen el text donat a la taula.


## Syntax

```powerquery
Table.FindText(
    table as table,
    text as text
) as table
```


## Details

Retorna totes les files de la taula <code>table</code> que contenen el text <code>text</code>. Si no es troba el text, es retorna una taula buida.


## Examples

### Example #1 
Cerca les files de la taula que contenen &#34;Bob&#34;.
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
