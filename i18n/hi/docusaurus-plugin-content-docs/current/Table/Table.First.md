---
title: Table.First
---

# Table.First


## Description

पहली पंक्ति या कोई निर्दिष्ट डिफ़ॉल्ट मान लौटाता है.


## Syntax

```powerquery
Table.First(
    table as table,
    optional default as any
) as any
```


## Details

<code>table</code> की पहली पंक्ति या तालिका रिक्त होने पर वैकल्पिक डिफ़ॉल्ट मान, <code>default</code>, लौटाता है.


## Examples

### Example #1 
तालिका की पहली पंक्ति प्राप्त ढूँढें.
```powerquery
Table.First(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"]
    })
)
```

Result: 
```powerquery
[CustomerID = 1, Name = "Bob", Phone = "123-4567"]
```


### Example #2 
तालिका &lt;code&gt;(\{})&lt;/code&gt; की पहली पंक्ति प्राप्त करें या रिक्त होने पर [a = 0, b = 0] दें.
```powerquery
Table.First(Table.FromRecords({}), [a = 0, b = 0])
```

Result: 
```powerquery
[a = 0, b = 0]
```




## Category
Table.Row operations
