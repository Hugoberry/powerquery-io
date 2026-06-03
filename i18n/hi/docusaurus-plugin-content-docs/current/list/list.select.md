---
title: List.Select
---

# List.Select


शर्त से मेल खाने वाले मानों की एक सूची लौटाता है.


## Syntax

```powerquery
List.Select(
    list as list,
    selection as function
) as list
```


## Remarks

निर्दिष्ट सूची से वे मान लौटाता है जो चयन शर्त से मेल खाते हैं.

-   `list`: जाँच की जाने वाली सूची.
-   `selection`: वह फ़ंक्शन जो चयन करने के लिए मान निर्धारित करता है.


## Examples

### Example #1
सूची \{1, -3, 4, 9, -2\} के वे मान प्राप्त करें जो 0 से बड़े हैं.
```powerquery
List.Select({1, -3, 4, 9, -2}, each _ > 0)
```

Result: 
```powerquery
{1, 4, 9}
```


### Example #2
सूची में से उन तिथियों का चयन करें जो शनिवार या रविवार को पड़ती हैं.
```powerquery
let
    dates = {
        #date(2025, 10, 20),  // Monday
        #date(2025, 10, 21),  // Tuesday
        #date(2025, 10, 25),  // Saturday
        #date(2025, 10, 26),  // Sunday
        #date(2025, 10, 27)   // Monday
    },
    weekendDates = List.Select(
        dates,
        each Date.DayOfWeek(_, Day.Monday) >= 5
    )
in
    weekendDates
```

Result: 
```powerquery
{
    #date(2025, 10, 25),
    #date(2025, 10, 26)
}
```


### Example #3
$100 से अधिक की खरीदारी वाले सक्रिय ग्राहकों की तालिका प्रदर्शित करें.
```powerquery
let
    customers = {
        [Name = "Alice", Status = "Active", Purchases = 150],
        [Name = "Bob", Status = "Inactive", Purchases = 200],
        [Name = "Carol", Status = "Active", Purchases = 90],
        [Name = "Dave", Status = "Active", Purchases = 120]
    },
    highValueActiveCustomers = List.Select(
        customers,
        each [Status] = "Active" and [Purchases] > 100
    ),
    resultTable = Table.FromRecords(
        highValueActiveCustomers,
        type table [Name = text, Status = text, Purchases = number]
    )
in
    resultTable
```

Result: 
```powerquery
#table(type table[Name = text, Status = text, Purchases = number],
{
    {"Alice", "Active", 150},
    {"Dave", "Active", 120}
})
```




## Category
List.Selection
