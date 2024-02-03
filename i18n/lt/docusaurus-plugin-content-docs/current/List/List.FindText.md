---
title: List.FindText
---

# List.FindText


## Description

Pateikiamas reikšmių sąrašas (įskaitant įrašo laukus), kuriame yra nurodytas tekstas.


## Syntax

```powerquery
List.FindText(
    list as list,
    text as text
) as list
```


## Details

Pateikiamas sąrašas reikšmių iš sąrašo <code>list</code>, kuriame yra reikšmė <code>text</code>.


## Examples

### Example #1 
Rasti teksto reikšmes sąraše \{&#34;a&#34;, &#34;b&#34;, &#34;ab&#34;}, kurios atitinka &#34;a&#34;. 
```powerquery
List.FindText({"a", "b", "ab"}, "a")
```

Result: 
```powerquery
{"a", "ab"}
```




## Category
List.Selection
