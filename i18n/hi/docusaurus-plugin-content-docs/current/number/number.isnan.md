---
title: Number.IsNaN
---

# Number.IsNaN


अगर मान NaN (कोई संख्या नहीं) है, तो संकेत देता है.


## Syntax

```powerquery
Number.IsNaN(
    number as number
) as logical
```


## Remarks

यह बताता है कि मान NaN (संख्या नहीं) है या नहीं. अगर `number`, `Number.NaN` के समतुल्य है, तो `true` लौटाता है; अन्यथा `false`.


## Examples

### Example #1
जाँचें कि क्या 0 को 0 से भाग करने पर NaN आता है.
```powerquery
Number.IsNaN(0/0)
```

Result: 
```powerquery
true
```


### Example #2
जाँचें कि क्या 1 को 0 से भाग करने पर NaN आता है.
```powerquery
Number.IsNaN(1/0)
```

Result: 
```powerquery
false
```




## Category
Number.Information
