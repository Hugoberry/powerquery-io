---
title: Text.AfterDelimiter
---

# Text.AfterDelimiter


## Description

Text.AfterDelimiter


## Syntax

```powerquery
Text.AfterDelimiter(
    text as text,
    delimiter as text,
    optional index as any
) as any
```


## Details

返回指定的 <code>delimiter</code> 之后的 <code>text</code> 部分。    可选数字 <code>index</code> 指示要考虑哪一次出现的 <code>delimiter</code>。    可选列表 <code>index</code> 指示要考虑哪一次出现的 <code>delimiter</code>，以及应从输入的开头还是结尾编制索引。


## Examples

### Example #1 
获取 &#34;111-222-333&#34; (第一个)连字符后的部分。
```powerquery
Text.AfterDelimiter("111-222-333", "-")
```

Result: 
```powerquery
"222-333"
```


### Example #2 
获取 &#34;111-222-333&#34; 第二个连字符后的部分。
```powerquery
Text.AfterDelimiter("111-222-333", "-", 1)
```

Result: 
```powerquery
"333"
```


### Example #3 
获取 &#34;111-222-333&#34; 倒数第二个连字符后的部分。
```powerquery
Text.AfterDelimiter("111-222-333", "-", {1, RelativePosition.FromEnd})
```

Result: 
```powerquery
"222-333"
```




## Category
Text.Transformations
