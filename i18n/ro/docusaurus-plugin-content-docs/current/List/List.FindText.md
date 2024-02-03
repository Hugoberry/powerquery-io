---
title: List.FindText
---

# List.FindText


## Description

Returnează o listă de valori (inclusiv câmpurile pentru înregistrare) care conţin textul specificat.


## Syntax

```powerquery
List.FindText(
    list as list,
    text as text
) as list
```


## Details

Returnează o listă de valori din lista <code>list</code> ce conţin valoarea <code>text</code>.


## Examples

### Example #1 
Găsiţi valorile text din lista \{&#34;a&#34;, &#34;b&#34;, &#34;ab&#34;} care se potrivesc cu „a”. 
```powerquery
List.FindText({"a", "b", "ab"}, "a")
```

Result: 
```powerquery
{"a", "ab"}
```




## Category
List.Selection
