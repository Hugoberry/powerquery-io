---
title: Text.Repeat
---

# Text.Repeat


返回由输入文本重复指定次数而组成的文本值。


## Syntax

```powerquery
Text.Repeat(
    text as text,
    count as number
) as text
```


## Remarks

返回由输入文本 `text` 重复 `count` 次而组成的文本值。


## Examples

### Example #1
重复文本 "a" 五次。
```powerquery
Text.Repeat("a", 5)
```

Result: 
```powerquery
"aaaaa"
```


### Example #2
重复文本 "helloworld" 三次。
```powerquery
Text.Repeat("helloworld.", 3)
```

Result: 
```powerquery
"helloworld.helloworld.helloworld."
```




## Category
Text.Transformations
