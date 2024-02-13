---
title: Replacer.ReplaceText
---

# Replacer.ReplaceText


Sağlanan girdideki metni değiştirir.


## Syntax

```powerquery
Replacer.ReplaceText(
    text as text,
    old as text,
    new as text
) as text
```


## Remarks

Asıl <code>text</code> içindeki <code>old</code> metnini <code>new</code> metni ile değiştirir. Bu değiştirici işlevi <code>List.ReplaceValue</code> ve <code>Table.ReplaceValue</code> içinde kullanılabilir.


## Examples

### Example #1 
&#34;hEllo world&#34; dizesindeki &#34;hE&#34; ifadesini &#34;He&#34; olarak değiştirir.
```powerquery
Replacer.ReplaceText("hEllo world", "hE", "He")
```

Result: 
```powerquery
"Hello world"
```




## Category
Replacer
