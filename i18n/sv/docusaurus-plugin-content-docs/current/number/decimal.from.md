---
title: Decimal.From
---

# Decimal.From


Skapar en decimal av det givna värdet.


## Syntax

```powerquery
Decimal.From(
    value as any,
    optional culture as text
) as number
```


## Remarks

Returnerar ett decimal `number`\-värde från det givna `value`. Om det givna `value` är `null` `Decimal.Från` returnerar `null`. Om det givna `value` är `number` inom intervallet för Decimal, returneras `value`. I annat fall returneras ett fel. Om `value` konverteras den först till en `number` med `Number.FromText`. En valfri `culture` kan även anges (till exempel, "en-US").


## Examples

### Example #1
Hämta Decimal `number`\-värdet för `"4.5"`.
```powerquery
Decimal.From("4.5")
```

Result: 
```powerquery
4.5
```




## Category
Number.Conversion and formatting
