---
title: Text.BeforeDelimiter
---

# Text.BeforeDelimiter


Text.BeforeDelimiter


## Syntax

```powerquery
Text.BeforeDelimiter(
    text as text,
    delimiter as text,
    optional index as any
) as any
```


## Remarks

指定した `delimiter` の前の `text` の部分を返します。 省略可能な数値 `index` は、想定される `delimiter` の回数を示します。 省略可能なリスト `index` は、想定される `delimiter` の回数、およびインデックス作成を入力の先頭または末尾のどちらから行うかを示しています。


## Examples

### Example #1
最初のハイフンの前の "111-222-333" の部分を取得します。
```powerquery
Text.BeforeDelimiter("111-222-333", "-")
```

Result: 
```powerquery
"111"
```


### Example #2
2 番目のハイフンの前の "111-222-333" の部分を取得します。
```powerquery
Text.BeforeDelimiter("111-222-333", "-", 1)
```

Result: 
```powerquery
"111-222"
```


### Example #3
最後から 2 番目のハイフンの前の "111-222-333" の部分を取得します。
```powerquery
Text.BeforeDelimiter("111-222-333", "-", {1, RelativePosition.FromEnd})
```

Result: 
```powerquery
"111"
```




## Category
Text.Transformations
