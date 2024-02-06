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

Se o rastreamento está habilitado, grava um rastreamento <code>message</code> e retorna <code>value</code>. Um parâmetro opcional <code>delayed</code> especifica se a avaliação de <code>value</code> deve ser atrasada até que a mensagem seja rastreada. <code>traceLevel</code> pode assumir um dos seguintes valores:    <code>TraceLevel.Critical</code>    <code>TraceLevel.Error</code>,    <code>TraceLevel.Warning</code>,    <code>TraceLevel.Information</code> e    <code>TraceLevel.Verbose</code>.  


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
