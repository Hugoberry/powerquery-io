---
title: Table.RemoveLastN
---

# Table.RemoveLastN


## Description

最後の N 行を削除したテーブルを返します。


## Syntax

```powerquery
Table.RemoveLastN(
    table as table,
    optional countOrCondition as any
) as table
```


## Details

テーブル <code>table</code> の最後の <code>countOrCondition</code> 行が含まれないテーブルを返します。        削除される行の数は、省略可能なパラメーター <code>countOrCondition</code> によって決まります。    <ul>    <li> <code>countOrCondition</code> が省略された場合は、最後の行だけが削除されます。</li>    <li> <code>countOrCondition</code> が数の場合は、(末尾から) その数の行が削除されます。</li>    <li> <code>countOrCondition</code> が条件の場合は、その条件を満たす行が、条件を満たさない行まで削除されます。</li>    </ul>


## Examples

### Example #1 
テーブルの最終行を削除します。
```powerquery
Table.RemoveLastN(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
    }),
    1
)
```

Result: 
```powerquery
Table.FromRecords({
    [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
    [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
    [CustomerID = 3, Name = "Paul", Phone = "543-7890"]
})
```


### Example #2 
テーブルの [CustomerID] &gt; 2 である最終行を削除します。
```powerquery
Table.RemoveLastN(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
    }),
    each [CustomerID] >= 2
)
```

Result: 
```powerquery
Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]})
```




## Category
Table.Row operations
