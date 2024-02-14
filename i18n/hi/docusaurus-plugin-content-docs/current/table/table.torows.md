---
title: Table.ToRows
---

# Table.ToRows


तालिका से पंक्ति मानों की नेस्टेड सूचियों से एक सूची बनाता है.


## Syntax

```powerquery
Table.ToRows(
    table as table
) as list
```


## Remarks

तालिका, <code>table</code> की नेस्टेड सूचियों से एक सूची बनाता है.  प्रत्येक सूचीबद्ध आइटम एक आंतरिक सूची होती है जिनमें पंक्ति मान होते हैं.


## Examples

### Example #1 
तालिका के पंक्ति मानों की एक सूची बनाएँ.
```powerquery
Table.ToRows(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"]
    })
)
```

Result: 
```powerquery
{
    {1, "Bob", "123-4567"},
    {2, "Jim", "987-6543"},
    {3, "Paul", "543-7890"}
}
```




## Category
Table.Conversions
