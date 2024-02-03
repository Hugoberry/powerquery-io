---
title: Logical.FromText
---

# Logical.FromText


## Description

テキスト値 &#34;true&#34; および &#34;false&#34; から論理値を作成します。


## Syntax

```powerquery
Logical.FromText(
    text as text
) as logical
```


## Details

テキスト値 <code>text</code> ("true" または "false") から論理値を作成します。<code>text</code> に別の文字列が含まれている場合は、例外がスローされます。テキスト値 <code>text</code> では、大文字と小文字が区別されます。


## Examples

### Example #1 
テキスト文字列 &#34;true&#34; から論理値を作成します。
```powerquery
Logical.FromText("true")
```

Result: 
```powerquery
true
```


### Example #2 
テキスト文字列 &#34;a&#34; から論理値を作成します。
```powerquery
Logical.FromText("a")
```

Result: 
```powerquery
[Expression.Error] Could not convert to a logical.
```




## Category
Logical
