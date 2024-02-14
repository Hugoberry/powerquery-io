---
title: List.Range
---

# List.Range


ऑफ़सेट पर शुरू होने वाली सूची का सबसेट लौटाता है.


## Syntax

```powerquery
List.Range(
    list as list,
    offset as number,
    optional count as number
) as list
```


## Remarks

ऑफ़सेट <code>list</code> पर शुरू होने वाली सूची का सबसेट लौटाता है. एक वैकल्पिक पैरामीटर, <code>offset</code>, सबसेट के आइटमों की अधिकतम संख्या सेट करता है.


## Examples

### Example #1 
1 से 10 तक की संख्याओं की सूची के ऑफ़सेट 6 पर प्रारंभ होने वाला सबसेट प्राप्त करें.
```powerquery
List.Range({1..10}, 6)
```

Result: 
```powerquery
{7, 8, 9, 10}
```


### Example #2 
1 से 10 तक की संख्याओं की सूची के ऑफ़सेट 6 से लंबाई 2 का सबसेट प्राप्त करें.
```powerquery
List.Range({1..10}, 6, 2)
```

Result: 
```powerquery
{7, 8}
```




## Category
List.Selection
