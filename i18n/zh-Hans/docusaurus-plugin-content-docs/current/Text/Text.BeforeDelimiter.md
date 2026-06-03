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

返回 `text` 中位于指定的 `delimiter` 之前的部分。 可选数字 `index` 指示要考虑哪一次出现的 `delimiter`。 可选列表 `index` 指示要考虑哪一次出现的 `delimiter`，以及应从输入的开头还是结尾编制索引。


## Examples

### Example #1
获取 "111-222-333" (第一个)连字符前的部分。
```powerquery
Text.BeforeDelimiter("111-222-333", "-")
```

Result: 
```powerquery
"111"
```


### Example #2
获取 "111-222-333" 第二个连字符前的部分。
```powerquery
Text.BeforeDelimiter("111-222-333", "-", 1)
```

Result: 
```powerquery
"111-222"
```


### Example #3
获取 "111-222-333" 倒数第二个连字符前的部分。
```powerquery
Text.BeforeDelimiter("111-222-333", "-", {1, RelativePosition.FromEnd})
```

Result: 
```powerquery
"111"
```




## Category
Text.Transformations
