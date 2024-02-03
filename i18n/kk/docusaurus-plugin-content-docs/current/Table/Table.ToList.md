---
title: Table.ToList
---

# Table.ToList


## Description

Кестедегі әрбір мәндер жолына көрсетілген біріктіру функциясын қолдану арқылы кестені тізімге түрлендіреді.


## Syntax

```powerquery
Table.ToList(
    table as table,
    optional combiner as function
) as list
```


## Details

Кестедегі әрбір мәндер жолына көрсетілген біріктіру функциясын қолдану арқылы кестені тізімге түрлендіреді.


## Examples

### Example #1 
Әрбір жолдың мәтінін үтірмен біріктіріңіз.
```powerquery
Table.ToList(
    Table.FromRows({
        {Number.ToText(1), "Bob", "123-4567"},
        {Number.ToText(2), "Jim", "987-6543"},
        {Number.ToText(3), "Paul", "543-7890"}
    }),
    Combiner.CombineTextByDelimiter(",")
)
```

Result: 
```powerquery
{"1,Bob,123-4567", "2,Jim,987-6543", "3,Paul,543-7890"}
```




## Category
Table.Conversions
