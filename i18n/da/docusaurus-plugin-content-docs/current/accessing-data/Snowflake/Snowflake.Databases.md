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

Returnerer en tabel med en oversigt over tabellerne i Snowflake Computing-<code>datalageret</code>, der befinder sig på <code>server</code>. Du kan eventuelt angive en postparameter, <code>indstillinger</code>, til at styre følgende indstillinger:<ul><li><code>Role</code>: en tekstværdi, der bruges som forbindelsens rollenavn.</li><li><code>CreateNavigationProperties</code>: en logisk (sand/falsk) værdi, der bestemmer, om navigationsegenskaber skal genereres for de returnerede værdier (standardindstilling: sand)</li><li><code>ConnectionTimeout</code>: Det antal sekunder, der skal ventes på netværkssvar fra Snowflake.</li><li><code>CommandTimeout</code>: Det antal sekunder, der skal ventes på, at en forespørgsel udføres.</li></ul>    


## Examples

### Example #1 
Vis en oversigt over tabellerne i et Snowflake-datalager.
```powerquery
Snowflake.Databases("contoso.snowflakecomputing.com", "CONTOSO_WH")
```



