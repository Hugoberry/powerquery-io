---
title: Number.RoundTowardZero
---

# Number.RoundTowardZero


Оң сандарды төмен қарай және теріс сандарды жоғары қарай дөңгелектеудің нәтижесін қайтарады. Сандардың нөмірі көрсетіледі.


## Syntax

```powerquery
Number.RoundTowardZero(
    number as number,
    optional digits as number
) as number
```


## Remarks

Санның таңбасы бойынша `number` дөңгелектеудің нәтижесін қайтарады. Бұл функция оң сандарды төмен қарай және теріс сандарды жоғары қарай дөңгелектейді. Егер `digits` көрсетілсе, `number` ондық сандардың `digits` санына дөңгелектеледі.


## Examples

### Example #1
\-1,2 санын нөлге қарай дөңгелектеу.
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
