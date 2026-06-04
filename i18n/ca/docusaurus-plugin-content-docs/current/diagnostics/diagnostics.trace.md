---
title: Diagnostics.Trace
---

# Diagnostics.Trace


Escriu una entrada de seguiment (si el seguiment està habilitat) i retorna el valor.


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

Escriu un rastreig `message`, si el seguiment està habilitat, i retorna `value`. Un paràmetre opcional `delayed` especifica si s'ha de retardar l'avaluació dels `value` fins que es rastreja el missatge. `traceLevel` pot prendre un dels valors següents:

-   `TraceLevel.Critical`
-   `TraceLevel.Error`
-   `TraceLevel.Warning`
-   `TraceLevel.Information`
-   `TraceLevel.Verbose`


## Examples

### Example #1
Fa un seguiment del missatge abans d'invocar la funció Text.From i retorna el resultat.
```powerquery
Diagnostics.Trace(TraceLevel.Information, "TextValueFromNumber", () => Text.From(123), true)
```

Result: 
```powerquery
"123"
```




## Category
Diagnostics
