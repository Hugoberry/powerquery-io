---
title: Replacer.ReplaceText
---

# Replacer.ReplaceText


## Description

Mengganti teks dalam input yang diberikan.


## Syntax

```powerquery
Replacer.ReplaceText(
    text as text,
    old as text,
    new as text
) as text
```


## Details

Mengganti teks <code>old</code> dalam <code>text</code> asli dengan teks <code>new</code>. Fungsi pengganti ini dapat digunakan dalam <code>List.ReplaceValue</code> dan <code>Table.ReplaceValue</code>.


## Examples

### Example #1 
Mengganti teks &#34;hE&#34; dengan &#34;He&#34; dalam string &#34;hEllo world&#34;.
```powerquery
Replacer.ReplaceText("hEllo world", "hE", "He")
```

Result: 
```powerquery
"Hello world"
```




## Category
Replacer
