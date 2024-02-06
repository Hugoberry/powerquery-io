---
title: Text.Range
---

# Text.Range


返回在偏移量中找到的子字符串。


## Syntax

```powerquery
Text.Range(
    text as text,
    offset as number,
    optional count as number
) as text
```


## Remarks

从文本 <code>text</code> 中返回在偏移量 <code>offset</code> 中找到的子字符串。    可以包含一个可选参数 <code>count</code>，以指定要返回多少个字符。


## Examples

### Example #1 
从文本 &#34;Hello World&#34; 中查找从索引 6 开始的子字符串。
```powerquery
Text.Range("Hello World", 6)
```

Result: 
```powerquery
"World"
```


### Example #2 
从文本 &#34;Hello World Hello&#34; 中查找从索引 6 开始且涵盖 5 个字符的子字符串。
```powerquery
Text.Range("Hello World Hello", 6, 5)
```

Result: 
```powerquery
"World"
```




## Category
Text.Extraction
