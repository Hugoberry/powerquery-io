---
title: Text.Lower
---

# Text.Lower


Konvertuje sve znakove u mala slova.


## Syntax

```powerquery
Text.Lower(
    text as text,
    optional culture as text
) as text
```


## Remarks

Vraća rezultat konvertovanja svih znakova u `text` u mala slova. Opcionalno se može navesti i `culture` (na primer, „en-US“).


## Examples

### Example #1
Preuzimanje verzije niske „AbCd“ sa malim slovima.
```powerquery
Text.Lower("AbCd")
```

Result: 
```powerquery
"abcd"
```




## Category
Text.Transformations
