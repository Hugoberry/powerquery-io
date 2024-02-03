---
title: Table.Partition
---

# Table.Partition


## Description

그룹 수와 지정된 열에 따라 테이블을 테이블 목록으로 분할합니다.


## Syntax

```powerquery
Table.Partition(
    table as table,
    column as text,
    groups as number,
    hash as function
) as list
```


## Details

<code>column</code>의 값과 <code>hash</code> 함수에 따라 <code>table</code>을(를) <code>groups</code>개의 테이블을 포함하는 목록으로 분할합니다.    <code>hash</code> 함수는 행에 대한 해시 값을 가져오기 위해 <code>column</code> 행의 값에 적용됩니다. 해시 값 모듈 <code>groups</code>은(는) 반환되는 테이블 중 해당 행이 배치되는 테이블을 확인합니다.    <ul>       <li><code>table</code>: 분할할 테이블입니다.</li>       <li><code>column</code>: 반환되는 테이블 중 해당 행이 배치되는 테이블을 확인하기 위해 해시할 열입니다.</li>       <li><code>groups</code>: 입력 테이블을 분할할 테이블 수입니다.</li>       <li><code>hash</code>: 해시 값을 가져오기 위해 적용되는 함수입니다.</li>    </ul>  


## Examples

### Example #1 
&lt;code&gt;(\{[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]})&lt;/code&gt; 테이블을 [a] 열에 따라 두 테이블로 분할합니다. 이때 열의 값을 해시 함수로 사용합니다.
```powerquery
Table.Partition(
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 1, b = 4],
        [a = 2, b = 4],
        [a = 1, b = 4]
    }),
    "a",
    2,
    each _
)
```

Result: 
```powerquery
{
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 2, b = 4]
    }),
    Table.FromRecords({
        [a = 1, b = 4],
        [a = 1, b = 4]
    })
}
```




## Category
Table.Row operations
