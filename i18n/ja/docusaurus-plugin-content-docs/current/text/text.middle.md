---
title: Text.Middle
---

# Text.Middle


指定の長さまでのサブ文字列を返します。


## Syntax

```powerquery
Text.Middle(
    text as text,
    start as number,
    optional count as number
) as text
```


## Remarks

オフセット `start` で `count` 文字または `text` の末尾までを返します。


## Examples

### Example #1
テキスト "Hello World" のインデックス 6 で始まり 5 文字のサブ文字列を検出します。
```powerquery
Text.Middle("Hello World", 6, 5)
```

Result: 
```powerquery
"World"
```


### Example #2
テキスト "Hello World" のインデックス 6 で始まり末尾までのサブ文字列を検出します。
```powerquery
Text.Middle("Hello World", 6, 20)
```

Result: 
```powerquery
"World"
```


### Example #3
テキスト "Hello World" のインデックス 0 で始まり 2 文字のサブ文字列を検出します。
```powerquery
Text.Middle("Hello World", 0, 2)
```

Result: 
```powerquery
"He"
```




## Category
Text.Extraction
