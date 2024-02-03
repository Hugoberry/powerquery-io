---
title: Table.FromPartitions
---

# Table.FromPartitions


## Description

일련의 분할된 테이블을 조합한 결과 테이블을 반환합니다.


## Syntax

```powerquery
Table.FromPartitions(
    partitionColumn as text,
    partitions as list,
    optional partitionColumnType as type
) as table
```


## Details

일련의 분할된 테이블 <code>partitions</code>을(를) 결합한 결과로 생성되는 테이블을 반환합니다. <code>partitionColumn</code>은(는) 추가할 열의 이름입니다. 열 형식은 기본적으로 <code>모두</code>로 설정되지만 <code>partitionColumnType</code>이(가) 지정할 수도 있습니다.


## Examples

### Example #1 
목록 &lt;code&gt;\{number}&lt;/code&gt;에서 항목 형식을 확인합니다.
```powerquery
Table.FromPartitions(
    "Year",
    {
        {
            1994,
            Table.FromPartitions(
                "Month",
                {
                    {
                        "Jan",
                        Table.FromPartitions(
                            "Day",
                            {
                                {1, #table({"Foo"}, {{"Bar"}})},
                                {2, #table({"Foo"}, {{"Bar"}})}
                            }
                        )
                    },
                    {
                        "Feb",
                        Table.FromPartitions(
                            "Day",
                            {
                                {3, #table({"Foo"}, {{"Bar"}})},
                                {4, #table({"Foo"}, {{"Bar"}})}
                            }
                        )
                    }
                }
            )
        }
    }
)
```

Result: 
```powerquery
Table.FromRecords({
    [
        Foo = "Bar",
        Day = 1,
        Month = "Jan",
        Year = 1994
    ],
    [
        Foo = "Bar",
        Day = 2,
        Month = "Jan",
        Year = 1994
    ],
    [
        Foo = "Bar",
        Day = 3,
        Month = "Feb",
        Year = 1994
    ],
    [
        Foo = "Bar",
        Day = 4,
        Month = "Feb",
        Year = 1994
    ]
})
```




## Category
Table.Row operations
