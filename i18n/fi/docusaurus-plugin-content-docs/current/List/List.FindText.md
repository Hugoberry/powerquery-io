---
title: List.FindText
---

# List.FindText


## Description

Palauttaa luettelon arvoista (mukaan lukien tietuekentät), jotka sisältävät määritetyn tekstin.


## Syntax

```powerquery
List.FindText(
    list as list,
    text as text
) as list
```


## Details

Palauttaa luettelosta <code>list</code> luettelon arvoista, jotka sisälsivät arvon <code>text</code>.


## Examples

### Example #1 
Selvitä arvoa &#34;a&#34; vastaavat tekstiarvot luettelosta \{&#34;a&#34;, &#34;b&#34;, &#34;ab&#34;}. 
```powerquery
List.FindText({"a", "b", "ab"}, "a")
```

Result: 
```powerquery
{"a", "ab"}
```




## Category
List.Selection
