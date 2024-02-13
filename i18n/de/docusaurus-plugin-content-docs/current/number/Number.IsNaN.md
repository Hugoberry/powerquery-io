---
title: Number.IsNaN
---

# Number.IsNaN


Gibt an, ob es sich um einen nicht numerischen Wert (NaN-Wert) handelt.


## Syntax

```powerquery
Number.IsNaN(
    number as number
) as logical
```


## Remarks

Gibt an, ob es sich um einen nicht numerischen Wert (NaN-Wert) handelt. Gibt <code>true</code> zurück, wenn "<code>number</code>" nicht numerisch (<code>Number.IsNaN</code>) ist. Andernfalls wird <code>false</code> zurückgegeben.


## Examples

### Example #1 
Überprüft, ob das Ergebnis der Division von 0 durch 0 nicht numerisch ist.
```powerquery
Number.IsNaN(0/0)
```

Result: 
```powerquery
true
```


### Example #2 
Überprüft, ob das Ergebnis der Division von 1 durch 0 nicht numerisch ist.
```powerquery
Number.IsNaN(1/0)
```

Result: 
```powerquery
false
```




## Category
Number.Information
