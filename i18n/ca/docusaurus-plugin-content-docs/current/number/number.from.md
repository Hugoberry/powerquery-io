---
title: Number.From
---

# Number.From


Crea un nombre a partir del valor donat.


## Syntax

```powerquery
Number.From(
    value as any,
    optional culture as text
) as number
```


## Remarks

Retorna un valor `number` a partir del valor `value` proporcionat. També es pot proporcionar un valor `culture` (per exemple, "en-US"). Si el valor `value` proporcionat és `null`, `Number.From` retorna `null`. Si el valor `value` proporcionat és `number`, es retorna el valor `value`. Els valors dels tipus següents es poden convertir en un valor `number`:

-   `text`: un valor `number` d'una representació textual. Els formats de text comuns es gestionen ("15", "3,423.10", "5.0E-10"). Consulteu `Number.FromText` per obtenir-ne informació.
-   `logical`: 1 per a `true`, 0 per a `false`.
-   `datetime`: nombre de punt flotant de doble precisió que conté un equivalent de data d'automatització OLE.
-   `datetimezone`: nombre de punt flotant de doble precisió que conté un equivalent de data d'automatització OLE de la data i hora locals de l'element `value`.
-   `date`: nombre de punt flotant de doble precisió que conté un equivalent de data d'automatització OLE.
-   `time`: expressat en dies fraccionaris.
-   `duration`: expressat en dies complets i fraccionaris.

Si el valor `value` és de qualsevol altre tipus, es retorna un error.


## Examples

### Example #1
Obté el valor `number` de `"4"`.
```powerquery
Number.From("4")
```

Result: 
```powerquery
4
```


### Example #2
Obté el valor `number` de `#datetime(2020, 3, 20, 6, 0, 0)`.
```powerquery
Number.From(#datetime(2020, 3, 20, 6, 0, 0))
```

Result: 
```powerquery
43910.25
```


### Example #3
Obteniu el valor `number` de `"12,3%"`.
```powerquery
Number.From("12.3%")
```

Result: 
```powerquery
0.123
```




## Category
Number.Conversion and formatting
