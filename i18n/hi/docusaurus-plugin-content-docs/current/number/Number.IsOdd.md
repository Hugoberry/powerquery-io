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

अगर मान विषम है, तो संकेत देता है. अगर <code>number</code> एक विषम संख्या है, तो <code>true</code> अन्यथा <code>false</code> लौटाता है.


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
