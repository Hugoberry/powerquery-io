---
title: Table.Combine
---

# Table.Combine


## Description

वह तालिका लौटाता है जो तालिकाओं की सूची को मर्ज करने का परिणाम है.


## Syntax

```powerquery
Table.Combine(
    tables as list,
    optional columns as any
) as table
```


## Details

ऐसी तालिका को वापस लौटाएँ, जो तालिकाओं की सूची को मर्ज करने से बनी है, <code>tables</code>. यदि <code>columns</code> निर्दिष्ट नहीं है, तो इस परिणामी तालिका में <code>columns</code> या इनपुट प्रकार के किसी संघ द्वारा निर्धारित कोई पंक्ति प्रकार संरचना होगी.


## Examples

### Example #1 
तीनों तालिकाओं को एक साथ मर्ज करें.
```powerquery
Table.Combine({
    Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]}),
    Table.FromRecords({[CustomerID = 2, Name = "Jim", Phone = "987-6543"]}),
    Table.FromRecords({[CustomerID = 3, Name = "Paul", Phone = "543-7890"]})
})
```

Result: 
```powerquery
Table.FromRecords({
    [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
    [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
    [CustomerID = 3, Name = "Paul", Phone = "543-7890"]
})
```


### Example #2 
तीन तालिकाओं को भिन्न संरचनाओं के साथ मर्ज करें.
```powerquery
Table.Combine({
    Table.FromRecords({[Name = "Bob", Phone = "123-4567"]}),
    Table.FromRecords({[Fax = "987-6543", Phone = "838-7171"]}),
    Table.FromRecords({[Cell = "543-7890"]})
})
```

Result: 
```powerquery
Table.FromRecords({
    [Name = "Bob", Phone = "123-4567", Fax = null, Cell = null],
    [Name = null, Phone = "838-7171", Fax = "987-6543", Cell = null],
    [Name = null, Phone = null, Fax = null, Cell = "543-7890"]
})
```


### Example #3 
दो तालिकाओं और प्रोजेक्ट को दिए गए प्रकार के साथ मर्ज करें.
```powerquery
Table.Combine(
    {
        Table.FromRecords({[Name = "Bob", Phone = "123-4567"]}),
        Table.FromRecords({[Fax = "987-6543", Phone = "838-7171"]}),
        Table.FromRecords({[Cell = "543-7890"]})
    },
    {"CustomerID", "Name"}
)
```

Result: 
```powerquery
Table.FromRecords({
    [CustomerID = null, Name = "Bob"],
    [CustomerID = null, Name = null],
    [CustomerID = null, Name = null]
})
```




## Category
Table.Row operations
