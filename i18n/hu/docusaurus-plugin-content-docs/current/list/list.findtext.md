---
title: List.FindText
---

# List.FindText


A megadott szöveget tartalmazó értékek (köztük a rekordmezők) listáját adja vissza.


## Syntax

```powerquery
List.FindText(
    list as list,
    text as text
) as list
```


## Remarks

A(z) `list` lista azon értékeinek listáját adja vissza, amelyek tartalmazzák a következő értéket: `text`.


## Examples

### Example #1
A(z) \{"a", "b", "ab"\} lista azon szöveges értékeinek megkeresése, amelyek egyeznek az „a” értékkel.
```powerquery
List.FindText({"a", "b", "ab"}, "a")
```

Result: 
```powerquery
{"a", "ab"}
```




## Category
List.Selection
