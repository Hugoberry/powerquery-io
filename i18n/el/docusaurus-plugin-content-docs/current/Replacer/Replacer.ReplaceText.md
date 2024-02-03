---
title: Replacer.ReplaceText
---

# Replacer.ReplaceText


## Description

Αντικαθιστά το κείμενο με την παρεχόμενη είσοδο.


## Syntax

```powerquery
Replacer.ReplaceText(
    text as text,
    old as text,
    new as text
) as text
```


## Details

Αντικαθιστά το κείμενο <code>old</code> στην αρχική <code>text</code> με το κείμενο <code>new</code>. Αυτή η συνάρτηση αντικατάστασης μπορεί να χρησιμοποιηθεί στις <code>List.ReplaceValue</code> και <code>Table.ReplaceValue</code>.


## Examples

### Example #1 
Αντικαταστήστε το κείμενο &#34;hE&#34; με το &#34;He&#34; στη συμβολοσειρά &#34;hEllo world&#34;.
```powerquery
Replacer.ReplaceText("hEllo world", "hE", "He")
```

Result: 
```powerquery
"Hello world"
```




## Category
Replacer
