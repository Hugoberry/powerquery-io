---
title: Text.Repeat
---

# Text.Repeat


傳回由輸入文字重複指定次數所組成的文字值。


## Syntax

```powerquery
Text.Repeat(
    text as text,
    count as number
) as text
```


## Remarks

傳回由輸入文字 `text` 重複 `count` 次所組成的文字值。


## Examples

### Example #1
將文字 "a" 重複五次。
```powerquery
Text.Repeat("a", 5)
```

Result: 
```powerquery
"aaaaa"
```


### Example #2
將文字 "helloworld" 重複三次。
```powerquery
Text.Repeat("helloworld.", 3)
```

Result: 
```powerquery
"helloworld.helloworld.helloworld."
```




## Category
Text.Transformations
