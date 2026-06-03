---
title: Table.LastN
---

# Table.LastN


末尾から指定された数の行を返します。


## Syntax

```powerquery
Table.LastN(
    table as table,
    countOrCondition as any
) as table
```


## Remarks

`countOrCondition` の値に応じて、テーブル `table` の末尾から行を返します:

-   `countOrCondition` が数値の場合は、末尾 - `countOrCondition` の位置からその数の行を返します。
-   `countOrCondition` が条件の場合は、昇順位置でその条件を満たさない行の手前までの条件を満たす行を返します。


## Examples

### Example #1
テーブルの末尾の 2 行を探します。
```powerquery
Table.LastN(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"]
    }),
    2
)
```

Result: 
```powerquery
Table.FromRecords({
    [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
    [CustomerID = 3, Name = "Paul", Phone = "543-7890"]
})
```


### Example #2
テーブル内の \[a\] > 0 である最終行を探します。
```powerquery
Table.LastN(
    Table.FromRecords({
        [a = -1, b = -2],
        [a = 3, b = 4],
        [a = 5, b = 6]
    }),
    each _ [a] > 0
)
```

Result: 
```powerquery
Table.FromRecords({
    [a = 3, b = 4],
    [a = 5, b = 6]
})
```




## Category
Table.Row operations
