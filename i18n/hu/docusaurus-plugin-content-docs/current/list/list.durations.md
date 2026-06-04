---
title: List.Durations
---

# List.Durations


Egy duration (időtartam) típusú értékekből álló listát hoz létre egy kezdeti érték, egy elemszám és egy növekményes időtartam érték megadása alapján.


## Syntax

```powerquery
List.Durations(
    start as duration,
    count as number,
    step as duration
) as list
```


## Remarks

`count` db `duration` értékből álló listát ad vissza, melynek kezdőpontja: `start`, növekménye pedig: `step` `duration` érték.


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
