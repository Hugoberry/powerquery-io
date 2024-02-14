---
title: Replacer.ReplaceText
---

# Replacer.ReplaceText


Substitui texto pela entrada fornecida.


## Syntax

```powerquery
Replacer.ReplaceText(
    text as text,
    old as text,
    new as text
) as text
```


## Remarks

Substitui o texto <code>old</code> no <code>text</code> original pelo texto <code>new</code>. Esta função de substituição pode ser utilizada em <code>List.ReplaceValue</code> e <code>Table.ReplaceValue</code>.


## Examples

### Example #1 
Substituir o texto &#34;oL&#34; por &#34;Ol&#34; na cadeia &#34;oLá mundo&#34;.
```powerquery
Replacer.ReplaceText("hEllo world", "hE", "He")
```

Result: 
```powerquery
"Hello world"
```




## Category
Replacer
