---
title: Percentage.From
---

# Percentage.From


Returnerar ett prosenttal av det angivna värdet.


## Syntax

```powerquery
Percentage.From(
    value as any,
    optional culture as text
) as number
```


## Remarks

Returnerar ett `percentage`\-värde från det angivna `value`. Om det angivna `value` är `null`, returnerar `Percentage.From` `null`. Om det angivna `value` är `text` med efterföljande procenttecken, returneras det konverterade decimaltalet. För andra förekomster, konverteras värdet till en `number` med `Number.From`. En valfri `culture` kan också tillhandahållas (till exempel "en-US").


## Examples

### Example #1
Hämta `prosent`värdet för `"12,3 %"`.
```powerquery
Percentage.From("12.3%")
```

Result: 
```powerquery
0.123
```




## Category
Number.Conversion and formatting
