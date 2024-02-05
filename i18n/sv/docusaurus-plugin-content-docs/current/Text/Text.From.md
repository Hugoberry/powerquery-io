---
title: Text.From
---

# Text.From


## Description

Skapar ett textvärde från det angivna värdet.


## Syntax

```powerquery
Text.From(
    value as any,
    optional culture as text
) as text
```


## Details

Returnerar textrepresentationen av <code>value</code>. <code>value</code> kan vara ett <code>number</code>-, <code>date</code>-, <code>time</code>-, <code>datetime</code>-, <code>datetimezone</code>-, <code>logical</code>-, <code>duration</code>- eller <code>binary</code>-värde.    Om det angivna värdet är null returnerar <code>Text.From</code> null. En valfri <code>culture</code> kan även anges (till exempel, "en-US").


## Examples

### Example #1 
Skapa ett textvärde från talet 3.
```powerquery
Text.From(3)
```

Result: 
```powerquery
"3"
```




## Category
Text.Conversions from and to text
