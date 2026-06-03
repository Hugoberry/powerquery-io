---
title: List.DateTimes
---

# List.DateTimes


Verilen ilk değer, sayı ve artımlı duration değerinden datetime değer listesi oluşturur.


## Syntax

```powerquery
List.DateTimes(
    start as datetime,
    count as number,
    step as duration
) as list
```


## Remarks

`count` boyutunda `start` konumunda başlayan bir `datetime` değer listesi döndürür. `step` verilen artışı her değere eklenen bir `duration` değeridir.


## Examples

### Example #1
Yıl başından 5 dakika önce başlayan (#datetime(2011, 12, 31, 23, 55, 0)), 1 dakika artan (#duration(0, 0, 1, 0)) 10 değer içeren bir liste oluşturur.
```powerquery
List.DateTimes(#datetime(2011, 12, 31, 23, 55, 0), 10, #duration(0, 0, 1, 0))
```

Result: 
```powerquery
{
    #datetime(2011, 12, 31, 23, 55, 0),
    #datetime(2011, 12, 31, 23, 56, 0),
    #datetime(2011, 12, 31, 23, 57, 0),
    #datetime(2011, 12, 31, 23, 58, 0),
    #datetime(2011, 12, 31, 23, 59, 0),
    #datetime(2012, 1, 1, 0, 0, 0),
    #datetime(2012, 1, 1, 0, 1, 0),
    #datetime(2012, 1, 1, 0, 2, 0),
    #datetime(2012, 1, 1, 0, 3, 0),
    #datetime(2012, 1, 1, 0, 4, 0)
}
```




## Category
List.Generators
