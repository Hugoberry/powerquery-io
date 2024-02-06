---
title: Text.PadStart
---

# Text.PadStart


通过填充给定文本的开头，返回指定长度的文本。


## Syntax

```powerquery
Text.PadStart(
    text as text,
    count as number,
    optional character as text
) as text
```


## Remarks

通过在文本值 <code>text</code> 的开头插入空格，返回填充到长度 <code>count</code> 的 <code>text</code> 值。    可选字符 <code>character</code> 可用于指定用于填充的字符。默认的填充字符是空格。


## Examples

### Example #1 
填充文本值的开头，使其长度为 10 个字符。
```powerquery
Text.PadStart("Name", 10)
```

Result: 
```powerquery
"      Name"
```


### Example #2 
用 &#34;|&#34; 填充文本值的开头，使其长度为 10 个字符。
```powerquery
Text.PadStart("Name", 10, "|")
```

Result: 
```powerquery
"||||||Name"
```




## Category
Text.Transformations
