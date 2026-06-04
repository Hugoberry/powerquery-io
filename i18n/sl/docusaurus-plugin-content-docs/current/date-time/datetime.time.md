---
title: DateTime.Time
---

# DateTime.Time


Vrne časovni del dane vrednosti"datetime".


## Syntax

```powerquery
DateTime.Time(
    dateTime as any
) as time
```


## Remarks

Vrne časovni del dane vrednosti"datetime", `dateTime`.


## Examples

### Example #1
Poiščite časovno vrednost v"#datetime(2010, 12, 31, 11, 56, 02)".
```powerquery
DateTime.Time(#datetime(2010, 12, 31, 11, 56, 02))
```

Result: 
```powerquery
#time(11, 56, 2)
```




## Category
DateTime
