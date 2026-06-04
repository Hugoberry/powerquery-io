---
title: Number.Round
---

# Number.Round


Дөңгелектелген санды қайтарады. Цифрлар санын және дөңгелектеу режимін көрсетуге болады.


## Syntax

```powerquery
Number.Round(
    number as number,
    optional digits as number,
    optional roundingMode as RoundingMode.Type
) as number
```


## Remarks

Дөңгелектеу нәтижесі `number` жақын санға қайтарады. Егер `number` бос болса, `Number.Round` бос мәнін қайтарады.  
  
Әдепкі бойынша, `number` ең жақын бүтін санға дөңгелектенеді, ал байланыстар жақын санға дөңгелектенеді (`RoundingMode.ToEven` қолданылады, "банкирдің дөңгелектеуі" деп аталады).  
  
Бірақ, бұл әдепкі параметрлерді келесі қосымша параметрлер бойынша ауыстыруға болады.

-   `digits`: `number` белгіленген ондық сандарға дейін дөңгелектенеді.
-   `roundingMode`: `number`екі ықтимал дөңгелектелген мәндерін- арасындағы орташа нүктеге арналған мінез-құлықты болдырмайды ( мүмкін мәндерді үшін `RoundingMode.Type` көріңіз).


## Examples

### Example #1
1,234 санын ең жақын бүтін санға дейін дөңгелектеу.
```powerquery
Number.Round(1.234)
```

Result: 
```powerquery
1
```


### Example #2
1,56 санын ең жақын бүтін санға дейін дөңгелектеу.
```powerquery
Number.Round(1.56)
```

Result: 
```powerquery
2
```


### Example #3
1,2345 санын екі ондық таңбаға дейін дөңгелектеу.
```powerquery
Number.Round(1.2345, 2)
```

Result: 
```powerquery
1.23
```


### Example #4
1,2345 санын үш ондық таңбаға дейін дөңгелектеу (жоғары қарай дөңгелектеу).
```powerquery
Number.Round(1.2345, 3, RoundingMode.Up)
```

Result: 
```powerquery
1.235
```


### Example #5
1,2345 санын үш ондық таңбаға дейін дөңгелектеу (төмен қарай дөңгелектеу).
```powerquery
Number.Round(1.2345, 3, RoundingMode.Down)
```

Result: 
```powerquery
1.234
```




## Category
Number.Rounding
