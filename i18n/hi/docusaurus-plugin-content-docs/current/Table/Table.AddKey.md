---
title: Table.AddKey
---

# Table.AddKey


## Description

दी गई तालिका के प्रकार में कुंजी जोड़ता है.


## Syntax

```powerquery
Table.AddKey(
    table as table,
    columns as list,
    isPrimary as logical
) as table
```


## Details

<code>table</code> में कुंजी जोड़ता है जहाँ <code>columns</code> कालम नाम की सूची है जो कुंजी को परिभाषित करती है और <code>isPrimary</code> यह निर्दिष्ट करती है कि कुंजी प्राथमिक है या नहीं.


## Examples

### Example #1 
तालिका में एकल-कालम प्राथमिक कुंजी जोड़ें.
```powerquery
let
    table = Table.FromRecords({
        [Id = 1, Name = "Hello There"],
        [Id = 2, Name = "Good Bye"]
    }),
    resultTable = Table.AddKey(table, {"Id"}, true)
in
    resultTable
```

Result: 
```powerquery
Table.FromRecords({
    [Id = 1, Name = "Hello There"],
    [Id = 2, Name = "Good Bye"]
})
```




## Category
Table.Transformation
