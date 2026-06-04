---
title: Table.SplitAt
---

# Table.SplitAt


Көрсетілген алғашқы санақ жолдарын және қалған жолдарды қамтитын тізімді қайтарады.


## Syntax

```powerquery
Table.SplitAt(
    table as table,
    count as number
) as list
```


## Remarks

Екі кестені қамтитын тізімді қайтарады: `table` алғашқы N жолы бар кесте (`count` көрсеткендей) және `table` қалған жолдарын қамтитын кесте. Нәтижесіндегі тізімнің кестелері дәл бір рет және ретпен санамаланса, функция `table` тек бір рет санамалайды.


## Examples

### Example #1
Кестенің бірінші екі жолын және кестенің қалған жолдарын қайтарады.
```powerquery
Table.SplitAt(#table({"a", "b", "c"}, {{1, 2, 3}, {4, 5, 6}, {7, 8, 9}}), 2)
```

Result: 
```powerquery
{
    #table({"a", "b", "c"}, {{1, 2, 3}, {4, 5, 6}}),
    #table({"a", "b", "c"}, {{7, 8, 9}})
}
```




## Category
Table.Row operations
