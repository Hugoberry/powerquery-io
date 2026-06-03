---
title: Text.AfterDelimiter
---

# Text.AfterDelimiter


Text.AfterDelimiter


## Syntax

```powerquery
Text.AfterDelimiter(
    text as text,
    delimiter as text,
    optional index as any
) as any
```


## Remarks

指定した `delimiter` の後の `text` の部分を返します。 省略可能な数値 `index` は、想定される `delimiter` の回数を示します。 省略可能なリスト `index` は、想定される `delimiter` の回数、およびインデックス作成を入力の先頭または末尾のどちらからで行うかを示しています。


## Examples

### Example #1
最初のハイフンの後の "111-222-333" の部分を取得します。
```powerquery
Text.AfterDelimiter("111-222-333", "-")
```

Result: 
```powerquery
"222-333"
```


### Example #2
2 番目のハイフンの後の "111-222-333" の部分を取得します。
```powerquery
Text.AfterDelimiter("111-222-333", "-", 1)
```

Result: 
```powerquery
"333"
```


### Example #3
最後から 2 番目のハイフンの後の "111-222-333" の部分を取得します。
```powerquery
Text.AfterDelimiter("111-222-333", "-", {1, RelativePosition.FromEnd})
```

Result: 
```powerquery
"222-333"
```




## Category
Text.Transformations
