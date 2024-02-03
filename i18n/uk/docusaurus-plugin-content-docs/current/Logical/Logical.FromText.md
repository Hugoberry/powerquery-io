---
title: Logical.FromText
---

# Logical.FromText


## Description

Створює логічне значення з текстових значень &#34;true&#34; і &#34;false&#34;.


## Syntax

```powerquery
Logical.FromText(
    text as text
) as logical
```


## Details

Створює логічне значення з текстового значення <code>text</code>, "true" або "false". Якщо <code>text</code> містить інший рядок, повертається виняткова ситуація. Текстове значення <code>text</code> нечутливе до регістру.


## Examples

### Example #1 
Створити логічне значення з текстового рядка &#34;true&#34;.
```powerquery
Logical.FromText("true")
```

Result: 
```powerquery
true
```


### Example #2 
Створити логічне значення з текстового рядка &#34;a&#34;.
```powerquery
Logical.FromText("a")
```

Result: 
```powerquery
[Expression.Error] Could not convert to a logical.
```




## Category
Logical
