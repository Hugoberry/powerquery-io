---
title: Type.Is
---

# Type.Is


Bestemmer, om en værdi af den første type altid er kompatibel med den anden type.


## Syntax

```powerquery
Type.Is(
    type1 as type,
    type2 as type
) as logical
```


## Remarks

Angiver, om værdien af `type1` altid er kompatibel med `type2`. Parameteren `type2` skal være en primitiv (eller primitiv) værdi, der kan være null. Ellers er denne funktions funktionsmåde ikke defineret og bør ikke virke på.


## Examples

### Example #1
Bestem, om en værdi af typetal kun kan behandles som en hvilken som helst-type.
```powerquery
Type.Is(type number, type any)
```

Result: 
```powerquery
true
```


### Example #2
Bestem, om en værdi af en hvilken som helst-type kun kan behandles som typetal.
```powerquery
Type.Is(type any, type number)
```

Result: 
```powerquery
false
```




## Category
Type
