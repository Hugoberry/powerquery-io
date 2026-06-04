---
title: Type.Is
---

# Type.Is


Nosaka, vai pirmā tipa vērtība vienmēr ir saderīga ar otro tipu.


## Syntax

```powerquery
Type.Is(
    type1 as type,
    type2 as type
) as logical
```


## Remarks

Nosaka, vai lietojumprogrammas `type1` vienmēr ir saderīga ar `type2`. Parametra `type2` jābūt primitīvai (vai nullējamai) tipa vērtībai. Pretējā gadījumā šīs funkcijas darbība ir nedefinēta, un tā nav jānomāc.


## Examples

### Example #1
Nosakiet, vai jebkāda tipa skaitļa vērtību vienmēr var apstrādāt arī kā jebkuru tipu.
```powerquery
Type.Is(type number, type any)
```

Result: 
```powerquery
true
```


### Example #2
Nosakiet, vai jebkāda tipa vērtību vienmēr var apstrādāt arī kā tipa skaitli.
```powerquery
Type.Is(type any, type number)
```

Result: 
```powerquery
false
```




## Category
Type
