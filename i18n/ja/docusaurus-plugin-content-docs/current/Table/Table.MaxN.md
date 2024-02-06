---
title: Table.MaxN
---

# Table.MaxN


指定された条件を使用して、最大の行を返します。


## Syntax

```powerquery
Table.MaxN(
    table as table,
    comparisonCriteria as any,
    countOrCondition as any
) as table
```


## Remarks

<code>comparisonCriteria</code> に基づいて <code>table</code> の最大の行を返します。    行が並べ替えられた後、<code>countOrCondition</code> パラメーターを指定して、さらに結果をフィルター処理する必要があります。並べ替えアルゴリズムは、並べ替え後の結果を常に同じにするとは限らないことに注意してください。<code>countOrCondition</code> パラメーターには、複数の形式を指定できます。    <ul>        <li> 数を指定した場合、昇順で最大 <code>countOrCondition</code> 個の項目を含むリストが返されます。</li>        <li> 条件を指定した場合、初期状態でその条件を満たす項目のリストが返されます。条件を満たさない項目があると、それ以降の項目は考慮されません。</li> </ul>


## Examples

### Example #1 
テーブルで条件 [a] &gt; 0 を満たし、列 [a] の最大値を含む行を探します。フィルターが適用される前に行が並べ替えられます。
```powerquery
Table.MaxN(
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 0, b = 0],
        [a = 6, b = 2]
    }),
    "a",
    each [a] > 0
)
```

Result: 
```powerquery
Table.FromRecords({
    [a = 6, b = 2],
    [a = 2, b = 4]
})
```


### Example #2 
テーブルで条件 [b] &gt; 0 を満たし、列 [a] の最大値を含む行を探します。フィルターが適用される前に行が並べ替えられます。
```powerquery
Table.MaxN(
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 8, b = 0],
        [a = 6, b = 2]
    }),
    "a",
    each [b] > 0
)
```

Result: 
```powerquery
Table.FromRecords({})
```




## Category
Table.Ordering
