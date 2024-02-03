---
title: Number.RoundDown
---

# Number.RoundDown


## Description

Алдыңғы ең үлкен бүтін санды қайтарады. Сандардың нөмірі көрсетіледі.


## Syntax

```powerquery
Number.RoundDown(
    number as number,
    optional digits as number
) as number
```


## Details

<code>number</code> алдыңғы ең үлкен бүтін санға дейін дөңгелектенген нәтижесін қайтарады. Егер <code>number</code> мәні Null болса, бұл функция Null мәнін қайтарады.    Егер <code>digits</code> көрсетілсе, <code>number</code> ондық сандардың көрсетілген санына дейін дөңгелектеледі.  


## Examples

### Example #1 
1,234 санын бүтін санға дейін төмен қарай дөңгелектеу.
```powerquery
Number.RoundDown(1.234)
```

Result: 
```powerquery
1
```


### Example #2 
1,999 санын бүтін санға дейін төмен қарай дөңгелектеу.
```powerquery
Number.RoundDown(1.999)
```

Result: 
```powerquery
1
```


### Example #3 
1999 екі ондық орынға төмен қарай дөңгелектелді.
```powerquery
Number.RoundDown(1.999, 2)
```

Result: 
```powerquery
1.99
```




## Category
Number.Rounding
