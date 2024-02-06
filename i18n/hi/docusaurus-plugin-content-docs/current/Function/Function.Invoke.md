---
title: Function.Invoke
---

# Function.Invoke


दिया गया फ़ंक्शन इनवोक करें


## Syntax

```powerquery
Function.Invoke(
    function as function,
    args as list
) as any
```


## Remarks

तर्कों की निर्दिष्ट सूची का उपयोग करके दिए गए फ़ंक्शन इनवोक करता है और परिणाम लौटाता है.


## Examples

### Example #1 
Record.FieldNames को एक तर्क [A=1,B=2] से इनवोक करता है
```powerquery
Function.Invoke(Record.FieldNames, {[A = 1, B = 2]})
```

Result: 
```powerquery
{"A", "B"}
```




## Category
Function
