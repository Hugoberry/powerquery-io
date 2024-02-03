---
title: List.Dates
---

# List.Dates


## Description

Verilen ilk değer, sayı ve artımlı duration değerinden date değer listesi oluşturur.


## Syntax

```powerquery
List.Dates(
    start as date,
    count as number,
    step as duration
) as list
```


## Details

<code>count</code> boyutunda <code>start</code> konumunda başlayan bir <code>date</code> değer listesi döndürür. <code>step</code> verilen artışı her değere eklenen bir <code>duration</code> değeridir.


## Examples

### Example #1 
Yılın son gününden başlayarak (#date(2011, 12, 31)) 1&#39;er gün artacak (#duration(1, 0, 0, 0)) şekilde 5 değer içeren bir liste oluşturur.
```powerquery
List.Dates(#date(2011, 12, 31), 5, #duration(1, 0, 0, 0))
```

Result: 
```powerquery
{
    #date(2011, 12, 31),
    #date(2012, 1, 1),
    #date(2012, 1, 2),
    #date(2012, 1, 3),
    #date(2012, 1, 4)
}
```




## Category
List.Generators
