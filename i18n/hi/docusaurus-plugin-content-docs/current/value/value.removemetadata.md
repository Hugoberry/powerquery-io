---
title: Value.RemoveMetadata
---

# Value.RemoveMetadata


मेटाडेटा के इनपुट को निकाल देता है.


## Syntax

```powerquery
Value.RemoveMetadata(
    value as any,
    optional metaValue as any
) as any
```


## Remarks

मेटाडेटा के इनपुट को निकाल देता है.


## Examples

### Example #1
पाठ मान से सभी मेटाडेटा निकालें.
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
पाठ मान से मेटाडेटा की केवल एक फ़ील्ड निकालें.
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
