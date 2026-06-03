---
title: Table.FindText
---

# Table.FindText


Restituisce tutte le righe che contengono il testo specificato nella tabella.


## Syntax

```powerquery
Table.FindText(
    table as table,
    text as text
) as table
```


## Remarks

Restituisce le righe nella tabella `table` che contengono il testo `text`. Se il testo non viene trovato, verrà restituita una tabella vuota.


## Examples

### Example #1
Trovare le righe nella tabella che contengono "Bob".
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
