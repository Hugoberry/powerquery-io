---
title: Table.IsDistinct
---

# Table.IsDistinct


## Description

Tabloda yalnızca ayrı satırların bulunup bulunmadığını (yinelenen satır olmadığını) gösterir.


## Syntax

```powerquery
Table.IsDistinct(
    table as table,
    optional comparisonCriteria as any
) as logical
```


## Details

<code>table</code> içinde yalnızca ayrı satırların bulunup bulunmadığını (yinelenen satır olmadığını) gösterir. Satırların tümü ayrıysa <code>true</code> döndürür, ayrı değilse <code>false</code> döndürür.    İsteğe bağlı <code>comparisonCriteria</code> parametresi, tablodaki hangi sütunların yineleme için test edildiğini belirtir. <code>comparisonCriteria</code> belirtilmediği takdirde tüm sütunlar test edilir.


## Examples

### Example #1 
Tablonun benzersiz olup olmadığını belirler.
```powerquery
Table.IsDistinct(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
    })
)
```

Result: 
```powerquery
true
```


### Example #2 
Tablonun sütunlar açısından benzersiz olup olmadığını belirler.
```powerquery
Table.IsDistinct(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 5, Name = "Bob", Phone = "232-1550"]
    }),
    "Name"
)
```

Result: 
```powerquery
false
```




## Category
Table.Membership
