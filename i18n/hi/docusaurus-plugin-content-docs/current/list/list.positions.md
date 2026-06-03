---
title: List.Positions
---

# List.Positions


इनपुट के लिए ऑफ़सेट की सूची लौटाता है.


## Syntax

```powerquery
List.Positions(
    list as list
) as list
```


## Remarks

विशिष्ट इनपुट सूची के लिए ऑफ़सेट्स की एक सूची लौटाता है.

-   `list`: इनपुट सूची.

किसी सूची को परिवर्तित करने के लिए `List.Transform` का उपयोग करते समय, स्थिति तक रूपांतरण की पहुँच देने के लिए स्थितियों की सूची का उपयोग किया जा सकता है.


## Examples

### Example #1
सूची \{1, 2, 3, 4, null, 5\} के मानों के ऑफ़सेट प्राप्त करें.
```powerquery
List.Positions({1, 2, 3, 4, null, 5})
```

Result: 
```powerquery
{0, 1, 2, 3, 4, 5}
```


### Example #2
एक तालिका बनाएँ जो कि सूची में ग्राहक की स्थिति के आधार पर, प्रत्येक ग्राहक को एक ID असाइन करे.
```powerquery
let
    customers = {"Alice", "Bob", "Charlie", "Diana"},
    resultTable =
        Table.FromRecords(
            List.Transform(
                List.Positions(customers),
                each [
                    IDNumber = _ + 1,   // Make it 1-based
                    CustomerName = customers{_}
                ]
            ),
            type table [IDNumber = Int64.Type, CustomerName = text]
        )
in
    resultTable
```

Result: 
```powerquery
#table (type table[IDNumber = Int64.Type, CustomerName = text],
{
    {1, "Alice"},
    {2, "Bob"},
    {3, "Charlie"},
    {4, "Diana"}
})
```




## Category
List.Selection
