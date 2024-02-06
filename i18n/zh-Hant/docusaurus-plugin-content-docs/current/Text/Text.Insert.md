---
title: Text.Insert
---

# Text.Insert


將某個文字值插入另一個文字值的指定位置。


## Syntax

```powerquery
Text.Insert(
    text as text,
    offset as number,
    newText as text
) as text
```


## Remarks

傳回將文字值 <code>newText</code> 插入文字值 <code>text</code> 之位置 <code>offset</code> 的結果。位置從數字 0 開始。


## Examples

### Example #1 
在 &#34;ABD&#34; 的 &#34;B&#34; 與 &#34;D&#34; 之間插入 &#34;C&#34;。
```powerquery
Text.Insert("ABD", 2, "C")
```

Result: 
```powerquery
"ABCD"
```




## Category
Text.Modification
