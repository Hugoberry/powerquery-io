---
title: Table.FillUp
---

# Table.FillUp


किसी कक्ष के मान को ऊपर स्तंभ में नल मान वाले कक्षों में वितरित करता है.


## Syntax

```powerquery
Table.FillUp(
    table as table,
    columns as list
) as table
```


## Remarks

निर्दिष्ट <code>table</code> से एक तालिका लौटाता है, जिसमें अगले कक्ष के मान को निर्दिष्ट <code>columns</code> में ऊपर दिए गए नल-मान वाले कक्षों में वितरित किया जाता है.


## Examples

### Example #1 
तालिका से उनसे नीचे के मान से भरे हुए स्तंभ [Column2] में नल मान वाली तालिका लौटाएँ.
```powerquery
Table.FillUp(
    Table.FromRecords({
        [Column1 = 1, Column2 = 2],
        [Column1 = 3, Column2 = null],
        [Column1 = 5, Column2 = 3]
    }),
    {"Column2"}
)
```

Result: 
```powerquery
Table.FromRecords({
    [Column1 = 1, Column2 = 2],
    [Column1 = 3, Column2 = 3],
    [Column1 = 5, Column2 = 3]
})
```




## Category
Table.Transformation
