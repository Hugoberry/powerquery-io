---
title: List.Durations
---

# List.Durations


## Description

Egy duration (időtartam) típusú értékekből álló listát hoz létre egy kezdeti érték, egy elemszám és egy növekményes időtartam érték megadása alapján.


## Syntax

```powerquery
List.Durations(
    start as duration,
    count as number,
    step as duration
) as list
```


## Details

<code>count</code> db <code>duration</code> értékből álló listát ad vissza, melynek kezdőpontja: <code>start</code>, növekménye pedig: <code>step</code> <code>duration</code> érték.


## Examples

### Example #1 
Hozzon létre egy 5 értékből álló listát, amelynek első eleme 1 óra, és az érték egy órával növekszik.
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
