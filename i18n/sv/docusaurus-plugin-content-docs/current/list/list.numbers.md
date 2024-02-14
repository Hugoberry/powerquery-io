---
title: List.Numbers
---

# List.Numbers


Returnerar en lista med tal baserat på ett ursprungligt värde, antal och ett valfritt ökningsvärde.


## Syntax

```powerquery
List.Numbers(
    start as number,
    count as number,
    optional increment as number
) as list
```


## Remarks

Returnerar en lista med tal baserat på ett ursprungligt värde, antal och ett valfritt ökningsvärde. Standardökningsvärdet är 1.<ul>   <li><code>start</code>: Det ursprungliga värdet i listan.</li>   <li><code>count</code>: Antalet värden som ska skapas.</li>   <li><code>increment</code>: <i>[Valfritt]</i> Värdet som du vill öka med. Om inget anges ökas värdena med 1.</li></ul>


## Examples

### Example #1 
Generera en lista med 10 efterföljande tal som börjar med 1.
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
Generera en lista med 10 tal som börjar med 1, med en ökning på 2 för varje efterföljande tal.
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
