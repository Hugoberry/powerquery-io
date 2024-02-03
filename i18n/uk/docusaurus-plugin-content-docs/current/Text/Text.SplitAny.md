---
title: Text.SplitAny
---

# Text.SplitAny


## Description

Повертає список текстових значень, розділених за будь-яким символом у роздільнику.


## Syntax

```powerquery
Text.SplitAny(
    text as text,
    separators as text
) as list
```


## Details

Повертає список текстових значень після розділення текстового значення <code>text</code> на основі будь-якого символу в указаному роздільнику, <code>separators</code>.


## Examples

### Example #1 
Створити список з текстового значення &#34;Jamie|Campbell|Admin|Adventure Works|www.adventure-works.com&#34;.
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
