---
title: List.Percentile
---

# List.Percentile


## Description

지정된 확률에 해당하는 하나 이상의 샘플 백분위수를 반환합니다.


## Syntax

```powerquery
List.Percentile(
    list as list,
    percentiles as any,
    optional options as record
) as any
```


## Details

<code>list</code> 목록의 샘플 백분위수를 하나 이상 반환합니다. <code>percentiles</code> 값이 0.0에서 1.0 사이의 숫자이면 백분위수로 처리되고 결과는    그 확률에 해당하는 단일 값입니다. <code>percentiles</code> 값이 0.0과 1.0 사이의 숫자로 구성된 목록이면 결과는 입력 확률에 해당하는    백분위수 목록이 됩니다. 고급 사용자는 <code>options</code>의 PercentileMode 옵션을 사용하여 더 구체적인 보간법을 선택할 수 있지만 대부분의 경우에는 권장되지 않습니다.    사전 정의된 기호 <code>PercentileMode.ExcelInc</code> 및 <code>PercentileMode.ExcelExc</code>는 Excel 함수 <code>PERCENTILE.INC</code> 및 <code>PERCENTILE.EXC</code>에서 사용하는 보간법과 일치합니다. 기본 동작은 <code>PercentileMode.ExcelInc</code>와 일치합니다. 기호    <code>PercentileMode.SqlCont</code> 및 <code>PercentileMode.SqlDisc</code>는 각각 <code>PERCENTILE_CONT</code> 및    <code>PERCENTILE_DISC</code>에 대한 SQL Server 동작과 일치합니다.  


## Examples

### Example #1 
&lt;code&gt;\{5, 3, 1, 7, 9}&lt;/code&gt; 목록의 첫 번째 사분위수를 찾습니다.
```powerquery
List.Percentile({5, 3, 1, 7, 9}, 0.25)
```

Result: 
```powerquery
3
```


### Example #2 
Excel의 &lt;code&gt;PERCENTILE.EXC&lt;/code&gt;와 일치하는 보간법을 사용하여 &lt;code&gt; \{5, 3, 1, 7, 9} &lt;/code&gt; 목록의 첫 번째 사분위수를 찾습니다.
```powerquery
List.Percentile({5, 3, 1, 7, 9}, {0.25, 0.5, 0.75}, [PercentileMode=PercentileMode.ExcelExc])
```

Result: 
```powerquery
{2, 5, 8}
```




## Category
List.Ordering
