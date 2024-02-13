---
title: Table.IsEmpty
---

# Table.IsEmpty


Geeft aan of de tabel rijen bevat.


## Syntax

```powerquery
Table.IsEmpty(
    table as table
) as logical
```


## Remarks

Geeft aan of de <code>table</code> rijen bevat. Retourneert <code>true</code> als er geen rijen zijn (d.w.z. de tabel is leeg). Als de tabel niet leeg is, wordt <code>false</code> geretourneerd.


## Examples

### Example #1 
Bepalen of de tabel leeg is.
```powerquery
Table.IsEmpty(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"]
    })
)
```

Result: 
```powerquery
false
```


### Example #2 
Bepalen of de tabel &lt;code&gt;(\{})&lt;/code&gt; leeg is.
```powerquery
Table.IsEmpty(Table.FromRecords({}))
```

Result: 
```powerquery
true
```




## Category
Table.Information
