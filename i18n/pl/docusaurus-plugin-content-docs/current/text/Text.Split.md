---
title: Text.Split
---

# Text.Split


Dzieli tekst na listę wartości tekstowych, używając określonego ogranicznika.


## Syntax

```powerquery
Text.Split(
    text as text,
    separator as text
) as list
```


## Remarks

Zwraca listę wartości tekstowych powstałą w wyniku wykonania podziału wartości tekstowej <code>text</code> przy użyciu określonego ogranicznika <code>separator</code>.


## Examples

### Example #1 
Utwórz listę na podstawie rozdzielanej znakami „|” wartości tekstowej „Name|Address|PhoneNumber”.
```powerquery
Text.Split("Name|Address|PhoneNumber", "|")
```

Result: 
```powerquery
{
    "Name",
    "Address",
    "PhoneNumber"
}
```




## Category
Text.Transformations
