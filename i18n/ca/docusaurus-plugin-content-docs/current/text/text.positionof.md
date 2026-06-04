---
title: Text.PositionOf
---

# Text.PositionOf


Retorna la primera posició del valor (-1 si no es troba).


## Syntax

```powerquery
Text.PositionOf(
    text as text,
    substring as text,
    optional occurrence as Occurrence.Type,
    optional comparer as function
) as any
```


## Remarks

Retorna la posició de la repetició especificada del valor de text `substring` trobat a `text`. Es pot utilitzar un paràmetre opcional `occurrence` per especificar quina posició de repetició s'ha d'oferir (per defecte, la primera). Retorna el valor -1 si no s'ha trobat `substring`.

`comparer` és un element `Comparer` que s'utilitza per controlar la comparació. Es poden utilitzar comparadors per fer comparacions sense distinció de majúscules i minúscules o amb detecció de la cultura i la configuració regional.

Els comparadors integrats següents estan disponibles en el llenguatge de fórmules:

-   `Comparer.Ordinal`: s'utilitza per fer una comparació ordinal exacta.
-   `Comparer.OrdinalIgnoreCase`: s'utilitza per fer una comparació ordinal exacta sense distinció de majúscules i minúscules.
-   `Comparer.FromCulture`: s'utilitza per fer una comparació amb detecció de cultura.


## Examples

### Example #1
Obté la posició de la primera aparició de "World" al text "Hello, World! Hello, World!".
```powerquery
Text.PositionOf("Hello, World! Hello, World!", "World")
```

Result: 
```powerquery
7
```


### Example #2
Get the position of the last occurrence of "World" in "Hello, World! Hello, World!".
```powerquery
Text.PositionOf("Hello, World! Hello, World!", "World", Occurrence.Last)
```

Result: 
```powerquery
21
```




## Category
Text.Membership
