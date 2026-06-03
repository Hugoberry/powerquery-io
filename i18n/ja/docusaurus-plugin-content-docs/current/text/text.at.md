---
title: Text.At
---

# Text.At


指定された位置の文字を返します。


## Syntax

```powerquery
Text.At(
    text as text,
    index as number
) as text
```


## Remarks

位置 `index` にあるテキスト値 (`text`) の文字を返します。テキストの最初の文字が位置 0 です。


## Examples

### Example #1
文字列 "Hello, World" 内の位置 4 にある文字を調べます。
```powerquery
Text.At("Hello, World", 4)
```

Result: 
```powerquery
"o"
```




## Category
Text.Extraction
