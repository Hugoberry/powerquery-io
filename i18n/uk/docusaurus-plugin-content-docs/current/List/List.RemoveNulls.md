---
title: List.RemoveNulls
---

# List.RemoveNulls


## Description

Видаляє всі значення &#34;null&#34; із зазначеного списку.


## Syntax

```powerquery
List.RemoveNulls(
    list as list
) as list
```


## Details

Видаляє всі входження значень "null" у списку <code>list</code>. Якщо у списку немає значень "null", повертається вихідний список.


## Examples

### Example #1 
Видалити всі значення &#34;null&#34; зі списку \{1, 2, 3, null, 4, 5, null, 6}.
```powerquery
List.RemoveNulls({1, 2, 3, null, 4, 5, null, 6})
```

Result: 
```powerquery
{1, 2, 3, 4, 5, 6}
```




## Category
List.Transformation functions
