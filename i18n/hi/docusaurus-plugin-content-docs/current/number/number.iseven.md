---
title: Number.IsEven
---

# Number.IsEven


अगर मान सम है, तो संकेत देता है.


## Syntax

```powerquery
Number.IsEven(
    number as number
) as logical
```


## Remarks

अगर मान सम है, तो `true` अन्यथा `false` लौटाकर संकेत देता है कि मान, `number`, सम है.


## Examples

### Example #1
जाँचें कि क्या 625 एक सम संख्या है.
```powerquery
Number.IsEven(625)
```

Result: 
```powerquery
false
```


### Example #2
जाँचें कि क्या 82 एक सम संख्या है.
```powerquery
Number.IsEven(82)
```

Result: 
```powerquery
true
```




## Category
Number.Information
