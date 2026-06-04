---
title: Comparer.Equals
---

# Comparer.Equals


Retorna un valor lògic en funció de la comprovació d'igualtat respecte als dos valors proporcionats.


## Syntax

```powerquery
Comparer.Equals(
    comparer as function,
    x as any,
    y as any
) as logical
```


## Remarks

Retorna un valor `lògic` basat en la comprovació d'igualtat respecte als dos valors proporcionats, `x` i `y`, mitjançant el `comparer`. proporcionat

`comparer` és un `Comparador` que s'utilitza per controlar la comparació. Un comparador és una funció que accepta dos arguments i retorna -1, 0 o 1 en funció de si el primer valor es menor, igual o més gran que el segon. Es poden utilitzar comparadors per fer comparacions sense distinció de majúscules i minúscules o amb detecció de cultura i configuració regional.

Els següents comparadors integrats estan disponibles en el llenguatge de fórmules:

-   `Comparer.Ordinal`: s'utilitza per fer una comparació ordinal exacta.
-   `Comparer.OrdinalIgnoreCase`: s'utilitza per fer una comparació ordinal exacta sense distinció de majúscules i minúscules.
-   `Comparer.FromCulture`: s'utilitza per fer una comparació amb detecció de cultura.


## Examples

### Example #1
Compareu "1" i "A" mitjançant una configuració regional "en-US" per determinar si els valors són iguals.
```powerquery
Comparer.Equals(Comparer.FromCulture("en-US"), "1", "A")
```

Result: 
```powerquery
false
```




## Category
Comparer
