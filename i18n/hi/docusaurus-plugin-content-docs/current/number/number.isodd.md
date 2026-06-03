---
title: Number.IsOdd
---

# Number.IsOdd


अगर मान विषम है, तो संकेत देता है.


## Syntax

```powerquery
Number.IsOdd(
    number as number
) as logical
```


## Remarks

अगर मान विषम है, तो संकेत देता है. अगर `number` एक विषम संख्या है, तो `true` अन्यथा `false` लौटाता है.


## Examples

### Example #1
जाँचें कि क्या 625 एक विषम संख्या है.
```powerquery
Number.IsOdd(625)
```

Result: 
```powerquery
true
```


### Example #2
जाँचें कि क्या 82 एक विषम संख्या है.
```powerquery
Number.IsOdd(82)
```

Result: 
```powerquery
false
```




## Category
Number.Information
