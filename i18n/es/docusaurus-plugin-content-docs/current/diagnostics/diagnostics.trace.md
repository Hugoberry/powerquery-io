---
title: Diagnostics.Trace
---

# Diagnostics.Trace


Escribe una entrada de seguimiento, si está habilitado el seguimiento, y devuelve el valor.


## Syntax

```powerquery
Diagnostics.Trace(
    traceLevel as number,
    message as any,
    value as any,
    optional delayed as logical
) as any
```


## Remarks

Escribe un seguimiento `message`, si el seguimiento está habilitado, y devuelve `value`. Un parámetro `delayed` opcional especifica si se debe retrasar la evaluación de `value` hasta que se realice el seguimiento del mensaje. `traceLevel` Puede tomar uno de los siguientes valores:

-   `TraceLevel.Critical`
-   `TraceLevel.Error`
-   `TraceLevel.Warning`
-   `TraceLevel.Information`
-   `TraceLevel.Verbose`


## Examples

### Example #1
Hace un seguimiento del mensaje antes de invocar la función Text.From y devuelve el resultado.
```powerquery
Diagnostics.Trace(TraceLevel.Information, "TextValueFromNumber", () => Text.From(123), true)
```

Result: 
```powerquery
"123"
```




## Category
Diagnostics
