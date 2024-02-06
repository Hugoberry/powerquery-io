---
title: Replacer.ReplaceText
---

# Replacer.ReplaceText


Sostituisce il testo nell&#39;input specificato.


## Syntax

```powerquery
Replacer.ReplaceText(
    text as text,
    old as text,
    new as text
) as text
```


## Remarks

Sostituisce il testo <code>old</code> nell'originale <code>text</code> con il testo <code>new</code>. Questa funzione di sostituzione può essere utilizzata in <code>List.ReplaceValue</code> e <code>Table.ReplaceValue</code>.


## Examples

### Example #1 
Sostituire il testo &#34;hE&#34; con &#34;He&#34; nella stringa &#34;hEllo world&#34;.
```powerquery
Replacer.ReplaceText("hEllo world", "hE", "He")
```

Result: 
```powerquery
"Hello world"
```




## Category
Replacer
