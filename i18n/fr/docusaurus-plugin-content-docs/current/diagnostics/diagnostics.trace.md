---
title: Diagnostics.Trace
---

# Diagnostics.Trace


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


## Remarks

Écrit une trace `message`, si le traçage est activé, et renvoie `value`. Un paramètre facultatif `delayed` spécifie s'il convient de différer l'évaluation `value` jusqu'à ce que le message soit tracé. `traceLevel` peut prendre l'une des valeurs suivantes :

-   `TraceLevel.Critical`
-   `TraceLevel.Error`
-   `TraceLevel.Warning`
-   `TraceLevel.Information`
-   `TraceLevel.Verbose`


## Examples

### Example #1
Tracez le message avant d'appeler la fonction Text.From et de retourner le résultat.
```powerquery
Diagnostics.Trace(TraceLevel.Information, "TextValueFromNumber", () => Text.From(123), true)
```

Result: 
```powerquery
"123"
```




## Category
Diagnostics
