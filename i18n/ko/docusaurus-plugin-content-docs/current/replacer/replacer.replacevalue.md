---
title: Replacer.ReplaceValue
---

# Replacer.ReplaceValue


지정된 입력 내의 값을 바꿉니다.


## Syntax

```powerquery
Replacer.ReplaceValue(
    value as any,
    old as any,
    new as any
) as any
```


## Remarks

원래 `value`의 `old` 값을 `new` 값으로 바꿉니다. 이 치환 함수는 `List.ReplaceValue` 및 `Table.ReplaceValue`에 사용할 수 있습니다.


## Examples

### Example #1
값 11을 값 10으로 바꿉니다.
```powerquery
Replacer.ReplaceValue(11, 11, 10)
```

Result: 
```powerquery
10
```




## Category
Replacer
