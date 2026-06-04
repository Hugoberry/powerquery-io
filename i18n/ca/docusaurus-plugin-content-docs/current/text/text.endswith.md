---
title: Text.EndsWith
---

# Text.EndsWith


Indica si el text acaba amb el valor especificat.


## Syntax

```powerquery
Text.EndsWith(
    text as text,
    substring as text,
    optional comparer as function
) as logical
```


## Remarks

Indica si el text proporcionat, `text`, acaba amb el valor especificat, `substring`. La indicació distingeix entre majúscules i minúscules.

`comparer` és un element `Comparer` que s'utilitza per controlar la comparació. Es poden utilitzar comparadors per fer comparacions sense distinció de majúscules i minúscules o amb detecció de cultura i configuració regional.

Els següents comparadors integrats estan disponibles en el llenguatge de fórmules:

-   `Comparer.Ordinal`: s'utilitza per fer una comparació ordinal exacta.
-   `Comparer.OrdinalIgnoreCase`: s'utilitza per fer una comparació ordinal exacta sense distinció de majúscules i minúscules.
-   `Comparer.FromCulture`: s'utilitza per fer una comparació amb detecció de cultura.


## Examples

### Example #1
Comprova si "Hello, World" acaba amb "world".
```powerquery
Text.EndsWith("Hello, World", "world")
```

Result: 
```powerquery
false
```


### Example #2
Comprova si "Hello, World" acaba amb "World".
```powerquery
Text.EndsWith("Hello, World", "World")
```

Result: 
```powerquery
true
```




## Category
Text.Membership
