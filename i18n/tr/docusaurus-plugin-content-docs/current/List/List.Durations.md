---
title: List.Durations
---

# List.Durations


## Description

Verilen ilk değer, sayı ve artımlı duration değerinden duration değer listesi oluşturur.


## Syntax

```powerquery
List.Durations(
    start as duration,
    count as number,
    step as duration
) as list
```


## Details

<code>start</code> ile başlayan ve verilen <code>duration</code> <code>step</code> ile artan bir <code>count</code> <code>duration</code> değer listesi döndürür.


## Examples

### Example #1 
1 saat ile başlayarak birer saat artacak şekilde 5 değer içeren bir liste oluşturur.
```powerquery
List.Durations(#duration(0, 1, 0, 0), 5, #duration(0, 1, 0, 0))
```

Result: 
```powerquery
{
    #duration(0, 1, 0, 0),
    #duration(0, 2, 0, 0),
    #duration(0, 3, 0, 0),
    #duration(0, 4, 0, 0),
    #duration(0, 5, 0, 0)
}
```




## Category
List.Generators
