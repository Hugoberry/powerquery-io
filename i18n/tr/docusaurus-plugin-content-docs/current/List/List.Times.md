---
title: List.Times
---

# List.Times


Verilen ilk değer, sayı ve artımlı süre değerinden time değer listesi oluşturur.


## Syntax

```powerquery
List.Times(
    start as time,
    count as number,
    step as duration
) as list
```


## Remarks

<code>count</code> boyutunda <code>start</code> konumunda başlayan bir <code>time</code> değer listesi döndürür. <code>step</code> verilen artışı her değere eklenen bir <code>duration</code> değeridir.


## Examples

### Example #1 
Öğleden sonra başlayan (#time(12, 0, 0)), 1 saat artan (#duration(0, 1, 0, 0)) 4 değer içeren bir liste oluşturur.
```powerquery
List.Times(#time(12, 0, 0), 4, #duration(0, 1, 0, 0))
```

Result: 
```powerquery
{
    #time(12, 0, 0),
    #time(13, 0, 0),
    #time(14, 0, 0),
    #time(15, 0, 0)
}
```




## Category
List.Generators
