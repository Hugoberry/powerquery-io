---
title: Text.Insert
---

# Text.Insert


Infogar ett textvärde i ett annat vid en angiven position.


## Syntax

```powerquery
Text.Insert(
    text as text,
    offset as number,
    newText as text
) as text
```


## Remarks

Returnerar resultatet av att textvärdet `newText` infogas i textvärdet `text` vid position `offset`. Positioner börjar vid 0.


## Examples

### Example #1
Infoga "C" mellan "B" och "D" i "ABD".
```powerquery
Text.Insert("ABD", 2, "C")
```

Result: 
```powerquery
"ABCD"
```




## Category
Text.Modification
