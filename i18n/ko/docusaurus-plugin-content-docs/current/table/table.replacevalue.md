---
title: Table.ReplaceValue
---

# Table.ReplaceValue


지정한 열에서 한 값을 다른 값으로 바꿉니다.


## Syntax

```powerquery
Table.ReplaceValue(
    table as table,
    oldValue as any,
    newValue as any,
    replacer as function,
    columnsToSearch as list
) as table
```


## Remarks

지정된 테이블의 특정 열에서 값을 새 값으로 바꿉니다.

-   `table`: 검색할 테이블입니다.
-   `oldValue`: 대체할 값입니다.
-   `newValue`: 대체 값.
-   `replacer`: 사용할 치환 함수입니다. 함수는 다음 중 하나일 수 있습니다. `Replacer.ReplaceText`: 원래 텍스트를 새 텍스트로 바꿉니다. `Replacer.ReplaceValue`: 원래 값을 새 값으로 바꿉니다. 또는 사용자 지정 치환 함수를 사용할 수 있습니다.
-   `columnsToSearch`: 값을 바꿀 테이블 내 특정 열 또는 열 목록입니다.


## Examples

### Example #1
B열의 "goodbye" 텍스트를 "world"로 바꾸고 전체 값만 일치시킵니다.
```powerquery
Table.ReplaceValue(
    Table.FromRecords({
        [A = 1, B = "hello"],
        [A = 2, B = "goodbye"],
        [A = 3, B = "goodbyes"]
    }),
    "goodbye",
    "world",
    Replacer.ReplaceValue,
    {"B"}
)
```

Result: 
```powerquery
Table.FromRecords({
    [A = 1, B = "hello"],
    [A = 2, B = "world"],
    [A = 3, B = "goodbyes"]
})
```


### Example #2
값의 일부와 일치하는 텍스트 "ur"을 열 B의 "또는"으로 바꿉니다.
```powerquery
Table.ReplaceValue(
    Table.FromRecords({
        [A = 1, B = "hello"],
        [A = 2, B = "wurld"]
    }),
    "ur",
    "or",
    Replacer.ReplaceText,
    {"B"}
)
```

Result: 
```powerquery
Table.FromRecords({
    [A = 1, B = "hello"],
    [A = 2, B = "world"]
})
```


### Example #3
미국 직원의 이름을 익명화합니다.
```powerquery
Table.ReplaceValue(
    Table.FromRecords({
        [Name = "Cindy", Country = "US"],
        [Name = "Bob", Country = "CA"]
    }),
    each if [Country] = "US" then [Name] else false,
    each Text.Repeat("*", Text.Length([Name])),
    Replacer.ReplaceValue,
    {"Name"}
)
```

Result: 
```powerquery
Table.FromRecords({
    [Name = "*****", Country = "US"],
    [Name = "Bob", Country = "CA"]
})
```


### Example #4
미국 직원의 모든 열을 익명화합니다.
```powerquery
Table.ReplaceValue(
    Table.FromRecords({
        [Name = "Cindy", Country = "US"],
        [Name = "Bob", Country = "CA"]
    }),
    each [Country] = "US",
    "?",
    (currentValue, isUS, replacementValue) =>
        if isUS then
            Text.Repeat(replacementValue, Text.Length(currentValue))
        else
            currentValue,
    {"Name", "Country"}
)
```

Result: 
```powerquery
Table.FromRecords({
    [Name = "?????", Country = "??"],
    [Name = "Bob", Country = "CA"]
})
```




## Category
Table.Transformation
