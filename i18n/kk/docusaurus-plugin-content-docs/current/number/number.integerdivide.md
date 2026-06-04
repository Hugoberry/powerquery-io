---
title: Number.IntegerDivide
---

# Number.IntegerDivide


Екі санды бөледі және нәтиженің бүтін бөлігін қайтарады.


## Syntax

```powerquery
Number.IntegerDivide(
    number1 as number,
    number2 as number,
    optional precision as Precision.Type
) as number
```


## Remarks

`number1` санын басқа `number2` санына бөлу нәтижесінің бүтін бөлігін қайтарады. Егер `number1` немесе `number2` null мәніне ие болса, `Number.IntegerDivide` null мәнін қайтарады.

-   `number1`: бөлінгіш.
-   `number2`: бөлгіш.


## Examples

### Example #1
6 санын 4 санына бөлу.
```powerquery
Number.IntegerDivide(6, 4)
```

Result: 
```powerquery
1
```


### Example #2
8,3 санын 3 санына бөлу.
```powerquery
Number.IntegerDivide(8.3, 3)
```

Result: 
```powerquery
2
```




## Category
Number.Operations
