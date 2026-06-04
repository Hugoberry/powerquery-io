---
title: Snowflake.Databases
---

# Snowflake.Databases


Importați date de la un depozit Snowflake Computing.


## Syntax

```powerquery
Snowflake.Databases(
    server as text,
    warehouse as text,
    optional options as record
) as table
```


## Remarks

Returnează un tabel care listează tabelele din depozitul (`warehouse`) Snowflake Computing aflat pe `server`. Se poate specifica un parametru de înregistrare opțional, `options`, pentru a controla următoarele opțiuni:

-   `Rol`: o valoare text de folosit ca nume de rol pentru conexiune.
-   `CreateNavigationProperties`: o valoare logică (true/false) care setează dacă se generează proprietăți de navigare în valorile returnate (valoarea implicită este true).
-   `ConnectionTimeout`: numărul de secunde cât se așteaptă răspunsurile de rețea de la Snowflake.
-   `CommandTimeout`: numărul de secunde cât se așteaptă executarea unei interogări.


## Examples

### Example #1
Enumerați tabelele dintr-un depozit Snowflake.
```powerquery
Snowflake.Databases("contoso.snowflakecomputing.com", "CONTOSO_WH")
```



