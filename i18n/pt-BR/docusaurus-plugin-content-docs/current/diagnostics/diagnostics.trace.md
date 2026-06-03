---
title: Diagnostics.Trace
---

# Diagnostics.Trace


Grava uma entrada de rastreamento, se o rastreamento estiver habilitado, e retorna o valor.


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

Grava um rastreamento `message`, se o rastreamento estiver habilitado, e retorna `value`. Um parâmetro opcional `delayed` especifica se a avaliação de `value` deve ser adiada até que a mensagem seja rastreada. `traceLevel` Pode usar um dos seguintes valores:

-   `TraceLevel.Critical`
-   `TraceLevel.Error`
-   `TraceLevel.Warning`
-   `TraceLevel.Information`
-   `TraceLevel.Verbose`


## Examples

### Example #1
Rastreie a mensagem antes de invocar a função Text.From e retornar o resultado.
```powerquery
Diagnostics.Trace(TraceLevel.Information, "TextValueFromNumber", () => Text.From(123), true)
```

Result: 
```powerquery
"123"
```




## Category
Diagnostics
