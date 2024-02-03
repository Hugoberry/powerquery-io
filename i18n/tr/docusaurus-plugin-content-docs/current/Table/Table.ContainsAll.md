---
title: Table.ContainsAll
---

# Table.ContainsAll


## Description

Belirtilen tüm kayıtların tabloda satır olarak görünüp görünmediğini gösterir.


## Syntax

```powerquery
Table.ContainsAll(
    table as table,
    rows as list,
    optional equationCriteria as any
) as logical
```


## Details

<code>rows</code> kayıt listesindeki belirtilen tüm kayıtların <code>table</code> içinde satır olarak görünüp görünmediğini gösterir.    Tablonun satırları arasındaki karşılaştırmayı denetlemek üzere <code>equationCriteria</code> isteğe bağlı parametresi belirtilebilir.


## Examples

### Example #1 
Yalnızca [CustomerID] sütununu karşılaştırarak tabloda tüm satırların bulunup bulunmadığını belirleyin.
```powerquery
Table.ContainsAll(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
    }),
    {
        [CustomerID = 1, Name = "Bill"],
        [CustomerID = 2, Name = "Fred"]
    },
    "CustomerID"
)
```

Result: 
```powerquery
true
```


### Example #2 
Tabloda tüm satırların bulunup bulunmadığını belirler.
```powerquery
Table.ContainsAll(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
    }),
    {
        [CustomerID = 1, Name = "Bill"],
        [CustomerID = 2, Name = "Fred"]
    }
)
```

Result: 
```powerquery
false
```




## Category
Table.Membership
