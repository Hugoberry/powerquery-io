---
title: Table.AlternateRows
---

# Table.AlternateRows


## Description

आरंभिक ऑफ़सेट रखता है फिर निम्न पंक्तियाँ लेने और छोड़ने का विकल्प देता है.


## Syntax

```powerquery
Table.AlternateRows(
    table as table,
    offset as number,
    skip as number,
    take as number
) as table
```


## Details

आरंभिक ऑफ़सेट रखता है फिर निम्न पंक्तियाँ लेने और छोड़ने का विकल्प देता है.    <ul>       <li><code>table</code>: इनपुट तालिका.</li>       <li><code>offset</code>: पुनरावृत्तियाँ प्रारंभ करने से पहले रखने के लिए पंक्तियों की संख्या.</li>       <li><code>skip</code>: प्रत्येक पुनरावृत्ति में निकालने के लिए पंक्तियों कि संख्या.</li>       <li><code>take</code>: प्रत्येक पुनरावृत्ति में रखने के लिए पंक्तियों कि संख्या.</li>    </ul>    


## Examples

### Example #1 
पहली पंक्ति से प्रारंभ होने वाली तालिका से एक तालिका लौटाएँ जो , 1 मान छोड़ देता है और 1 मान रखता है.
```powerquery
Table.AlternateRows(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"]
    }),
    1,
    1,
    1
)
```

Result: 
```powerquery
Table.FromRecords({
    [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
    [CustomerID = 3, Name = "Paul", Phone = "543-7890"]
})
```




## Category
Table.Row operations
