---
title: List.Percentile
---

# List.Percentile


지정된 확률에 해당하는 하나 이상의 샘플 백분위수를 반환합니다.


## Syntax

```powerquery
List.Percentile(
    list as list,
    percentiles as any,
    optional options as record
) as any
```


## Remarks

`list` 목록의 하나 이상의 샘플 백분위수를 반환합니다. `percentiles` 값이 0.0에서 1.0 사이의 숫자이면 백분위수로 처리되고 결과는 해당 확률에 해당하는 단일 값입니다. `percentiles` 값이 0.0과 1.0 사이의 숫자로 구성된 목록이면 결과는 입력 확률에 해당하는 백분위수 목록이 됩니다.  
  
고급 사용자는 `options`의 PercentileMode 옵션을 사용하여 더 구체적인 보간 방법을 선택할 수 있지만 대부분의 경우에는 권장되지 않습니다. 미리 정의된 기호 `PercentileMode.ExcelInc` 및 `PercentileMode.ExcelExc`는 Excel 함수에서 사용하는 보간 메서드와 일치합니다. `PERCENTILE.INC` 및 `PERCENTILE.EXC`. 기본 동작은 `PercentileMode.ExcelInc`와 일치합니다. 기호 `PercentileMode.SqlCont` 및 `PercentileMode.SqlDisc`는 각각 `PERCENTILE_CONT` 및 `PERCENTILE_DISC`에 대한 SQL Server 동작과 일치합니다.


## Examples

### Example #1
`{5, 3, 1, 7, 9}` 목록의 첫 번째 사분위수를 찾습니다.
```powerquery
List.Percentile({5, 3, 1, 7, 9}, 0.25)
```

Result: 
```powerquery
3
```


### Example #2
Excel의 `PERCENTILE.EXC`와 일치하는 보간법을 사용하여 `{5, 3, 1, 7, 9}` 목록의 첫 번째 사분위수를 찾습니다.
```powerquery
List.Percentile({5, 3, 1, 7, 9}, {0.25, 0.5, 0.75}, [PercentileMode=PercentileMode.ExcelExc])
```

Result: 
```powerquery
{2, 5, 8}
```




## Category
List.Ordering
