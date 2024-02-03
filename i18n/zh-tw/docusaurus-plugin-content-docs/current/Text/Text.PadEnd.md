---
title: Text.PadEnd
---

# Text.PadEnd


## Description

填補指定文字的結尾，藉以傳回指定長度的文字。


## Syntax

```powerquery
Text.PadEnd(
    text as text,
    count as number,
    optional character as text
) as text
```


## Details

在文字值 <code>text</code> 的結尾插入空格，藉以傳回填補至長度 <code>count</code> 的 <code>text</code> 值。    可使用選擇性字元 <code>character</code> 來指定用於填補的字元。預設填補字元是空格。


## Examples

### Example #1 
填補文字值的結尾，使其長度達到 10 個字元。
```powerquery
Text.PadEnd("Name", 10)
```

Result: 
```powerquery
"Name      "
```


### Example #2 
以 &#34;|&#34; 填補文字值的結尾，使其長度達到 10 個字元。
```powerquery
Text.PadEnd("Name", 10, "|")
```

Result: 
```powerquery
"Name||||||"
```




## Category
Text.Transformations
