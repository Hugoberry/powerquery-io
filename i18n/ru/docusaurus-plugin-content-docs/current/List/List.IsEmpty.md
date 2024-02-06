---
title: List.IsEmpty
---

# List.IsEmpty


Возвращает значение true, если список пуст.


## Syntax

```powerquery
List.IsEmpty(
    list as list
) as logical
```


## Remarks

Возвращает значение <code>true</code>, если список <code>list</code> не содержит значений (длина равна 0). Если список содержит значения (длина > 0), возвращает <code>false</code>.


## Examples

### Example #1 
Выясняет, пуст ли список \{}.
```powerquery
List.IsEmpty({})
```

Result: 
```powerquery
true
```


### Example #2 
Выясняет, пуст ли список \{1, 2}.
```powerquery
List.IsEmpty({1, 2})
```

Result: 
```powerquery
false
```




## Category
List.Information
