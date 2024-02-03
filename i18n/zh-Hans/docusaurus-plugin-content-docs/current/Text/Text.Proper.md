---
title: Text.Proper
---

# Text.Proper


## Description

使每个字词的第一个字母为大写。


## Syntax

```powerquery
Text.Proper(
    text as text,
    optional culture as text
) as text
```


## Details

返回只使文本值 <code>text</code> 中每个字词的第一个字符大写的结果。所有其他字母均以小写返回。还可提供可选的 <code>culture</code> (例如 "en-US")。


## Examples

### Example #1 
对简单句子使用 &lt;code&gt;Text.Proper&lt;/code&gt;。
```powerquery
Text.Proper("the QUICK BrOWn fOx jUmPs oVER tHe LAzy DoG")
```

Result: 
```powerquery
"The Quick Brown Fox Jumps Over The Lazy Dog"
```




## Category
Text.Transformations
