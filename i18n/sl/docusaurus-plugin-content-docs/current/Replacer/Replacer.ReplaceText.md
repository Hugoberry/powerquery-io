---
title: Replacer.ReplaceText
---

# Replacer.ReplaceText


## Description

Zamenja besedilo v podanem vnosu.


## Syntax

```powerquery
Replacer.ReplaceText(
    text as text,
    old as text,
    new as text
) as text
```


## Details

Zamenja besedilo <code>old</code> v izvirnem <code>text</code> z besedilom <code>new</code>. To funkcijo zamenjevalnika lahko uporabite v <code>List.ReplaceValue</code> in <code>Table.ReplaceValue</code>.


## Examples

### Example #1 
Zamenjajte besedilo &#34;hE&#34; z besedilom &#34;He&#34; v nizu &#34;hEllo world&#34;.
```powerquery
Replacer.ReplaceText("hEllo world", "hE", "He")
```

Result: 
```powerquery
"Hello world"
```




## Category
Replacer
