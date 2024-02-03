---
title: Diagnostics.Trace
---

# Diagnostics.Trace


## Description

Zapiše vnos sledi, če je omogočeno sledenje, in vrne vrednost.


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

Zapiše sled <code>message</code>, če je omogočeno sledenje, in vrne <code>value</code>. Izbirni parameter <code>delayed</code> določa, ali je ovrednotenje <code>value</code> zakasnjeno, dokler je sporočilo sledeno. Za <code>traceLevel</code> je mogoče določiti eno teh vrednosti:    <code>TraceLevel.Critical</code>    <code>TraceLevel.Error</code>,    <code>TraceLevel.Warning</code>,    <code>TraceLevel.Information</code>,    <code>TraceLevel.Verbose</code>.  


## Examples

### Example #1 
Sledi sporočilu, preden prikliče funkcijo Text.From, in vrne rezultat.
```powerquery
Diagnostics.Trace(TraceLevel.Information, "TextValueFromNumber", () => Text.From(123), true)
```

Result: 
```powerquery
"123"
```




## Category
Diagnostics
