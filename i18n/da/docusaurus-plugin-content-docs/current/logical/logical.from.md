---
title: Logical.From
---

# Logical.From


Opretter en logisk værdi ud fra den angivne værdi.


## Syntax

```powerquery
Logical.From(
    value as any
) as logical
```


## Remarks

Returnerer en værdi af typen `logical` ud fra den angivne `value`. Hvis den angivne `value` er `null`, vil `Logical.From` returnere `null`. Hvis den angivne `value` er `logical`, returneres `value`. Værdier af følgende typer kan konverteres til en værdi af typen `logical`:

-   `text`: En værdi af typen `logical` fra tekstværdien, enten `"true"` eller `"false"`. Se `Logical.FromText` for at få flere oplysninger.
-   `number`: `false`, hvis `value` er lig med `0`. Ellers `true`.

Hvis `value` er af en anden type, returneres der en fejl.


## Examples

### Example #1
Konvertér `2` til en værdi af typen `logical`.
```powerquery
Logical.From(2)
```

Result: 
```powerquery
true
```




## Category
Logical
