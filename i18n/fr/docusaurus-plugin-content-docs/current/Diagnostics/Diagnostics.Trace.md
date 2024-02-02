---
title: Diagnostics.Trace
---

# Diagnostics.Trace


## Description

Écrit une entrée de trace, si le traçage est activé, puis retourne la valeur.


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

Écrit une trace <code>message</code>, si le traçage est activé, puis retourne <code>value</code>. Le paramètre optionnel <code>delayed</code> spécifie si l'évaluation de <code>value</code> doit être retardée jusqu'à ce que le message soit tracé. <code>traceLevel</code> peut prendre l'une des valeurs suivantes :    <code>TraceLevel.Critical</code>    <code>TraceLevel.Error</code>,    <code>TraceLevel.Warning</code>,    <code>TraceLevel.Information</code>,    <code>TraceLevel.Verbose</code>.  


## Examples

### Example #1 
Tracez le message avant d&#39;appeler la fonction Text.From et de retourner le résultat.
```powerquery
Diagnostics.Trace(TraceLevel.Information, "TextValueFromNumber", () => Text.From(123), true)
```

Result: 
```powerquery
"123"
```




## Category
Diagnostics
