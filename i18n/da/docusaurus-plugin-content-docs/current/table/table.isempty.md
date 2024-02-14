---
title: Table.IsEmpty
---

# Table.IsEmpty


Angiver, om tabellen indeholder rækker.


## Syntax

```powerquery
Table.IsEmpty(
    table as table
) as logical
```


## Remarks

Angiver, om <code>table</code> indeholder rækker. Returnerer <code>true</code>, hvis der ikke er nogen rækker (dvs. tabellen er tom). Ellers returneres <code>false</code>.


## Examples

### Example #1 
Find ud af, om tabellen er tom.
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
Find ud af, om tabellen &lt;code&gt;(\{})&lt;/code&gt; er tom.
```powerquery
Table.IsEmpty(Table.FromRecords({}))
```

Result: 
```powerquery
true
```




## Category
Table.Information
