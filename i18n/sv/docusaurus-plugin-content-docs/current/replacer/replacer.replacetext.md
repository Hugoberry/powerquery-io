---
title: Replacer.ReplaceText
---

# Replacer.ReplaceText


Ersätter text i angivna indata.


## Syntax

```powerquery
Replacer.ReplaceText(
    text as text,
    old as text,
    new as text
) as text
```


## Remarks

Ersätter texten <code>old</code> i ursprungliga <code>text</code> med texten <code>new</code>. Den här ersättningsfunktionen kan användas i <code>List.ReplaceValue</code> och <code>Table.ReplaceValue</code>.


## Examples

### Example #1 
Ersätt texten &#34;hE&#34; med &#34;He&#34; i strängen &#34;hEllo world&#34;.
```powerquery
Replacer.ReplaceText("hEllo world", "hE", "He")
```

Result: 
```powerquery
"Hello world"
```




## Category
Replacer
