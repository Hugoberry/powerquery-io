---
title: Table.First
---

# Table.First


## Description

Az első sort vagy egy adott alapértelmezett értéket ad vissza.


## Syntax

```powerquery
Table.First(
    table as table,
    optional default as any
) as any
```


## Details

A(z) <code>table</code> tábla első sorát adja vissza, vagy egy nem kötelező alapértéket (<code>default</code>), ha a tábla üres.


## Examples

### Example #1 
Megkeresi a tábla első sorát.
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
A(z) &lt;code&gt;(\{})&lt;/code&gt; tábla első sorának, vagy ha üres, [a = 0, b = 0] értéknek a visszaadása.
```powerquery
Table.First(Table.FromRecords({}), [a = 0, b = 0])
```

Result: 
```powerquery
[a = 0, b = 0]
```




## Category
Table.Row operations