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

<code>number</code> pozitif bir sayı ise 1, negatif sayı ise -1 ve sıfırsa 0 döndürür.    <code>number</code> null ise <code>Number.Sign</code> null döndürür.


## Examples

### Example #1 
182&#39;nin işaretini belirler.
```powerquery
Number.Sign(182)
```

Result: 
```powerquery
1
```


### Example #2 
-182&#39;nin işaretini belirler.
```powerquery
Number.Sign(-182)
```

Result: 
```powerquery
-1
```


### Example #3 
0&#39;nin işaretini belirler.
```powerquery
Number.Sign(0)
```

Result: 
```powerquery
0
```




## Category
Number.Operations
