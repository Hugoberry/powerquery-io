---
title: List.Buffer
---

# List.Buffer


## Description

Тізімді буферге сақтайды.


## Syntax

```powerquery
List.Buffer(
    list as list
) as list
```


## Details

<code>list</code> тізімін жадқа буферге сақтайды. Бұл шақырудың нәтижесі — тұрақты тізім.


## Examples

### Example #1 
\{1..10} тізімінің тұрақты көшірмесін жасау.
```powerquery
List.Buffer({1..10})
```

Result: 
```powerquery
{1, 2, 3, 4, 5, 6, 7, 8, 9, 10}
```




## Category
List.Selection
