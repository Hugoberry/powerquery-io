---
title: Text.Proper
---

# Text.Proper


## Description

將每個字的第一個字母變成大寫。


## Syntax

```powerquery
Text.Proper(
    text as text,
    optional culture as text
) as text
```


## Details

傳回只將文字值 <code>text</code> 中每個字第一個字母變成大寫的結果。所有其他字母都以小寫格式傳回。也可提供選用的 <code>culture</code> (例如 "en-US")。


## Examples

### Example #1 
將 &lt;code&gt;Text.Proper&lt;/code&gt; 用於簡單的句子。
```powerquery
Text.Proper("the QUICK BrOWn fOx jUmPs oVER tHe LAzy DoG")
```

Result: 
```powerquery
"The Quick Brown Fox Jumps Over The Lazy Dog"
```




## Category
Text.Transformations
