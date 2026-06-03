---
title: Number.Sign
---

# Number.Sign


Sayı pozitifse 1, negatifse -1 ve sıfırsa 0 döndürür.


## Syntax

```powerquery
Number.Sign(
    number as number
) as number
```


## Remarks

`number` pozitif bir sayı ise 1, negatif sayı ise -1 ve sıfırsa 0 döndürür. `number` null ise `Number.Sign` null döndürür.


## Examples

### Example #1
182'nin işaretini belirler.
```powerquery
Number.Sign(182)
```

Result: 
```powerquery
1
```


### Example #2
\-182'nin işaretini belirler.
```powerquery
Number.Sign(-182)
```

Result: 
```powerquery
-1
```


### Example #3
0'nin işaretini belirler.
```powerquery
Number.Sign(0)
```

Result: 
```powerquery
0
```




## Category
Number.Operations
