---
title: List.InsertRange
---

# List.InsertRange


## Description

दी गई अनुक्रमणिका की किसी सूची में मान सम्मिलित करता है.


## Syntax

```powerquery
List.InsertRange(
    list as list,
    index as number,
    values as list
) as list
```


## Details

<code>values</code> के मानों को <code>index</code> के <code>list</code> में सम्मिलित करने से उत्पन्न एक नई सूची लौटाता है. सूची की पहली स्थिति, अनुक्रमणिका 0 में है.      <ul>        <li><code>list</code>: वह लक्ष्य सूची जहाँ मानों को सम्मिलित करना है.</li>        <li><code>index</code>: वह लक्ष्य सूची की वह अनुक्रमणिका (<code>list</code>) जहाँ मानों को सम्मिलित करना है. सूची की पहली स्थिति, अनुक्रमणिका 0 में है.</li>        <li><code>values</code>: उन मानों की सूची जिन्हें <code>list</code> में सम्मिलित करना है.</li>      </ul>


## Examples

### Example #1 
सूची (\{3, 4}) को अनुक्रमणिका 2 की लक्ष्य सूची (\{1, 2, 5}) में सम्मिलित करें.
```powerquery
List.InsertRange({1, 2, 5}, 2, {3, 4})
```

Result: 
```powerquery
{
    1,
    2,
    3,
    4,
    5
}
```


### Example #2 
नेस्टेड सूची (\{1, \{1.1, 1.2}}) वाली सूची को अनुक्रमणिका 0 की लक्ष्य सूची (\{2, 3, 4}) में सम्मिलित करें.
```powerquery
List.InsertRange({2, 3, 4}, 0, {1, {1.1, 1.2}})
```

Result: 
```powerquery
{
    1,
    {
        1.1,
        1.2
    },
    2,
    3,
    4
}
```




## Category
List.Selection
