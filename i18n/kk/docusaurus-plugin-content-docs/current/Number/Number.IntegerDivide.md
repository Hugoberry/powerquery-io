---
title: Number.IntegerDivide
---

# Number.IntegerDivide


## Description

Екі санды бөледі және нәтиженің бүтін бөлігін қайтарады.


## Syntax

```powerquery
Number.IntegerDivide(
    number1 as number,
    number2 as number,
    optional precision as Precision.Type
) as number
```


## Details

<code>number1</code> санын басқа <code>number2</code> санына бөлу нәтижесінің бүтін бөлігін қайтарады.    Егер <code>number1</code> немесе <code>number2</code> null мәніне ие болса, <code>Number.IntegerDivide</code> null мәнін қайтарады.      <ul>        <li><code>number1</code>: бөлінгіш.</li>        <li><code>number2</code>: бөлгіш.</li>      </ul>


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
