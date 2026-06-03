---
title: Single.From
---

# Single.From


Skapar en Single av det givna värdet.


## Syntax

```powerquery
Single.From(
    value as any,
    optional culture as text
) as number
```


## Remarks

Returnerar ett enkelt `number`\-värde från det givna `value`. Om det givna `value` är `null` returnerar `Enkelt.From` `null`. Om det givna `value` är `number` inom intervallet för enkelt, returneras `value`. I annat fall returneras ett fel. Om `value` konverteras den först till en `number` med `Number.FromText`. En valfri `culture` kan även anges (till exempel, "en-US").


## Examples

### Example #1
Hämta Single `number`\-värdet för `"1.5"`.
```powerquery
Single.From("1.5")
```

Result: 
```powerquery
1.5
```




## Category
Number.Conversion and formatting
