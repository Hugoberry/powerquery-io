---
title: Table.FromColumns
---

# Table.FromColumns


स्तंभों की सूची से और निर्दिष्ट मानों से एक तालिका बनाता है.


## Syntax

```powerquery
Table.FromColumns(
    lists as list,
    optional columns as any
) as table
```


## Remarks

सूची <code>lists</code> से <code>columns</code> प्रकार की तालिका बनाता है, जिसमें स्तंभ नामों और मानों वाली नेस्टेड सूचियाँ मौजूद होती हैं.    यदि कुछ स्तंभों में दूसरों से अधिक मान हैं, तो स्तंभों के नल योग्य होने पर अनुपस्थित मानों को डिफ़ॉल्ट मान 'null' से भर दिया जाएगा.


## Examples

### Example #1 
किसी सूची में ग्राहक नामों की सूची से तालिका लौटाएँ. ग्राहक सूची आइटम में प्रत्येक मान पंक्ति मान बन जाता है, और प्रत्येक सूची स्तंभ बन जाती है.
```powerquery
Table.FromColumns({
    {1, "Bob", "123-4567"},
    {2, "Jim", "987-6543"},
    {3, "Paul", "543-7890"}
})
```

Result: 
```powerquery
Table.FromRecords({
    [Column1 = 1, Column2 = 2, Column3 = 3],
    [Column1 = "Bob", Column2 = "Jim", Column3 = "Paul"],
    [Column1 = "123-4567", Column2 = "987-6543", Column3 = "543-7890"]
})
```


### Example #2 
स्तंभों की दी गई सूची और स्तंभ नामों की सूची से एक तालिका बनाएँ.
```powerquery
Table.FromColumns(
    {
        {1, "Bob", "123-4567"},
        {2, "Jim", "987-6543"},
        {3, "Paul", "543-7890"}
    },
    {"CustomerID", "Name", "Phone"}
)
```

Result: 
```powerquery
Table.FromRecords({
    [CustomerID = 1, Name = 2, Phone = 3],
    [CustomerID = "Bob", Name = "Jim", Phone = "Paul"],
    [CustomerID = "123-4567", Name = "987-6543", Phone = "543-7890"]
})
```


### Example #3 
प्रति पंक्ति में स्तंभों की भिन्न संख्या के साथ एक तालिका बनाएँ. पंक्ति का गुम मान नल है.
```powerquery
Table.FromColumns(
    {
        {1, 2, 3},
        {4, 5},
        {6, 7, 8, 9}
    },
    {"column1", "column2", "column3"}
)
```

Result: 
```powerquery
Table.FromRecords({
    [column1 = 1, column2 = 4, column3 = 6],
    [column1 = 2, column2 = 5, column3 = 7],
    [column1 = 3, column2 = null, column3 = 8],
    [column1 = null, column2 = null, column3 = 9]
})
```




## Category
Table.Table construction
