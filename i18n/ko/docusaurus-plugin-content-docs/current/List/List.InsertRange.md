---
title: List.InsertRange
---

# List.InsertRange


## Description

목록의 지정된 인덱스 위치에 값을 삽입합니다.


## Syntax

```powerquery
List.InsertRange(
    list as list,
    index as number,
    values as list
) as list
```


## Details

<code>values</code>의 값을 <code>list</code>의 <code>index</code> 위치에 삽입하여 생성된 새 목록을 반환합니다. 목록의 첫 번째 위치는 인덱스 0입니다.      <ul>        <li><code>list</code>: 값을 삽입할 대상 목록입니다.</li>        <li><code>index</code>: 대상 목록(<code>list</code>)에서 값을 삽입할 위치의 인덱스입니다. 목록의 첫 번째 위치는 인덱스 0입니다.</li>        <li><code>values</code>: <code>list</code>에 삽입할 값 목록입니다.</li>      </ul>


## Examples

### Example #1 
목록(\{3, 4})을 대상 목록(\{1, 2, 5})의 인덱스 2 위치에 삽입합니다.
```powerquery
List.InsertRange({1, 2, 5}, 2, {3, 4})
```

Result: 
```powerquery
{
    1,
    2,
    3,
    4,
    5
}
```


### Example #2 
중첩된 목록이 있는 목록(\{1, \{1.1, 1.2}})을 대상 목록(\{2, 3, 4})의 인덱스 0 위치에 삽입합니다.
```powerquery
List.InsertRange({2, 3, 4}, 0, {1, {1.1, 1.2}})
```

Result: 
```powerquery
{
    1,
    {
        1.1,
        1.2
    },
    2,
    3,
    4
}
```




## Category
List.Selection
