---
title: Replacer.ReplaceText
---

# Replacer.ReplaceText


Substitui o texto na entrada fornecida.


## Syntax

```powerquery
Replacer.ReplaceText(
    text as text,
    old as text,
    new as text
) as text
```


## Remarks

Substitui o texto <code>old</code> no <code>text</code> original pelo texto <code>new</code>. Essa função substituta pode ser usada em <code>List.ReplaceValue</code> e em <code>Table.ReplaceValue</code>.


## Examples

### Example #1 
Substitua o texto &#34;oL&#34; por &#34;Ol&#34; na cadeia de caracteres &#34;oLá, mundo&#34;.
```powerquery
Replacer.ReplaceText("hEllo world", "hE", "He")
```

Result: 
```powerquery
"Hello world"
```




## Category
Replacer
