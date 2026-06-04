---
title: Text.Middle
---

# Text.Middle


傳回特定長度以內的子字串。


## Syntax

```powerquery
Text.Middle(
    text as text,
    start as number,
    optional count as number
) as text
```


## Remarks

在位移 `start` 的位置傳回 `count` 個字元，或傳回一直到 `text` 的結尾。


## Examples

### Example #1
從索引 6 開始跨 5 個字元，尋找文字 "Hello World" 中的子字串。
```powerquery
Text.Middle("Hello World", 6, 5)
```

Result: 
```powerquery
"World"
```


### Example #2
從索引 6 開始到結尾，尋找文字 "Hello World" 中的子字串。
```powerquery
Text.Middle("Hello World", 6, 20)
```

Result: 
```powerquery
"World"
```


### Example #3
從索引 0 開始跨 2 個字元，尋找文字 "Hello World" 中的子字串。
```powerquery
Text.Middle("Hello World", 0, 2)
```

Result: 
```powerquery
"He"
```




## Category
Text.Extraction
