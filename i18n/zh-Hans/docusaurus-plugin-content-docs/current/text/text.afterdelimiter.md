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

返回指定的 `delimiter` 之后的 `text` 部分。 可选数字 `index` 指示要考虑哪一次出现的 `delimiter`。 可选列表 `index` 指示要考虑哪一次出现的 `delimiter`，以及应从输入的开头还是结尾编制索引。


## Examples

### Example #1
获取 "111-222-333" (第一个)连字符后的部分。
```powerquery
Text.AfterDelimiter("111-222-333", "-")
```

Result: 
```powerquery
"222-333"
```


### Example #2
获取 "111-222-333" 第二个连字符后的部分。
```powerquery
Text.AfterDelimiter("111-222-333", "-", 1)
```

Result: 
```powerquery
"333"
```


### Example #3
获取 "111-222-333" 倒数第二个连字符后的部分。
```powerquery
Text.AfterDelimiter("111-222-333", "-", {1, RelativePosition.FromEnd})
```

Result: 
```powerquery
"222-333"
```




## Category
Text.Transformations
