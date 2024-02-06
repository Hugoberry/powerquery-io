---
title: Table.ToColumns
---

# Table.ToColumns


तालिका से स्तंभ मानों की नेस्टेड सूचियों से एक सूची बनाता है.


## Syntax

```powerquery
Table.ToColumns(
    table as table
) as list
```


## Remarks

तालिका, <code>table</code> की नेस्टेड सूचियों से एक सूची बनाता है.  प्रत्येक सूचीबद्ध आइटम एक आंतरिक सूची होती है जिनमें स्तंभ मान होते हैं.


## Examples

### Example #1 
तालिका के स्तंभ मानों की एक सूची बनाएँ.
```powerquery
Table.ToColumns(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"]
    })
)
```

Result: 
```powerquery
{{1, 2}, {"Bob", "Jim"}, {"123-4567", "987-6543"}}
```




## Category
Table.Conversions
