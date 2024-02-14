---
title: Table.Last
---

# Table.Last


Zwraca ostatni wiersz lub określoną wartość domyślną.


## Syntax

```powerquery
Table.Last(
    table as table,
    optional default as any
) as any
```


## Remarks

Zwraca ostatni wiersz z tabeli <code>table</code> lub opcjonalną wartość domyślną <code>default</code>, gdy tabela jest pusta.


## Examples

### Example #1 
Znajdź ostatni wiersz w tabeli.
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
Znajdź ostatni wiersz w tabeli &lt;code&gt;(\{})&lt;/code&gt; lub zwróć wartość [a = 0, b = 0], jeśli ta tabela jest pusta.
```powerquery
Table.Last(Table.FromRecords({}), [a = 0, b = 0])
```

Result: 
```powerquery
[a = 0, b = 0]
```




## Category
Table.Row operations
