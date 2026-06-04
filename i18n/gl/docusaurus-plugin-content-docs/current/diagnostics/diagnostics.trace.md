---
title: Diagnostics.Trace
---

# Diagnostics.Trace


Escribe unha entrada de rastrexo, se o rastrexo está activado, e devolve o valor.


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

Escribe un rastrexo `message` , se o rastrexo está activado, e devolve `value`. Un parámetro opcional `delayed` especifica se se debe atrasar a avaliación de `value` ata que se rastrexe a mensaxe. `traceLevel` pode tomar un dos seguintes valores:

-   `NivelDeRastrexo.Crítico`
-   `NivelDeRastrexo.Erro`
-   `Nivel de rastrexo.Aviso`
-   `NivelDeRastrexo.Información`
-   `NivelDeRastrexo.Verbose`


## Examples

### Example #1
Rastrexa a mensaxe antes de invocar a función Text.From e devolve o resultado.
```powerquery
Diagnostics.Trace(TraceLevel.Information, "TextValueFromNumber", () => Text.From(123), true)
```

Result: 
```powerquery
"123"
```




## Category
Diagnostics
