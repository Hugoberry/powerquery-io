---
title: List.Numbers
---

# List.Numbers


## Description

Vrne seznam števil, če navedete začetno vrednost, število in izbirni prirastek.


## Syntax

```powerquery
List.Numbers(
    start as number,
    count as number,
    optional increment as number
) as list
```


## Details

Vrne seznam števil, če navedete začetno vrednost, število in izbirni prirastek. Privzeti prirastek je 1.<ul>   <li><code>start</code>: začetna vrednost na seznamu.</li>   <li><code>count</code>: število vrednosti, ki bodo ustvarjene.</li>   <li><code>increment</code>: <i>[izbirno]</i> vrednost prirastka. Če to izpustite, se vrednosti povečajo za 1.</li></ul>


## Examples

### Example #1 
Ustvarite seznam 10 zaporednih števil, ki se začne z 1.
```powerquery
List.Numbers(1, 10)
```

Result: 
```powerquery
{
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10
}
```


### Example #2 
Ustvarite seznam 10 števil, ki se začne z 1, pri čemer se vsako naslednje število poveča za 2.
```powerquery
List.Numbers(1, 10, 2)
```

Result: 
```powerquery
{
    1,
    3,
    5,
    7,
    9,
    11,
    13,
    15,
    17,
    19
}
```




## Category
List.Generators
