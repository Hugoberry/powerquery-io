---
title: Table.NestedJoin
---

# Table.NestedJoin


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


## Remarks

`key1` тарапынан таңдалған кілт бағандары мәндерінің теңдігі негізінде `table1` жолдарын `table2` жолдарымен біріктіреді (`table1` үшін) және `key2` (`table2` үшін). Нәтижелер `newColumnName` деп аталатын бағанға енгізіледі.

Қосымша `joinKind` орындалатын біріктіру түрін көрсетеді. Әдепкіде, егер `joinKind` көрсетілмесе, сол жақ сыртқы біріктіру орындалады.

Кілт бағандарын салыстыру әдісін көрсету үшін `keyEqualityComparers` қосымша жиынтығын қосуға болады. Бұл мүмкіндік ағымдағы уақытта тек ішкі пайдалануға арналған.


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
