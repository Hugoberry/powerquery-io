---
title: Int8.From
---

# Int8.From


Skapar ett signerat 8-bitars heltal av det givna värdet.


## Syntax

```powerquery
Int8.From(
    value as any,
    optional culture as text,
    optional roundingMode as RoundingMode.Type
) as number
```


## Remarks

Returnerar ett signerat 8-bitars `number`\-heltalsvärde från det givna `value`. Om det givna `value` är `null` returnerar `Int8.Från`returneras `null`. Om det givna `value` är `number` inom intervallet för ett signerat 8-bitars heltal utan decimaldel, returneras `value`. Om talet har en decimaldel avrundas det med det angivna avrundningsläget. Standardavrundningsläget är `RoundingMode.ToEven`. Om `value` är av någon annan typ kontrollerar du under `Number.FromText` om hur du konverterar det till `number`\-värde. Mer information om tillgängliga avrundningslägen finns i `Number.Round`. En valfri `culture` kan även anges (till exempel, "en-US").


## Examples

### Example #1
Hämta det signerade 8-bitars `number`\-heltalsvärdet för `"4"`.
```powerquery
Int8.From("4")
```

Result: 
```powerquery
4
```


### Example #2
Hämta det signerade 8-bitars `number`\-heltalsvärdet för `"4.5"` genom att använda `RoundingMode.AwayFromZero`.
```powerquery
Int8.From("4.5", null, RoundingMode.AwayFromZero)
```

Result: 
```powerquery
5
```




## Category
Number.Conversion and formatting
