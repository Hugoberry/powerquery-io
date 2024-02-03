---
title: Number.Mod
---

# Number.Mod


## Description

Екі санды бүтін бөледі және қалдықты қайтарады.


## Syntax

```powerquery
Number.Mod(
    number as number,
    divisor as number,
    optional precision as Precision.Type
) as number
```


## Details

<code>number</code> санын <code>divisor</code> санына бүтін сандық бөлуден шығатын қалдықты қайтарады.    Егер <code>number</code> немесе <code>divisor</code> null мәніне ие болса, <code>Number.Mod</code> null мәнін қайтарады.      <ul>        <li><code>number</code>: бөлінгіш.</li>        <li><code>divisor</code>: бөлгіш.</li>      </ul>


## Examples

### Example #1 
5 санын 3 санына бөлген кездегі қалдықты анықтау.
```powerquery
Number.Mod(5, 3)
```

Result: 
```powerquery
2
```




## Category
Number.Operations
