---
title: Table.First
---

# Table.First


Vrne prvo vrstico ali navedeno privzeto vrednost.


## Syntax

```powerquery
Table.First(
    table as table,
    optional default as any
) as any
```


## Remarks

Vrne prvo vrstico tabele `table` ali izbirno privzeto vrednost, `default`, če je tabela prazna.


## Examples

### Example #1
Poiščite prvo vrstico tabele.
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
Poiščite prvo vrstico tabele `({})` ali vrnite \[a = 0, b = 0\], če je prazna.
```powerquery
Table.First(Table.FromRecords({}), [a = 0, b = 0])
```

Result: 
```powerquery
[a = 0, b = 0]
```




## Category
Table.Row operations
