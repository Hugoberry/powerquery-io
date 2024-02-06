---
title: Table.IsEmpty
---

# Table.IsEmpty


इंगित करता है कि क्या तालिका में कोई पंक्ति है.


## Syntax

```powerquery
Table.IsEmpty(
    table as table
) as logical
```


## Remarks

इंगित करता है कि <code>table</code> में कोई पंक्ति है या नहीं. यदि कोई पंक्ति नहीं है (अर्थात् तालिका रिक्त है) तो <code>असत्य</code> लौटाता है, अन्यथा <code>सत्य</code> लौटाता.


## Examples

### Example #1 
निर्धारित करें कि क्या तालिका रिक्त है.
```powerquery
Table.IsEmpty(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"]
    })
)
```

Result: 
```powerquery
false
```


### Example #2 
निर्धारित करें कि क्या तालिका &lt;code&gt;(\{})&lt;/code&gt; रिक्त है.
```powerquery
Table.IsEmpty(Table.FromRecords({}))
```

Result: 
```powerquery
true
```




## Category
Table.Information
