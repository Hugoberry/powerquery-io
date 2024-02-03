---
title: List.Repeat
---

# List.Repeat


## Description

Vrne seznam, ki vsebuje &#34;count&#34; ponovitev izvirnega seznama.


## Syntax

```powerquery
List.Repeat(
    list as list,
    count as number
) as list
```


## Details

Vrne seznam, ki vsebuje <code>count</code> ponovitev izvirnega seznama, <code>list</code>.


## Examples

### Example #1 
Ustvarite seznam, v katerem se \{1, 2} ponovi trikrat.
```powerquery
List.Repeat({1, 2}, 3)
```

Result: 
```powerquery
{1, 2, 1, 2, 1, 2}
```




## Category
List.Transformation functions
