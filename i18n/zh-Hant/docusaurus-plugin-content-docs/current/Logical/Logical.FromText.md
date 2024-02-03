---
title: Logical.FromText
---

# Logical.FromText


## Description

根據文字值 &#34;true&#34; 和 &#34;false&#34; 建立邏輯值。


## Syntax

```powerquery
Logical.FromText(
    text as text
) as logical
```


## Details

根據文字值 <code>text</code> ("true" 或 "false") 建立邏輯值。如果 <code>text</code> 包含不同字串，則擲回例外狀況。文字值 <code>text</code> 不區分大小寫。


## Examples

### Example #1 
根據文字字串 &#34;true&#34; 建立邏輯值。
```powerquery
Logical.FromText("true")
```

Result: 
```powerquery
true
```


### Example #2 
根據文字字串 &#34;a&#34; 建立邏輯值。
```powerquery
Logical.FromText("a")
```

Result: 
```powerquery
[Expression.Error] Could not convert to a logical.
```




## Category
Logical
