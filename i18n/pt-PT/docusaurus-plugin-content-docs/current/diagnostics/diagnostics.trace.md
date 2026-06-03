---
title: Diagnostics.Trace
---

# Diagnostics.Trace


Escreve uma entrada de rastreio, se o rastreio estiver ativado e devolve o valor.


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

Escreve um rastreio `message`, se o rastreio estiver ativado, e devolve `value`. Um parâmetro opcional `delayed` especifica se a avaliação de `value` deve ser adiada até a mensagem ser rastreada. `traceLevel` pode assumir um dos seguintes valores:

-   `TraceLevel.Critical`
-   `TraceLevel.Error`
-   `TraceLevel.Warning`
-   `TraceLevel.Information`
-   `TraceLevel.Verbose`


## Examples

### Example #1
Rastreie a mensagem ates de invocar a função Text.From e devolva o resultado.
```powerquery
Diagnostics.Trace(TraceLevel.Information, "TextValueFromNumber", () => Text.From(123), true)
```

Result: 
```powerquery
"123"
```




## Category
Diagnostics
