---
title: Table.IsEmpty
---

# Table.IsEmpty


## Description

Norāda, vai tabulā ir ietvertas jebkādas rindas.


## Syntax

```powerquery
Table.IsEmpty(
    table as table
) as logical
```


## Details

Norāda, vai <code>table</code> ietver jebkādas rindas. Tiek atgriezta vērtība <code>true</code>, ja nav nevienas rindas (piemēram, ja tabula ir tukša); pretējā gadījumā tiek atgriezta vērtība <code>false</code>.


## Examples

### Example #1 
Nosakiet, vai tabula ir tukša.
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
Nosakiet, vai tabula &lt;code&gt;(\{})&lt;/code&gt; ir tukša.
```powerquery
Table.IsEmpty(Table.FromRecords({}))
```

Result: 
```powerquery
true
```




## Category
Table.Information
