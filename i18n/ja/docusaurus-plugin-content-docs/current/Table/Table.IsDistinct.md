---
title: Table.IsDistinct
---

# Table.IsDistinct


## Description

テーブルに一意の行のみが含まれている (重複が含まれていない) かどうかを示します。


## Syntax

```powerquery
Table.IsDistinct(
    table as table,
    optional comparisonCriteria as any
) as logical
```


## Details

<code>table</code> に一意の行のみが含まれている (重複が含まれていない) かどうかを示します。行が一意の場合は <code>true</code>、それ以外の場合は <code>false</code> を返します。    省略可能なパラメーター <code>comparisonCriteria</code> には、重複をテストするテーブルの列を指定します。<code>comparisonCriteria</code> を指定しなかった場合は、すべての列をテストします。


## Examples

### Example #1 
テーブルが一意かどうかを調べます。
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
テーブルが一意かどうかを列で調べます。
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
