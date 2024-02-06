---
title: Table.First
---

# Table.First


Restituisce la prima riga o un valore predefinito specificato.


## Syntax

```powerquery
Table.First(
    table as table,
    optional default as any
) as any
```


## Remarks

Restituisce la prima riga di <code>table</code> o il valore predefinito facoltativo <code>default</code>, se la tabella è vuota.


## Examples

### Example #1 
Trovare la prima riga della tabella.
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
Trovare la prima riga della tabella &lt;code&gt;(\{})&lt;/code&gt; o restituire [a = 0, b = 0] se vuota.
```powerquery
Table.First(Table.FromRecords({}), [a = 0, b = 0])
```

Result: 
```powerquery
[a = 0, b = 0]
```




## Category
Table.Row operations
