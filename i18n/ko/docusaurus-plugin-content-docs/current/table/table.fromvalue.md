---
title: Table.FromValue
---

# Table.FromValue


지정된 값에서 하나의 열이 포함된 테이블을 만듭니다.


## Syntax

```powerquery
Table.FromValue(
    value as any,
    optional options as record
) as table
```


## Remarks

제공된 값 또는 값 목록(`value`)을 포함하는 열이 있는 테이블을 만듭니다. 선택적 레코드 매개 변수 `options`을(를) 지정하여 다음 옵션을 제어할 수 있습니다.

-   `DefaultColumnName`: 목록 또는 스칼라 값에서 테이블을 생성할 때 사용되는 열 이름입니다.


## Examples

### Example #1
값 1에서 테이블을 만듭니다.
```powerquery
Table.FromValue(1)
```

Result: 
```powerquery
Table.FromRecords({[Value = 1]})
```


### Example #2
목록에서 테이블을 만듭니다.
```powerquery
Table.FromValue({1, "Bob", "123-4567"})
```

Result: 
```powerquery
Table.FromRecords({
    [Value = 1],
    [Value = "Bob"],
    [Value = "123-4567"]
})
```


### Example #3
사용자 지정 열 이름을 사용하여 값 1에서 테이블을 만듭니다.
```powerquery
Table.FromValue(1, [DefaultColumnName = "MyValue"])
```

Result: 
```powerquery
Table.FromRecords({[MyValue = 1]})
```




## Category
Table.Table construction
