---
title: Essbase.Cubes
---

# Essbase.Cubes


Hiermee worden de kubussen in een Essbase-exemplaar geretourneerd die door de Essbase-server is gegroepeerd.


## Syntax

```powerquery
Essbase.Cubes(
    url as text,
    optional options as record
) as table
```


## Remarks

Hiermee wordt een tabel met kubussen geretourneerd die door de Essbase-server zijn gegroepeerd vanuit een Essbase-exemplaar op APS-server <code>url</code>. U kunt een optionele recordparameter <code>options</code> opgeven om de volgende opties te bepalen:    <ul><li><code>CommandTimeout</code> : Een waarde voor de duur waarmee wordt bepaald hoelang de query op de server mag worden uitgevoerd voordat de query wordt geannuleerd. De standaardwaarde is tien minuten.</li></ul>



## Category
Accessing data
