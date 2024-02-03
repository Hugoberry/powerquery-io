---
title: Number.Round
---

# Number.Round


## Description

Дөңгелектелген санды қайтарады. Цифрлар санын және дөңгелектеу режимін көрсетуге болады.


## Syntax

```powerquery
Number.Round(
    number as number,
    optional digits as number,
    optional roundingMode as RoundingMode.Type
) as number
```


## Details

Дөңгелектеу нәтижесі <code>number</code> жақын санға қайтарады. Егер <code>number</code> бос болса, <code>Number.Round</code> бос мәнін қайтарады.<br />      <br />      Әдепкі бойынша, <code>number</code> ең жақын бүтін санға дөңгелектенеді, ал байланыстар жақын санға дөңгелектенеді (<code>RoundingMode.ToEven</code> қолданылады, "банкирдің дөңгелектеуі" деп аталады).<br />      <br />      Бірақ, бұл әдепкі параметрлерді келесі қосымша параметрлер бойынша ауыстыруға болады.      <ul>        <li><code>digits</code>: <code>number</code> белгіленген ондық сандарға дейін дөңгелектенеді.</li>        <li><code>roundingMode</code>: <code>number</code>екі ықтимал дөңгелектелген мәндерін-       арасындағы орташа нүктеге арналған мінез-құлықты болдырмайды ( мүмкін мәндерді үшін <code>RoundingMode.Type</code> көріңіз).</li>      </ul>


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
