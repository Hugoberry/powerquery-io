---
title: Snowflake.Databases
---

# Snowflake.Databases


## Description

Importați date de la un depozit Snowflake Computing.


## Syntax

```powerquery
Snowflake.Databases(
    server as text,
    warehouse as text,
    optional options as record
) as table
```


## Details

Returnează un tabel care listează tabelele din depozitul (<code>warehouse</code>) Snowflake Computing aflat pe <code>server</code>. Se poate specifica un parametru de înregistrare opțional, <code>options</code>, pentru a controla următoarele opțiuni:<ul><li><code>Rol</code>: o valoare text de folosit ca nume de rol pentru conexiune.</li><li><code>CreateNavigationProperties</code>: o valoare logică (true/false) care setează dacă se generează proprietăți de navigare în valorile returnate (valoarea implicită este true).</li><li><code>ConnectionTimeout</code>: numărul de secunde cât se așteaptă răspunsurile de rețea de la Snowflake.</li><li><code>CommandTimeout</code>: numărul de secunde cât se așteaptă executarea unei interogări.</li></ul>    


## Examples

### Example #1 
Enumerați tabelele dintr-un depozit Snowflake.
```powerquery
Snowflake.Databases("contoso.snowflakecomputing.com", "CONTOSO_WH")
```



