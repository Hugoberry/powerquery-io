---
title: Text.End
---

# Text.End


テキストの最後の文字を返します。


## Syntax

```powerquery
Text.End(
    text as text,
    count as number
) as text
```


## Remarks

`text` 値 `text` の最後の `count` 文字である `text` 値を返します。


## Examples

### Example #1
テキスト "Hello, World" の最後の 5 文字を取得します。
```powerquery
Text.End("Hello, World", 5)
```

Result: 
```powerquery
"World"
```




## Category
Text.Extraction
