---
title: Double.From
---

# Double.From


Skapar en Double av det givna värdet.


## Syntax

```powerquery
Double.From(
    value as any,
    optional culture as text
) as number
```


## Remarks

Returnerar ett Double `number`\-värde från det givna `value`. Om det givna `value` är `null` returnerar `Double.From` `null`. Om det givna `value` är `number` inom intervallet för Double, returneras `value`. I annat fall returneras ett fel. Om `value` konverteras den först till en `number` med `Number.FromText`. En valfri `culture` kan även anges (till exempel, "en-US").


## Examples

### Example #1
Hämta Double `number`\-värdet för `"4"`.
```powerquery
Double.From("4.5")
```

Result: 
```powerquery
4.5
```




## Category
Number.Conversion and formatting
