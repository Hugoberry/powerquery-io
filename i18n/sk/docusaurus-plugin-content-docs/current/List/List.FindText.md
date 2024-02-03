---
title: List.FindText
---

# List.FindText


## Description

Vráti zoznam hodnôt (vrátane polí záznamov) obsahujúcich zadaný text.


## Syntax

```powerquery
List.FindText(
    list as list,
    text as text
) as list
```


## Details

Vráti zoznam hodnôt zo zoznamu <code>list</code>, ktorý obsahoval hodnotu <code>text</code>.


## Examples

### Example #1 
Nájdite textové hodnoty v zozname \{&#34;a&#34;, &#34;b&#34;, &#34;ab&#34;}, ktoré sa zhodujú s hodnotou &#34;a&#34;. 
```powerquery
List.FindText({"a", "b", "ab"}, "a")
```

Result: 
```powerquery
{"a", "ab"}
```




## Category
List.Selection
