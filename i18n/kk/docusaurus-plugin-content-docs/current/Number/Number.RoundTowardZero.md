---
title: Number.RoundTowardZero
---

# Number.RoundTowardZero


## Description

Оң сандарды төмен қарай және теріс сандарды жоғары қарай дөңгелектеудің нәтижесін қайтарады. Сандардың нөмірі көрсетіледі.


## Syntax

```powerquery
Number.RoundTowardZero(
    number as number,
    optional digits as number
) as number
```


## Details

Санның таңбасы бойынша <code>number</code> дөңгелектеудің нәтижесін қайтарады. Бұл функция оң сандарды төмен қарай және теріс сандарды жоғары қарай дөңгелектейді.    Егер <code>digits</code> көрсетілсе, <code>number</code> ондық сандардың <code>digits</code> санына дөңгелектеледі.  


## Examples

### Example #1 
-1,2 санын нөлге қарай дөңгелектеу.
```powerquery
Number.RoundTowardZero(-1.2)
```

Result: 
```powerquery
-1
```


### Example #2 
1,2 санын нөлге қарай дөңгелектеу.
```powerquery
Number.RoundTowardZero(1.2)
```

Result: 
```powerquery
1
```


### Example #3 
1234 санын нөлге қарай екі ондық орынға дөңгелектеу.
```powerquery
Number.RoundTowardZero(-1.234, 2)
```

Result: 
```powerquery
-1.23
```




## Category
Number.Rounding
