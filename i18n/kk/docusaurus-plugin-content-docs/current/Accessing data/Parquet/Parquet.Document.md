---
title: Parquet.Document
---

# Parquet.Document


## Description

Parquet құжатының контентін кесте ретінде қайтарады.


## Syntax

```powerquery
Parquet.Document(
    binary as binary,
    optional options as record
) as any
```


## Details

Parquet құжатының мазмұнын кесте түрінде қайтарады. Опциялар мыналарды қамтиды:
    <ul>
    <li> <code>TypeMapping</code> : файлдарды оқу және жазу кезінде әдепкі түрді салыстыруды басқаратын мәтіндік мән. Әдепкі мән null мәні болады және бастапқы түрмен мүмкіндігінше көп сәйкестікті сақтауға әрекеттенеді. "Sql" мәні Sql Server жүйесімен ең үйлесімді нәтижелерді береді.</li>
    </ul>



## Category
Деректерге қол жеткізу
