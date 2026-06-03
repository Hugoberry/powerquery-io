---
title: Table.MinN
---

# Table.MinN


指定された条件を使用して、最小の行を返します。


## Syntax

```powerquery
Table.MinN(
    table as table,
    comparisonCriteria as any,
    countOrCondition as any
) as table
```


## Remarks

`comparisonCriteria` に基づいて `table` の最小の行を返します。行が並べ替えられた後、`countOrCondition` パラメーターを指定して、さらに結果をフィルター処理する必要があります。並べ替えアルゴリズムは、並べ替え後の結果を常に同じにするとは限らないことに注意してください。`countOrCondition` パラメーターには、複数の形式を指定できます。

-   数を指定した場合、昇順で最大 `countOrCondition` 個の項目を含むリストが返されます。
-   条件を指定した場合、初期状態でその条件を満たす項目のリストが返されます。条件を満たさない項目があると、それ以降の項目は考慮されません。


## Examples

### Example #1
テーブルで条件 \[a\] &lt; 3 を満たし、列 \[a\] の最小値を含む行を探します。フィルターが適用される前に行が並べ替えられます。
```powerquery
Table.MinN(
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 0, b = 0],
        [a = 6, b = 4]
    }),
    "a",
    each [a] < 3
)
```

Result: 
```powerquery
Table.FromRecords({
    [a = 0, b = 0],
    [a = 2, b = 4]
})
```


### Example #2
テーブルで条件 \[b\] &lt; 0 を満たし、列 \[a\] の最小値を含む行を探します。フィルターが適用される前に行が並べ替えられます。
```powerquery
Table.MinN(
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 8, b = 0],
        [a = 6, b = 2]
    }),
    "a",
    each [b] < 0
)
```

Result: 
```powerquery
Table.FromRecords({})
```




## Category
Table.Ordering
