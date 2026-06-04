---
title: Diagnostics.Trace
---

# Diagnostics.Trace


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


## Remarks

Егер қадағалау қосылған болса, із `message`жазады және `value` қайтарады. `delayed` қосымша параметрі хабар қадағаланғанша `value` бағалауын кейінге қалдыру керектігін көрсетеді. `traceLevel` келесі мәндердің бірі болуы мүмкін:

-   `TraceLevel.Critical`
-   `TraceLevel.Error`
-   `TraceLevel.Warning`
-   `TraceLevel.Information`
-   `TraceLevel.Verbose`


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
