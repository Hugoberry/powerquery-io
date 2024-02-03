---
title: Table.FillDown
---

# Table.FillDown


## Description

पिछले कक्ष के मान को नीचे स्तंभ में नल मान वाले कक्षों में वितरित करता है.


## Syntax

```powerquery
Table.FillDown(
    table as table,
    columns as list
) as table
```


## Details

<code>table</code> निर्दिष्ट से एक तालिका लौटाता है, जिसमें पिछले कक्ष के मान को <code>columns</code> निर्दिष्ट में नीचे दिए गए नल-मान वाले कक्षों में वितरित किया जाता है.


## Examples

### Example #1 
तालिका से उनसे ऊपर के मान से भरे हुए स्तंभ [Place] में नल मान वाली तालिका लौटाएँ.
```powerquery
Table.FillDown(
    Table.FromRecords({
        [Place = 1, Name = "Bob"],
        [Place = null, Name = "John"],
        [Place = 2, Name = "Brad"],
        [Place = 3, Name = "Mark"],
        [Place = null, Name = "Tom"],
        [Place = null, Name = "Adam"]
    }),
    {"Place"}
)
```

Result: 
```powerquery
Table.FromRecords({
    [Place = 1, Name = "Bob"],
    [Place = 1, Name = "John"],
    [Place = 2, Name = "Brad"],
    [Place = 3, Name = "Mark"],
    [Place = 3, Name = "Tom"],
    [Place = 3, Name = "Adam"]
})
```




## Category
Table.Transformation
