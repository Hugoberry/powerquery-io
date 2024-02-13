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

แทนที่ <code>oldValue</code> ด้วย <code>newValue</code> ในคอลัมน์ที่ระบุของ <code>table</code>


## Examples

### Example #1 
แทนที่ข้อความ &#34;goodbye&#34; ด้วย &#34;world&#34; ในคอลัมน์ B โดยจับคู่เฉพาะค่าทั้งหมด
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
แทนที่ข้อความ &#34;ur&#34; ด้วย &#34;or&#34; ในคอลัมน์ B ซึ่งตรงกับส่วนใดๆ ของค่า
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
