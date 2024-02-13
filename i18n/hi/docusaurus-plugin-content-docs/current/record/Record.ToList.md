---
title: Record.ToList
---

# Record.ToList


ऐसे मानों की एक सूची लौटाता है जिनमें इनपुट रिकॉर्ड के फ़ील्ड मान होते हैं.


## Syntax

```powerquery
Record.ToList(
    record as record
) as list
```


## Remarks

ऐसा मानों की सूची लौटाता है जिनमें इनपुट <code>record</code> के फ़ील्ड मान होते हैं.


## Examples

### Example #1 
किसी रिकॉर्ड से फ़ील्ड मान निकालें.
```powerquery
Record.ToList([A = 1, B = 2, C = 3])
```

Result: 
```powerquery
{1, 2, 3}
```




## Category
Record.Serialization
