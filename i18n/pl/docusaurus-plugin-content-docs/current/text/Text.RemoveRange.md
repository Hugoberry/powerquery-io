---
title: Text.RemoveRange
---

# Text.RemoveRange


Usuwa określoną liczbę znaków, zaczynając od danego przesunięcia.


## Syntax

```powerquery
Text.RemoveRange(
    text as text,
    offset as number,
    optional count as number
) as text
```


## Remarks

Zwraca kopię wartości tekstowej <code>text</code>, z której zostały usunięte wszystkie znaki od pozycji <code>offset</code>.    Za pomocą opcjonalnego parametru <code>count</code> można określić, ile znaków ma zostać usuniętych. Domyślna wartość parametru <code>count</code> to 1. Wartości pozycji rozpoczynają się od 0.


## Examples

### Example #1 
Usuń 1 znak z wartości tekstowej „ABEFC” na pozycji 2.
```powerquery
Text.RemoveRange("ABEFC", 2)
```

Result: 
```powerquery
"ABFC"
```


### Example #2 
Usuń dwa znaki z wartości tekstowej „ABEFC”, zaczynając od pozycji 2.
```powerquery
Text.RemoveRange("ABEFC", 2, 2)
```

Result: 
```powerquery
"ABC"
```




## Category
Text.Modification
