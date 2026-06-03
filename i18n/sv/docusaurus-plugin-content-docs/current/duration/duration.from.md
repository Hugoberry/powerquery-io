---
title: Duration.From
---

# Duration.From


Skapar en varaktighet från det angivna värdet.


## Syntax

```powerquery
Duration.From(
    value as any
) as duration
```


## Remarks

Returnerar ett varaktighetsvärde från det angivna värdet.

-   `value`: Värdet som varaktigheten härleds från. Om den angivna `value` är `null` returneras den här funktionen `null`. Om den angivna `value` är en `varaktighet` returneras `value`. Värden av följande typer kan konverteras till en `varaktighet` värde:
    -   `text`: Ett `varaktighets`värde från tidsformulär som förflutit i text (d.h:m:s). Mer information finns i `Duration.FromText`.
    -   `nummer`: En `varaktighet` som motsvarar antalet hela och bråkdelar av dagar uttryckt med `value`.

Om `value` är av någon annan typ returneras ett fel.


## Examples

### Example #1
Konvertera `2.525` till ett `duration`\-värde.
```powerquery
Duration.From(2.525)
```

Result: 
```powerquery
#duration(2, 12, 36, 0)
```


### Example #2
Konvertera textvärdet `"2.05:55:20.34567"` till ett `varaktighets`värde.
```powerquery
Duration.From("2.05:55:20.34567")
```

Result: 
```powerquery
#duration(2, 5, 55, 20.3456700)
```




## Category
Duration
