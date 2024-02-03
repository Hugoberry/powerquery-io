---
title: Table.NestedJoin
---

# Table.NestedJoin


## Description

Қамтамасыз етілген бағандарда кестелер арасында біріктіруді орындайды және жаңа бағанда біріктіру нәтижесін береді.


## Syntax

```powerquery
Table.NestedJoin(
    table1 as table,
    key1 as any,
    table2 as any,
    key2 as any,
    newColumnName as text,
    optional joinKind as JoinKind.Type,
    optional keyEqualityComparers as list
) as table
```


## Details

<code>key1</code> тарапынан таңдалған кілт бағандары мәндерінің теңдігі негізінде <code>table1</code> жолдарын <code>table2</code> жолдарымен біріктіреді (<code>table1</code> үшін) және <code>key2</code> (<code>table2</code> үшін). Нәтижелер <code>newColumnName</code> деп аталатын бағанға енгізіледі.<br />Қосымша <code>joinKind</code> орындалатын біріктіру түрін көрсетеді. Әдепкіде, егер <code>joinKind</code> көрсетілмесе, сол жақ сыртқы біріктіру орындалады.<br />Кілт бағандарын салыстыру әдісін көрсету үшін <code>keyEqualityComparers</code> қосымша жиынтығын қосуға болады. Бұл мүмкіндік ағымдағы уақытта тек ішкі пайдалануға арналған.<br />  


## Examples

### Example #1 
Бір кілт бағанын пайдаланып екі кестені біріктіріңіз.
```powerquery
Table.NestedJoin(
    Table.FromRecords({
        [CustomerToCall = 1],
        [CustomerToCall = 3]
    }),
    {"CustomerToCall"},
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
    }),
    {"CustomerID"},
    "CustomerDetails"
)
```

Result: 
```powerquery
Table.FromRecords({
    [CustomerToCall = 1, CustomerDetails = Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]})],
    [CustomerToCall = 3, CustomerDetails = Table.FromRecords({[CustomerID = 3, Name = "Paul", Phone = "543-7890"]})]
})
```




## Category
Table.Transformation
