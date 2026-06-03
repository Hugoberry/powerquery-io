---
title: Snowflake.Databases
---

# Snowflake.Databases


Importér data fra et Snowflake Computing-datalager.


## Syntax

```powerquery
Snowflake.Databases(
    server as text,
    warehouse as text,
    optional options as record
) as table
```


## Remarks

Returnerer en tabel med en oversigt over tabellerne i Snowflake Computing-`datalageret`, der befinder sig på `server`. Du kan eventuelt angive en postparameter, `indstillinger`, til at styre følgende indstillinger:

-   `Role`: en tekstværdi, der bruges som forbindelsens rollenavn.
-   `CreateNavigationProperties`: en logisk (sand/falsk) værdi, der bestemmer, om navigationsegenskaber skal genereres for de returnerede værdier (standardindstilling: sand)
-   `ConnectionTimeout`: Det antal sekunder, der skal ventes på netværkssvar fra Snowflake.
-   `CommandTimeout`: Det antal sekunder, der skal ventes på, at en forespørgsel udføres.


## Examples

### Example #1
Vis en oversigt over tabellerne i et Snowflake-datalager.
```powerquery
Snowflake.Databases("contoso.snowflakecomputing.com", "CONTOSO_WH")
```



