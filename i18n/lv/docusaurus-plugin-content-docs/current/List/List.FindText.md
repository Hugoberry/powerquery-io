---
title: List.FindText
---

# List.FindText


## Description

Tiek atgriezts to vērtību (tostarp ierakstu lauku) saraksts, kurās ir ietverts norādītais teksts.


## Syntax

```powerquery
List.FindText(
    list as list,
    text as text
) as list
```


## Details

Tiek atgriezts to saraksta <code>list</code> vērtību saraksts, kurās ir ietverta vērtība <code>text</code>.


## Examples

### Example #1 
Iegūstiet saraksta \{&#34;a&#34;, &#34;b&#34;, &#34;ab&#34;} teksta vērtības, kas atbilst vērtībai a. 
```powerquery
List.FindText({"a", "b", "ab"}, "a")
```

Result: 
```powerquery
{"a", "ab"}
```




## Category
List.Selection
