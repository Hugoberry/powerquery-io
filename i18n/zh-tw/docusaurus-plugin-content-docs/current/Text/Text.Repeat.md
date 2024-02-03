---
title: Text.Repeat
---

# Text.Repeat


## Description

傳回由輸入文字重複指定次數所組成的文字值。


## Syntax

```powerquery
Text.Repeat(
    text as text,
    count as number
) as text
```


## Details

傳回由輸入文字 <code>text</code> 重複 <code>count</code> 次所組成的文字值。


## Examples

### Example #1 
將文字 &#34;a&#34; 重複五次。
```powerquery
Text.Repeat("a", 5)
```

Result: 
```powerquery
"aaaaa"
```


### Example #2 
將文字 &#34;helloworld&#34; 重複三次。
```powerquery
Text.Repeat("helloworld.", 3)
```

Result: 
```powerquery
"helloworld.helloworld.helloworld."
```




## Category
Text.Transformations
