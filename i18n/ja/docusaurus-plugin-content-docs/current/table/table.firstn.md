---
title: Table.FirstN
---

# Table.FirstN


先頭から指定された数の行を返します。


## Syntax

```powerquery
Table.FirstN(
    table as table,
    countOrCondition as any
) as table
```


## Remarks

<code>countOrCondition</code> の値に応じて、テーブル <code>table</code> の先頭から行を返します:    <ul>    <li> <code>countOrCondition</code> が数値の場合は、(先頭から) その数の行を返します。</li>    <li> <code>countOrCondition</code> が条件の場合は、その条件を満たさない行の手前までの条件を満たす行を返します。</li></ul>


## Examples

### Example #1 
テーブルの先頭の 2 行を探します。
```powerquery
Table.FirstN(
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
    [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
    [CustomerID = 2, Name = "Jim", Phone = "987-6543"]
})
```


### Example #2 
テーブル内の [a] &gt; 0 である先頭行を探します。
```powerquery
Table.FirstN(
    Table.FromRecords({
        [a = 1, b = 2],
        [a = 3, b = 4],
        [a = -5, b = -6]
    }),
    each [a] > 0
)
```

Result: 
```powerquery
Table.FromRecords({
    [a = 1, b = 2],
    [a = 3, b = 4]
})
```




## Category
Table.Row operations
