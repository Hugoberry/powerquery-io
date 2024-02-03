---
title: Text.Insert
---

# Text.Insert


## Description

将一个文本值插入到另一个文本值的给定位置。


## Syntax

```powerquery
Text.Insert(
    text as text,
    offset as number,
    newText as text
) as text
```


## Details

返回将文本值 <code>newText</code> 插入到文本值 <code>text</code> 中的位置 <code>offset</code> 的结果。位置从数字 0 开始。


## Examples

### Example #1 
在 &#34;ABD&#34; 中的 &#34;B&#34; 和 &#34;D&#34; 之间插入 &#34;C&#34;。
```powerquery
Text.Insert("ABD", 2, "C")
```

Result: 
```powerquery
"ABCD"
```




## Category
Text.Modification
