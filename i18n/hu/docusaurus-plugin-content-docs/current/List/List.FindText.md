---
title: List.FindText
---

# List.FindText


## Description

A megadott szöveget tartalmazó értékek (köztük a rekordmezők) listáját adja vissza.


## Syntax

```powerquery
List.FindText(
    list as list,
    text as text
) as list
```


## Details

A(z) <code>list</code> lista azon értékeinek listáját adja vissza, amelyek tartalmazzák a következő értéket: <code>text</code>.


## Examples

### Example #1 
A(z) \{&#34;a&#34;, &#34;b&#34;, &#34;ab&#34;} lista azon szöveges értékeinek megkeresése, amelyek egyeznek az „a” értékkel. 
```powerquery
List.FindText({"a", "b", "ab"}, "a")
```

Result: 
```powerquery
{"a", "ab"}
```




## Category
List.Selection
