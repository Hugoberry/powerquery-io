---
title: Table.ReplaceValue
---

# Table.ReplaceValue


แทนที่ค่าหนึ่งด้วยอีกค่าหนึ่งในคอลัมน์ที่ระบุ


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

แทนที่ค่าด้วยค่าใหม่ในคอลัมน์ของตารางที่ระบุ

-   `table`: ตารางที่จะค้นหา
-   `oldValue`: ค่าที่จะถูกแทนที่
-   `newValue`: ค่าที่จะแทนที่
-   `replacer`: ฟังก์ชันตัวแทนที่ที่จะใช้ ฟังก์ชันสามารถเป็น `Replacer.ReplaceText` เพื่อแทนที่ข้อความเดิมด้วยข้อความใหม่ หรือ `Replacer.ReplaceValue` เพื่อแทนที่ค่าเดิมด้วยค่าใหม่ หรือตัวแทนที่แบบกำหนดเอง
-   `columnsToSearch`: รายการที่มีคอลัมน์เฉพาะในตารางเพื่อค้นหาค่าที่จะแทนที่


## Examples

### Example #1
แทนที่ข้อความ "goodbye" ด้วย "world" ในคอลัมน์ B โดยจับคู่เฉพาะค่าทั้งหมด
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
แทนที่ข้อความ "ur" ด้วย "or" ในคอลัมน์ B ซึ่งตรงกับส่วนใดๆ ของค่า
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
ทําให้ชื่อของพนักงานในสหรัฐอเมริกาเป็นแบบไม่ระบุตัวตน
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
ทําให้คอลัมน์ทั้งหมดของพนักงานในสหรัฐอเมริกาเป็นแบบไม่ระบุตัวตน
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
