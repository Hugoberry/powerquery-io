---
title: Text.Middle
---

# Text.Middle


Повертає підрядок з указаним обмеженням довжини.


## Syntax

```powerquery
Text.Middle(
    text as text,
    start as number,
    optional count as number
) as text
```


## Remarks

Повертає зі зсувом `start` зазначену кількість (`count`) або решту символів до кінця тексту "`text`".


## Examples

### Example #1
Знаходить підрядок тексту "Hello World" довжиною 5 символів, починаючи з індексу 6.
```powerquery
Text.Middle("Hello World", 6, 5)
```

Result: 
```powerquery
"World"
```


### Example #2
Знаходить підрядок тексту "Hello World", починаючи з індексу 6 і до кінця.
```powerquery
Text.Middle("Hello World", 6, 20)
```

Result: 
```powerquery
"World"
```


### Example #3
Знаходить підрядок тексту "Hello World" довжиною 2 символи, починаючи з індексу 0.
```powerquery
Text.Middle("Hello World", 0, 2)
```

Result: 
```powerquery
"He"
```




## Category
Text.Extraction
