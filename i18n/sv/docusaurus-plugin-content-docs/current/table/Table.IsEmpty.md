---
title: Table.IsEmpty
---

# Table.IsEmpty


Anger om tabellen innehåller några rader.


## Syntax

```powerquery
Table.IsEmpty(
    table as table
) as logical
```


## Remarks

Anger om <code>table</code> innehåller några rader. Returnerar <code>true</code> om det inte finns några rader (tabellen är tom, med andra ord). Annars returneras <code>false</code>.


## Examples

### Example #1 
Kontrollera om tabellen är tom.
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
Kontrollera om tabellen &lt;code&gt;(\{})&lt;/code&gt; är tom.
```powerquery
Table.IsEmpty(Table.FromRecords({}))
```

Result: 
```powerquery
true
```




## Category
Table.Information
