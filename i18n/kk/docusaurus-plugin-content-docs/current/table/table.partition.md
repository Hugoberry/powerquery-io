---
title: Table.Partition
---

# Table.Partition


Көрсетілген топтар санының және бағанның негізінде кестелер тізімін кестеге бөледі.


## Syntax

```powerquery
Table.Partition(
    table as table,
    column as text,
    groups as number,
    hash as function
) as list
```


## Remarks

`column` мәнінің және `hash` функциясының негізінде `table` `groups` кестелер тізіміне бөледі. `hash` функциясы жол үшін хэш мәнін алу үшін `column` мәніне қолданылады. `groups` хэш мәнін бөлу қалдығы жол қайтарылған кестелердің қайсысына орналастырылатынын анықтайды.

-   `table`: бөлетін кесте.
-   `column`: жол қайтарылған кестенің қайсысында екенін анықтауға арналған хэш бағаны.
-   `groups`: кіріс кесте бөлінетін кестелер саны.
-   `hash`: хэш мәнін алу үшін қолданылатын функция.


## Examples

### Example #1
Бағандардың мәнін хэш функциясы ретінде пайдаланып `({[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]})` кестесін \[a\] бағанында 2 кестеге бөлу.
```powerquery
Table.Partition(
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 1, b = 4],
        [a = 2, b = 4],
        [a = 1, b = 4]
    }),
    "a",
    2,
    each _
)
```

Result: 
```powerquery
{
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 2, b = 4]
    }),
    Table.FromRecords({
        [a = 1, b = 4],
        [a = 1, b = 4]
    })
}
```




## Category
Table.Row operations
