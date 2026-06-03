---
title: List.Mode
---

# List.Mode


リスト内で出現回数が最も多い値を返します。


## Syntax

```powerquery
List.Mode(
    list as list,
    optional equationCriteria as any
) as any
```


## Remarks

`list` で最も頻繁に表示される項目を返します。リストが空の場合は、エラーが発生します。複数の項目が同じ最大頻度で表示される場合は、最後の項目が選択されます。 オプションの比較検索条件の値、`equationCriteria` を指定して、等価テストを制御できます。


## Examples

### Example #1
リスト `{"A", 1, 2, 3, 3, 4, 5}` 内で出現回数が最も多い項目を求めます。
```powerquery
List.Mode({"A", 1, 2, 3, 3, 4, 5})
```

Result: 
```powerquery
3
```


### Example #2
リスト `{"A", 1, 2, 3, 3, 4, 5, 5}` 内で出現回数が最も多い項目を求めます。
```powerquery
List.Mode({"A", 1, 2, 3, 3, 4, 5, 5})
```

Result: 
```powerquery
5
```




## Category
List.Averages
