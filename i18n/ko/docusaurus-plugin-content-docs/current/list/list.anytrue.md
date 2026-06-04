---
title: List.AnyTrue
---

# List.AnyTrue


식이 하나라도 true일 경우 true를 반환합니다.


## Syntax

```powerquery
List.AnyTrue(
    list as list
) as logical
```


## Remarks

`list` 목록의 식이 하나라도 true일 경우 true를 반환합니다.


## Examples

### Example #1
\{true, false, 2 > 0\} 목록에 true인 식이 하나라도 있는지 여부를 확인합니다.
```powerquery
List.AnyTrue({true, false, 2>0})
```

Result: 
```powerquery
true
```


### Example #2
\{2 = 0, false, 2 &lt; 0\} 목록에 true인 식이 하나라도 있는지 여부를 확인합니다.
```powerquery
List.AnyTrue({2 = 0, false, 2 < 0})
```

Result: 
```powerquery
false
```




## Category
List.Membership functions
