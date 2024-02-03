---
title: Table.Repeat
---

# Table.Repeat


## Description

तालिकाओं की पंक्तियों को निर्दिष्ट संख्या बार दोहराता है.


## Syntax

```powerquery
Table.Repeat(
    table as table,
    count as number
) as table
```


## Details

इनपुट <code>table</code> की निर्दिष्ट <code>count</code> बार दोहराई गई पंक्तियों के साथ एक तालिका लौटाता है.


## Examples

### Example #1 
तालिका में पंक्तियों को दो बार दोहराएँ.
```powerquery
Table.Repeat(
    Table.FromRecords({
        [a = 1, b = "hello"],
        [a = 3, b = "world"]
    }),
    2
)
```

Result: 
```powerquery
Table.FromRecords({
    [a = 1, b = "hello"],
    [a = 3, b = "world"],
    [a = 1, b = "hello"],
    [a = 3, b = "world"]
})
```




## Category
Table.Row operations
