---
title: Replacer.ReplaceText
---

# Replacer.ReplaceText


## Description

Menggantikan teks dalam input yang ditentukan.


## Syntax

```powerquery
Replacer.ReplaceText(
    text as text,
    old as text,
    new as text
) as text
```


## Details

Menggantikan teks <code>old</code> dalam asal <code>text</code> dengan teks <code>new</code>. Fungsi pengganti ini boleh digunakan dalam <code>List.ReplaceValue</code> dan <code>Table.ReplaceValue</code>.


## Examples

### Example #1 
Gantikan teks &#34;hE&#34; dengan &#34;He&#34; dalam rentetan &#34;hEllo world&#34;.
```powerquery
Replacer.ReplaceText("hEllo world", "hE", "He")
```

Result: 
```powerquery
"Hello world"
```




## Category
Replacer
