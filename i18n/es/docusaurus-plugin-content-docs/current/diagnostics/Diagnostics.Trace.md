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

Escribe un valor <code>message</code> de seguimiento, si está habilitado el seguimiento, y devuelve <code>value</code>. Un parámetro opcional, <code>delayed</code>, especifica si se debe retardar la evaluación de <code>value</code> hasta que se realice el seguimiento del mensaje. <code>traceLevel</code> Puede tomar uno de estos valores:    <code>TraceLevel.Critical</code>    <code>TraceLevel.Error</code>    <code>TraceLevel.Warning</code>    <code>TraceLevel.Information</code>    <code>TraceLevel.Verbose</code>  


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
