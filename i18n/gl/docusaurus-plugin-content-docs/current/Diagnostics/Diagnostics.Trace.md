---
title: Diagnostics.Trace
---

# Diagnostics.Trace


## Description

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


## Details

Escribe un rastrexo <code>message</code>, se está activado o rastrexo, e devolve <code>value</code>. Un parámetro opcional <code>delayed</code> especifica se se atrasa a avaliación de <code>value</code> ata rastrexar a mensaxe. <code>traceLevel</code> pode ter un dos seguintes valores:    <code>TraceLevel.Critical</code>    <code>TraceLevel.Error</code>,    <code>TraceLevel.Warning</code>,    <code>TraceLevel.Information</code>,    <code>TraceLevel.Verbose</code>.  


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
