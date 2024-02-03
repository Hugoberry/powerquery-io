---
title: Diagnostics.Trace
---

# Diagnostics.Trace


## Description

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


## Details

Escriu un seguiment, <code>message</code>, si el seguiment està habilitat, i retorna <code>value</code>. Un paràmetre opcional, <code>delayed</code>, especifica si s'ha de retardar l'avaluació de <code>value</code> fins que es faci el seguiment del missatge. <code>traceLevel</code> pot tenir un d'aquests valors:    <code>TraceLevel.Critical</code>    <code>TraceLevel.Error</code>    <code>TraceLevel.Warning</code>    <code>TraceLevel.Information</code>    <code>TraceLevel.Verbose</code>  


## Examples

### Example #1 
Fa un seguiment del missatge abans d&#39;invocar la funció Text.From i retorna el resultat.
```powerquery
Diagnostics.Trace(TraceLevel.Information, "TextValueFromNumber", () => Text.From(123), true)
```

Result: 
```powerquery
"123"
```




## Category
Diagnostics
