---
title: Table.Partition
---

# Table.Partition


## Description

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


## Details

<code>column</code> мәнінің және <code>hash</code> функциясының негізінде <code>table</code> <code>groups</code> кестелер тізіміне бөледі.    <code>hash</code> функциясы жол үшін хэш мәнін алу үшін <code>column</code> мәніне қолданылады. <code>groups</code> хэш мәнін бөлу қалдығы жол қайтарылған кестелердің қайсысына орналастырылатынын анықтайды.    <ul>       <li><code>table</code>: бөлетін кесте.</li>       <li><code>column</code>: жол қайтарылған кестенің қайсысында екенін анықтауға арналған хэш бағаны.</li>       <li><code>groups</code>: кіріс кесте бөлінетін кестелер саны.</li>       <li><code>hash</code>: хэш мәнін алу үшін қолданылатын функция.</li>    </ul>  


## Examples

### Example #1 
Бағандардың мәнін хэш функциясы ретінде пайдаланып &lt;code&gt;(\{[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]})&lt;/code&gt; кестесін [a] бағанында 2 кестеге бөлу.
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
