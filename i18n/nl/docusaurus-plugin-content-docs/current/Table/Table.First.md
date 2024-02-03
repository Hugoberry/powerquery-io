---
title: Table.First
---

# Table.First


## Description

Retourneert de eerste rij of een opgegeven standaardwaarde.


## Syntax

```powerquery
Table.First(
    table as table,
    optional default as any
) as any
```


## Details

Retourneert de eerste rij van de <code>table</code> of een optionele standaardwaarde, <code>default</code>, als de tabel leeg is.


## Examples

### Example #1 
De eerste rij van de tabel zoeken.
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
De eerst rij uit de tabel &lt;code&gt;(\{})&lt;/code&gt; zoeken of [a = 0, b = 0] retourneren als de rij leeg is.
```powerquery
Table.First(Table.FromRecords({}), [a = 0, b = 0])
```

Result: 
```powerquery
[a = 0, b = 0]
```




## Category
Table.Row operations
