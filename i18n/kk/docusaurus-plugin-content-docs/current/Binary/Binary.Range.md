---
title: Binary.Range
---

# Binary.Range


## Description

Ауытқудан басталатын екілік мәннің қосалқы жиынтығын қайтарады.


## Syntax

```powerquery
Binary.Range(
    binary as binary,
    offset as number,
    optional count as number
) as binary
```


## Details

<code>binary</code> ауытқуынан басталатын екілік мәннің қосалқы жиынтығын қайтарады. <code>offset</code> міндетті емес параметрі қосалқы жиынтықтың максимал ұзындығын орнатады.


## Examples

### Example #1 
6 ауытқуында басталатын екілік мәннің қосалқы жиынтығын қайтарады.
```powerquery
Binary.Range(#binary({0..10}), 6)
```

Result: 
```powerquery
#binary({6, 7, 8, 9, 10})
```


### Example #2 
Екілік мәннің 6 ауытқуынан 2 ұзындығына ие қосалқы жиынтықты қайтарады.
```powerquery
Binary.Range(#binary({0..10}), 6, 2)
```

Result: 
```powerquery
#binary({6, 7})
```




## Category
Binary
