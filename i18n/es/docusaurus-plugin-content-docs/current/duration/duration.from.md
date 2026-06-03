---
title: Duration.From
---

# Duration.From


Crea una duración a partir del valor dado.


## Syntax

```powerquery
Duration.From(
    value as any
) as duration
```


## Remarks

Devuelve un valor de duración del valor especificado.

-   `value`: valor del que se deriva la duración. Si el `value` especificado es `null`, esta función devuelve `null`. Si el `value` especificado es un `duration`, devuelve `value`. Los valores de los siguientes tipos pueden convertirse en un valor de `duration`:
    -   `text`: un valor `duration` de los formatos de tiempo transcurrido textual (d.h:m:s). Consulte `Duration.FromText` para obtener más información.
    -   `number`: un `duration` equivalente al número de días enteros y fraccionarios expresados por `value`.

Si `value` es de cualquier otro tipo, se devuelve un error.


## Examples

### Example #1
Convertir `2.525` en un valor `duration`.
```powerquery
Duration.From(2.525)
```

Result: 
```powerquery
#duration(2, 12, 36, 0)
```


### Example #2
Convierta el valor de texto `"2.05:55:20.34567"` en un valor `duration`.
```powerquery
Duration.From("2.05:55:20.34567")
```

Result: 
```powerquery
#duration(2, 5, 55, 20.3456700)
```




## Category
Duration
