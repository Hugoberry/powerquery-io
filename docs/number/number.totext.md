---
title: Number.ToText
---

# Number.ToText


Converts the given number to text.


## Syntax

```powerquery
Number.ToText(
    number as number,
    optional format as text,
    optional culture as text
) as text
```


## Remarks

Converts the numeric value `number` to a text value according to the format specified by `format`.  
  
The format is a text value indicating how the number should be converted. For more details on the supported format values, go to https://go.microsoft.com/fwlink/?linkid=2241210 and https://go.microsoft.com/fwlink/?linkid=2240884.  
  
An optional `culture` may also be provided (for example, "en-US") to control the culture-dependent behavior of `format`.


## Examples

### Example #1
Convert a number to text without specifying a format.
```powerquery
Number.ToText(4)
```

Result: 
```powerquery
"4"
```


### Example #2
Convert a number to exponential format.
```powerquery
Number.ToText(4, "e")
```

Result: 
```powerquery
"4.000000e+000"
```


### Example #3
Convert a number to percentage format with only one decimal place.
```powerquery
Number.ToText(-0.1234, "P1")
```

Result: 
```powerquery
"-12.3 %"
```




## Category
Number.Conversion and formatting
