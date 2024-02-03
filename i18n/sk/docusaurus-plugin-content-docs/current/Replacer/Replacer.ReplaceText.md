---
title: Replacer.ReplaceText
---

# Replacer.ReplaceText


## Description

Nahradí text v rámci uvedeného vstupu.


## Syntax

```powerquery
Replacer.ReplaceText(
    text as text,
    old as text,
    new as text
) as text
```


## Details

Nahradí text <code>old</code> v pôvodnom zázname <code>text</code> textom <code>new</code>. Túto funkciu nahrádzača možno použiť v časti <code>List.ReplaceValue</code> a <code>Table.ReplaceValue</code>.


## Examples

### Example #1 
Nahraďte text &#34;hE&#34; textom &#34;He&#34; v reťazci &#34;hEllo world&#34;.
```powerquery
Replacer.ReplaceText("hEllo world", "hE", "He")
```

Result: 
```powerquery
"Hello world"
```




## Category
Replacer
