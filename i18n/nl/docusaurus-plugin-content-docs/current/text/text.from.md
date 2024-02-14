---
title: Text.From
---

# Text.From


Maakt een tekstwaarde van de opgegeven waarde.


## Syntax

```powerquery
Text.From(
    value as any,
    optional culture as text
) as text
```


## Remarks

Hiermee wordt de tekstweergave van <code>value</code> geretourneerd. De <code>value</code> kan een waarde van <code>number</code>, <code>date</code>, <code>time</code>, <code>datetime</code>, <code>datetimezone</code>, <code>logical</code>, <code>duration</code> of <code>binary</code> zijn. Als de opgegeven waarde null is, wordt door <code>Text.From</code> null geretourneerd. Een optionele <code>culture</code> kan ook worden opgegeven (bijvoorbeeld: nl-NL).


## Examples

### Example #1 
Een tekstwaarde van het getal 3 maken.
```powerquery
Text.From(3)
```

Result: 
```powerquery
"3"
```




## Category
Text.Conversions from and to text
