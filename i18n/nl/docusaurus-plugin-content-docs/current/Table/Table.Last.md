---
title: Table.Last
---

# Table.Last


## Description

Retourneert de laatste rij of een opgegeven standaardwaarde.


## Syntax

```powerquery
Table.Last(
    table as table,
    optional default as any
) as any
```


## Details

Retourneert de laatste rij van de <code>table</code> of een optionele standaardwaarde, <code>default</code>, als de tabel leeg is.


## Examples

### Example #1 
De laatste rij van de tabel zoeken.
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
De laatste rij van de tabel &lt;code&gt;(\{})&lt;/code&gt; zoeken of [a = 0, b = 0] retourneren als de rij leeg is.
```powerquery
Table.Last(Table.FromRecords({}), [a = 0, b = 0])
```

Result: 
```powerquery
[a = 0, b = 0]
```




## Category
Table.Row operations
