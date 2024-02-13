---
title: Text.From
---

# Text.From


Creates a text value from the given value.


## Syntax

```powerquery
Text.From(
    value as any,
    optional culture as text
) as text
```


## Remarks

Returns the text representation of <code>value</code>. The <code>value</code> can be a <code>number</code>, <code>date</code>, <code>time</code>, <code>datetime</code>, <code>datetimezone</code>, <code>logical</code>, <code>duration</code> or <code>binary</code> value.    If the given value is null, <code>Text.From</code> returns null. An optional <code>culture</code> may also be provided (for example, "en-US").


## Examples

### Example #1 
Create a text value from the number 3.
```powerquery
Text.From(3)
```

Result: 
```powerquery
"3"
```




## Category
Text.Conversions from and to text
