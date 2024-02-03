---
title: Number.RoundAwayFromZero
---

# Number.RoundAwayFromZero


## Description

Оң сандарды жоғары қарай және теріс сандарды төмен қарай дөңгелектеудің нәтижесін қайтарады. Сандардың нөмірі көрсетіледі.


## Syntax

```powerquery
Number.RoundAwayFromZero(
    number as number,
    optional digits as number
) as number
```


## Details

Санның таңбасы бойынша <code>number</code> дөңгелектеудің нәтижесін қайтарады. Бұл функция оң сандарды жоғары қарай және теріс сандарды төмен қарай дөңгелектейді.    Егер <code>digits</code> көрсетілсе, <code>number</code> саны ондық санның <code>digits</code> санына дөңгелектеледі.  


## Examples

### Example #1 
-1,2 санын нөлден жоғары қарай дөңгелектеу.
```powerquery
Number.RoundAwayFromZero(-1.2)
```

Result: 
```powerquery
-2
```


### Example #2 
1,2 санын нөлден жоғары қарай дөңгелектеу.
```powerquery
Number.RoundAwayFromZero(1.2)
```

Result: 
```powerquery
2
```


### Example #3 
Екі ондық орынға дөңгелектелген сан -1234 нөлден алшақ.
```powerquery
Number.RoundAwayFromZero(-1.234, 2)
```

Result: 
```powerquery
-1.24
```




## Category
Number.Rounding
