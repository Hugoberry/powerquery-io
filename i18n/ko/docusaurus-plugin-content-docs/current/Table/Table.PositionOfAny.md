---
title: Table.PositionOfAny
---

# Table.PositionOfAny


## Description

테이블 내에서 지정된 행이 있는 위치를 반환합니다.


## Syntax

```powerquery
Table.PositionOfAny(
    table as table,
    rows as list,
    optional occurrence as number,
    optional equationCriteria as any
) as any
```


## Details

<code>table</code>에서 <code>rows</code> 목록이 처음 발생하는 행 위치를 반환합니다. 찾을 수 없으면 -1을 반환합니다.    <ul>    <li><code>table</code>: 입력 테이블입니다.</li>       <li><code>rows</code>: 테이블에서 위치를 찾을 행 목록입니다.</li>       <li><code>occurrence</code>: <i>[옵션]</i> 반환할 행의 발생 위치를 지정합니다.</li>       <li><code>equationCriteria</code>: <i>[옵션]</i> 테이블 행 간의 비교를 제어합니다.</li>    </ul>    


## Examples

### Example #1 
&lt;code&gt;(\{[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]})&lt;/code&gt; 테이블에서 [a = 2, b = 4] 또는 [a = 6, b = 8]의 첫 번째 발생 위치를 찾습니다.
```powerquery
Table.PositionOfAny(
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 1, b = 4],
        [a = 2, b = 4],
        [a = 1, b = 4]
    }),
    {
        [a = 2, b = 4],
        [a = 6, b = 8]
    }
)
```

Result: 
```powerquery
0
```


### Example #2 
&lt;code&gt;(\{[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]}&lt;/code&gt; 테이블에서 [a = 2, b = 4] 또는 [a = 6, b = 8]의 모든 발생 위치를 찾습니다.
```powerquery
Table.PositionOfAny(
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 6, b = 8],
        [a = 2, b = 4],
        [a = 1, b = 4]
    }),
    {
        [a = 2, b = 4],
        [a = 6, b = 8]
    },
    Occurrence.All
)
```

Result: 
```powerquery
{0, 1, 2}
```




## Category
Table.Membership
