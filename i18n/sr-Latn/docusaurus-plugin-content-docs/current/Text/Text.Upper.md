---
title: Text.Upper
---

# Text.Upper


## Description

Konvertuje sve znakove u velika slova.


## Syntax

```powerquery
Text.Upper(
    text as text,
    optional culture as text
) as text
```


## Details

Vraća rezultat konvertovanja svih znakova u <code>text</code> u velika slova. Opcionalno se može navesti i <code>culture</code> (na primer, „en-US“).


## Examples

### Example #1 
Preuzimanje verzije niske „aBcD“ sa velikim slovima.
```powerquery
Text.Upper("aBcD")
```

Result: 
```powerquery
"ABCD"
```




## Category
Text.Transformations
