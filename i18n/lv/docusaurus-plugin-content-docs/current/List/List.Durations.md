---
title: List.Durations
---

# List.Durations


## Description

Tiek ģenerēts tipa duration vērtību saraksts atbilstoši norādītajai sākotnējai vērtībai, vērtību skaitam un tipa duration palielinājuma vērtībai.


## Syntax

```powerquery
List.Durations(
    start as duration,
    count as number,
    step as duration
) as list
```


## Details

Tiek atgriezts <code>count</code> tipa <code>duration</code> vērtību saraksts, kura pirmā vērtība ir <code>start</code> un katra nākamā vērtība ir palielināta par norādīto tipa <code>duration</code> vērtību <code>step</code>.


## Examples

### Example #1 
Izveidojiet 5 vērtību sarakstu, kura pirmā vērtība ir 1 stunda un katra nākamā vērtība ir palielināta par stundu.
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
