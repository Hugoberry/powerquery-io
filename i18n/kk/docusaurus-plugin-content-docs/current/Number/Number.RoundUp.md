---
title: Number.RoundUp
---

# Number.RoundUp


## Description

Келесі ең үлкен бүтін санды қайтарады. Сандардың нөмірі көрсетілген.


## Syntax

```powerquery
Number.RoundUp(
    number as number,
    optional digits as number
) as number
```


## Details

<code>number</code> келесі ең үлкен бүтін санға дейін дөңгелектенген нәтижесін қайтарады. Егер <code>number</code> мәні Null болса, бұл функция Null мәнін қайтарады.    Егер <code>digits</code> көрсетілсе, <code>number</code> ондық сандардың көрсетілген санына дейін дөңгелектеледі.  


## Examples

### Example #1 
1,234 санын бүтін санға дейін жоғары қарай дөңгелектеу.
```powerquery
Number.RoundUp(1.234)
```

Result: 
```powerquery
2
```


### Example #2 
1,999 санын бүтін санға дейін жоғары қарай дөңгелектеу.
```powerquery
Number.RoundUp(1.999)
```

Result: 
```powerquery
2
```


### Example #3 
1234 санын екі ондық орынға қарай жоғары дөңгелектеу
```powerquery
Number.RoundUp(1.234, 2)
```

Result: 
```powerquery
1.24
```




## Category
Number.Rounding
