---
title: Byte.From
---

# Byte.From


Skapar ett 8-bitars heltal av det givna värdet.


## Syntax

```powerquery
Byte.From(
    value as any,
    optional culture as text,
    optional roundingMode as RoundingMode.Type
) as number
```


## Remarks

Returnerar ett 8-bitars `number`\-heltalsvärde från det givna `value`. Om det givna `value` är `null`. `Byte. Från` returnerar `null`.Om det givna `value` är ett `number` inom intervallet för en 8-bitars heltal utan decimaldel, returneras `value`. Om talet har en decimaldel avrundas det med det angivna avrundningsläget. Standardavrundningsläget är `RoundingMode.ToEven`. Om `value` är av någon annan typ konverteras den först till en `number` med `Number.FromText`. Mer information om tillgängliga avrundningslägen finns i `Number.Round`. En valfri `culture` kan även anges (till exempel, "en-US").


## Examples

### Example #1
Hämta 8-bitars `number`\-heltalsvärdet för `"4"`.
```powerquery
Byte.From("4")
```

Result: 
```powerquery
4
```


### Example #2
Hämta 8-bitars `number`\-heltalsvärdet för `"4.5"` genom att använda `RoundingMode.AwayFromZero`.
```powerquery
Byte.From("4.5", null, RoundingMode.AwayFromZero)
```

Result: 
```powerquery
5
```




## Category
Number.Conversion and formatting
