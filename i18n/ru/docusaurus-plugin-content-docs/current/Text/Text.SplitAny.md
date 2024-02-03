---
title: Text.SplitAny
---

# Text.SplitAny


## Description

Возвращает список текстовых значений, разбитых по любому из символов в разделителе.


## Syntax

```powerquery
Text.SplitAny(
    text as text,
    separators as text
) as list
```


## Details

Возвращает список текстовых значений, полученных в результате разбиения текстового значения <code>text</code> на основе любого символа в указанном разделителе <code>separators</code>.


## Examples

### Example #1 
Создать список из текстового значения &#34;Jamie|Campbell|Admin|Adventure Works|www.adventure-works.com&#34;.
```powerquery
Text.SplitAny("Jamie|Campbell|Admin|Adventure Works|www.adventure-works.com", "|")
```

Result: 
```powerquery
{
    "Jamie",
    "Campbell",
    "Admin",
    "Adventure Works",
    "www.adventure-works.com"
}
```




## Category
Text.Transformations
