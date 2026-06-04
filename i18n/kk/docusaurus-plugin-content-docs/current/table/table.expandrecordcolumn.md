---
title: Table.ExpandRecordColumn
---

# Table.ExpandRecordColumn


Жазбалардың бағанын мәндердің әрқайсысы бар бағандарға кеңейтеді.


## Syntax

```powerquery
Table.ExpandRecordColumn(
    table as table,
    column as text,
    fieldNames as list,
    optional newColumnNames as list
) as table
```


## Remarks

Кіріс `table` ішінде жазбалардың `column` берілген болса, жазбадағы әр өріс үшін баған бар кестені жасайды. Таңдау бойынша, жаңа кестедегі бағандар үшін бірегей атауларды қамтамасыз ету үшін `newColumnNames` көрсетуге болады.

-   `table`: кеңейтетін жазба бағаны бар бастапқы кесте.
-   `column`: кеңейтетін баған.
-   `fieldNames`: кестедегі бағандарға кеңейтетін өрістердің тізімі.
-   `newColumnNames`: жаңа бағандарға беретін баған атауларының тізімі. Жаңа баған атаулары жаңа кестедегі ешбір бағанды қайталамауы керек.


## Examples

### Example #1
`({[a = [aa = 1, bb = 2, cc = 3], b = 2]})` кестесіндегі \[a\] бағанын 3 бағанға кеңейту: "aa", "bb" және "cc".
```powerquery
Table.ExpandRecordColumn(
    Table.FromRecords({
        [
            a = [aa = 1, bb = 2, cc = 3],
            b = 2
        ]
    }),
    "a",
    {"aa", "bb", "cc"}
)
```

Result: 
```powerquery
Table.FromRecords({[aa = 1, bb = 2, cc = 3, b = 2]})
```




## Category
Table.Transformation
