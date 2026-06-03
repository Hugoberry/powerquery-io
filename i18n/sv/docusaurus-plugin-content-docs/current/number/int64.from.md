---
title: Int64.From
---

# Int64.From


Skapar ett 64-bitars heltal av det givna värdet.


## Syntax

```powerquery
Int64.From(
    value as any,
    optional culture as text,
    optional roundingMode as RoundingMode.Type
) as number
```


## Remarks

Returnerar ett 64-bitars `number`\-heltalsvärde från det givna `value`. Om det givna `value` är `null`, returnerar `Int64.From` `null`. Om det givna `value` är `number` inom intervallet för 64-bitars heltal utan decimaldel, returneras `value`. Om talet har en decimaldel avrundas det med det angivna avrundningsläget. Standardavrundningsläget är `RoundingMode.ToEven`. Om det givna `value` är av någon annan typ, använder du `Number.FromText` för att konvertera det till ett `number`\-värde. Mer information om tillgängliga avrundningslägen finns i `Number.Round`. En valfri `culture` kan även anges (till exempel, "en-US").


## Examples

### Example #1
Ta fram ett 64-bitars `number`\-heltalsvärde för `"4"`.
```powerquery
Int64.From("4")
```

Result: 
```powerquery
4
```


### Example #2
Hämta 64-bitars `number`\-heltalsvärdet för `"4.5"` genom att använda `RoundingMode.AwayFromZero`.
```powerquery
Int64.From("4.5", null, RoundingMode.AwayFromZero)
```

Result: 
```powerquery
5
```




## Category
Number.Conversion and formatting
