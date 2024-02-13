---
title: Record.Combine
---

# Record.Combine


दी गई सूची के रिकॉर्ड संयोजित करता है.


## Syntax

```powerquery
Record.Combine(
    records as list
) as record
```


## Remarks

दी गई <code>records</code> के रिकॉर्ड संयोजित करता है. अगर <code>records</code> में गैर-रिकॉर्ड वाले मान हैं, तो एक त्रुटि लौटाई जाती है.


## Examples

### Example #1 
रिकॉर्ड से एक संयोजित रिकॉर्ड बनाएँ.
```powerquery
Record.Combine({
    [CustomerID = 1, Name = "Bob"],
    [Phone = "123-4567"]
})
```

Result: 
```powerquery
[CustomerID = 1, Name = "Bob", Phone = "123-4567"]
```




## Category
Record.Transformations
