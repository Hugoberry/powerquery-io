---
title: Diagnostics.Trace
---

# Diagnostics.Trace


## Description

Қадағалау қосылса, қадағалау жазбасын жазады және мәнді қайтарады.


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

Қадағалау қосылса, <code>message</code> қадағалауды жазады және <code>value</code> қайтарады. <code>delayed</code> қосымша параметрі хабар қадағаланбайынша <code>value</code> бағалауды кейінге қалдыруды не қалдырмауды көрсетеді. <code>traceLevel</code> мына мәндердің бірін алады:    <code>TraceLevel.Critical</code>    <code>TraceLevel.Error</code>,    <code>TraceLevel.Warning</code>,    <code>TraceLevel.Information</code>,    <code>TraceLevel.Verbose</code>.  


## Examples

### Example #1 
Text.From функциясын шақырмас бұрын хабарды қадағалаңыз және нәтижені қайтарыңыз.
```powerquery
Diagnostics.Trace(TraceLevel.Information, "TextValueFromNumber", () => Text.From(123), true)
```

Result: 
```powerquery
"123"
```




## Category
Diagnostics
