---
title: Table.AddIndexColumn
---

# Table.AddIndexColumn


स्पष्ट स्थिति मानों वाला एक स्तंभ जोड़ता है.


## Syntax

```powerquery
Table.AddIndexColumn(
    table as table,
    newColumnName as text,
    optional initialValue as number,
    optional increment as number,
    optional columnType as type
) as table
```


## Remarks

स्पष्ट स्थिति मानों वाली <code>table</code> में <code>newColumnName</code> नाम का एक स्तंभ जोड़ता है.    एक वैकल्पिक मान, <code>initialValue</code>, आरंभिक अनुक्रमणिका मान होता है. एक वैकल्पिक मान, <code>increment</code>, निर्दिष्ट करता है कि प्रत्येक अनुक्रमणिका मान में कितनी वृद्धि करनी है.


## Examples

### Example #1 
तालिका में &#34;अनुक्रमणिका&#34; नाम से एक अनुक्रमणिका स्तंभ जोड़ें.
```powerquery
Table.AddIndexColumn(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
    }),
    "Index"
)
```

Result: 
```powerquery
Table.FromRecords({
    [CustomerID = 1, Name = "Bob", Phone = "123-4567", Index = 0],
    [CustomerID = 2, Name = "Jim", Phone = "987-6543", Index = 1],
    [CustomerID = 3, Name = "Paul", Phone = "543-7890", Index = 2],
    [CustomerID = 4, Name = "Ringo", Phone = "232-1550", Index = 3]
})
```


### Example #2 
तालिका में, मान 10 से शुरू और 5 तक वृद्धि करते हुए, &#34;अनुक्रमणिका&#34; नाम से अनुक्रमणिका स्तंभ जोड़ें.
```powerquery
Table.AddIndexColumn(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
    }),
    "Index",
    10,
    5
)
```

Result: 
```powerquery
Table.FromRecords({
    [CustomerID = 1, Name = "Bob", Phone = "123-4567", Index = 10],
    [CustomerID = 2, Name = "Jim", Phone = "987-6543", Index = 15],
    [CustomerID = 3, Name = "Paul", Phone = "543-7890", Index = 20],
    [CustomerID = 4, Name = "Ringo", Phone = "232-1550", Index = 25]
})
```




## Category
Table.Transformation
