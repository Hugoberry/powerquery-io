---
title: List.FindText
---

# List.FindText


## Description

Vraća listu vrednosti (uključujući polja zapisa) koja sadrži navedeni tekst.


## Syntax

```powerquery
List.FindText(
    list as list,
    text as text
) as list
```


## Details

Vraća listu vrednosti sa liste <code>list</code> koja je sadržala vrednost <code>text</code>.


## Examples

### Example #1 
Pronalaženje tekstualnih vrednosti sa liste \{&#34;a&#34;, &#34;b&#34;, &#34;ab&#34;} koje se podudaraju sa „a“. 
```powerquery
List.FindText({"a", "b", "ab"}, "a")
```

Result: 
```powerquery
{"a", "ab"}
```




## Category
List.Selection
