---
title: Value.RemoveMetadata
---

# Value.RemoveMetadata


Енгізілген метадеректерді жояды.


## Syntax

```powerquery
Value.RemoveMetadata(
    value as any,
    optional metaValue as any
) as any
```


## Remarks

Енгізілген метадеректерді жояды.


## Examples

### Example #1
Мәтіндік мәннен барлық метадеректерді жою.
```powerquery
Value.Metadata(
    Value.RemoveMetadata("abc" meta [a = 1, b = 2])
)
```

Result: 
```powerquery
[]
```


### Example #2
Мәтіндік мәннен тек бір метадеректер өрісін жойыңыз.
```powerquery
Value.Metadata(
    Value.RemoveMetadata("abc" meta [a = 1, b = 2], {"a"})
)
```

Result: 
```powerquery
[b = 2]
```




## Category
Metadata
