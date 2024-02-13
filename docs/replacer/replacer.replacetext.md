---
title: Replacer.ReplaceText
---

# Replacer.ReplaceText


Replaces text within the provided input.


## Syntax

```powerquery
Replacer.ReplaceText(
    text as text,
    old as text,
    new as text
) as text
```


## Remarks

Replaces the <code>old</code> text in the original <code>text</code> with the <code>new</code> text. This replacer function can be used in <code>List.ReplaceValue</code> and <code>Table.ReplaceValue</code>.


## Examples

### Example #1 
Replace the text &#34;hE&#34; with &#34;He&#34; in the string &#34;hEllo world&#34;.
```powerquery
Replacer.ReplaceText("hEllo world", "hE", "He")
```

Result: 
```powerquery
"Hello world"
```




## Category
Replacer
