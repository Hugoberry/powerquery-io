---
title: Essbase.Cubes
---

# Essbase.Cubes


## Description

Vrátí krychle v instanci Essbase seskupené podle serveru Essbase.


## Syntax

```powerquery
Essbase.Cubes(
    url as text,
    optional options as record
) as table
```


## Details

Vrátí tabulku krychlí seskupených podle serveru Essbase z instance Essbase na serveru APS <code>url</code>. Lze zadat volitelný parametr záznamu, <code>options</code>, který řídí následující možnosti:    <ul><li><code>CommandTimeout</code> : Doba trv&#225;n&#237;, kter&#225; ř&#237;d&#237;, jak dlouho může dotaz b&#253;t dotaz na straně serveru spuštěn&#253;, než se zruš&#237;. V&#253;choz&#237; hodnota je 10 minut.</li></ul>



## Category
Accessing data
