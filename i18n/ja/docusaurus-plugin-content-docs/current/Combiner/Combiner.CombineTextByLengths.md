---
title: Combiner.CombineTextByLengths
---

# Combiner.CombineTextByLengths


指定された長さを使用してテキストのリストに結合する関数を返します。


## Syntax

```powerquery
Combiner.CombineTextByLengths(
    lengths as list,
    optional template as text
) as function
```


## Remarks

指定された長さを使用してテキス値トのリストを 1 つのテキスト値に結合する関数を返します。


## Examples

### Example #1 
各入力値から指定された文字数を抽出して、テキスト値のリストを結合します。
```powerquery
Combiner.CombineTextByLengths({1, 2, 3})({"aaa", "bbb", "ccc"})
```

Result: 
```powerquery
"abbccc"
```


### Example #2 
最初に結果にテンプレート テキストを事前に入力した後に、指定された文字数を抽出して、テキスト値のリストを結合します。
```powerquery
Combiner.CombineTextByLengths({1, 2, 3}, "*********")({"aaa", "bbb", "ccc"})
```

Result: 
```powerquery
"abbccc***"
```




## Category
Combiner
