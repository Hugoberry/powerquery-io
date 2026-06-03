---
title: Int32.From
---

# Int32.From


Skapar ett 32-bitars heltal av det givna värdet.


## Syntax

```powerquery
Int32.From(
    value as any,
    optional culture as text,
    optional roundingMode as RoundingMode.Type
) as number
```


## Remarks

Returnerar ett 32-bitars `number`\-heltalsvärde från det givna `value`. Om det givna `value` är `null` returnerar `Int32.From` `null`. Om det givna `value` är `number` inom intervallet för 32-bitars heltal utan decimaldel, returneras `value`. Om talet har en decimaldel avrundas det med det angivna avrundningsläget. Standardavrundningsläget är `RoundingMode.ToEven`. Om det givna `value` är av någon annan typ kontrollerar du under `Number.FromText` om hur du konverterar det till `number`\-värde. Mer information om tillgängliga avrundningslägen finns i `Number.Round`. En valfri `culture` kan även anges (till exempel, "en-US").


## Examples

### Example #1
Hämta 32-bitars `number`\-heltalsvärdet för `"4"`.
```powerquery
Int32.From("4")
```

Result: 
```powerquery
4
```


### Example #2
Hämta 32-bitars `number`\-heltalsvärdet för `"4.5"` genom att använda `RoundingMode.AwayFromZero`.
```powerquery
Int32.From("4.5", null, RoundingMode.AwayFromZero)
```

Result: 
```powerquery
5
```




## Category
Number.Conversion and formatting
