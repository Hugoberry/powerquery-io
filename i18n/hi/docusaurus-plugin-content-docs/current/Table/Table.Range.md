---
title: Table.Range
---

# Table.Range


## Description

निर्दिष्ट ऑफ़सेट पर शुरू होने वाली पंक्तियों को लौटाता है.


## Syntax

```powerquery
Table.Range(
    table as table,
    offset as number,
    optional count as number
) as table
```


## Details

निर्दिष्ट <code>offset</code> पर प्रारंभ होने वाली <code>table</code> की पंक्तियाँ लौटाता है. एक वैकल्पिक पैरामीटर, <code>count</code>, निर्दिष्ट करता है कि कितनी पंक्तियाँ लौटानी हैं. डिफ़ॉल्‍ट रूप से, ऑफ़सेट के बाद की सभी पंक्तियाँ लौटाई जाती हैं.


## Examples

### Example #1 
तालिका में ऑफ़सेट 1 पर प्रारंभ होने वाली सभी पंक्तियाँ लौटाएँ.
```powerquery
Table.Range(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
    }),
    1
)
```

Result: 
```powerquery
Table.FromRecords({
    [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
    [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
    [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
})
```


### Example #2 
तालिका में ऑफ़सेट 1 पर प्रारंभ होने वाली एक पंक्ति लौटाएँ.
```powerquery
Table.Range(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
    }),
    1,
    1
)
```

Result: 
```powerquery
Table.FromRecords({[CustomerID = 2, Name = "Jim", Phone = "987-6543"]})
```




## Category
Table.Row operations
