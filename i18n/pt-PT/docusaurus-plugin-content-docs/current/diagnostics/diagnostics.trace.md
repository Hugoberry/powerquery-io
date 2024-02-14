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

Escreve um rastreio <code>message</code>, se o rastreio estiver ativado e devolve <code>value</code>. Um parâmetro opcional <code>delayed</code> especifica se atrasa a avaliação de <code>value</code> até que a mensagem é rastreada. <code>traceLevel</code> pode utilizar um dos seguintes valores:    <code>TraceLevel.Critical</code>    <code>TraceLevel.Error</code>,    <code>TraceLevel.Warning</code>,    <code>TraceLevel.Information</code>,    <code>TraceLevel.Verbose</code>.  


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
