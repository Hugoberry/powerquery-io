---
title: SparkPost.NavTable
---

# SparkPost.NavTable



## Syntax

```powerquery
SparkPost.NavTable(
    DaysToAggregate as number
) as table
```


## Remarks

Hämta de inbyggda tabeller som exponeras av SparkPost-anslutningsappen med data som sammanställts för ett användardefinierat antal dagar. Vid uppdatering av de här tabellerna eller vid anrop till SparkPost-API:t med den här anslutningsappen så bör du tänka på att SparkPost API har en strikt hastighetsbegränsning för API:t. Om du ser statuskod 429 returneras från SparkPost-servern så har du nått hastighetsgränsen måste vänta ett tag innan du gör fler anrop. När du väljer ett värde för parametern Antal dagar så bör du tänka på att API:t endast lagrar 6 månaders data.


