---
title: Binary.ViewFunction
---

# Binary.ViewFunction


## Description

Sukuriama funkcija, kurią gali perimti rodinyje apibrėžta apdorojimo programa (per Binary.View).


## Syntax

```powerquery
Binary.ViewFunction(
    function as function
) as function
```


## Details

Pagal <code>function</code> sukuriama rodinio funkcija, kurią galima apdoroti <code>Binary.View</code> sukurtame rodinyje.<br /><code>Binary.View</code> <code>OnInvoke</code> apdorojimo programą galima naudoti kaip rodinio funkcijos apdorojimo programą.<br />Kaip ir naudojant integruotų operacijų apdorojimo programas, jei<code>OnInvoke</code> apdorojimo programa nėra nurodyta, jei ji neapdoroja rodinio funkcijos arba jei kyla apdorojimo programos klaida, rodiniui taikoma <code>function</code>.<br />Išsamesnį <code>Binary.View</code> ir pasirinktinių rodinio funkcijų aprašą rasite paskelbtuose „Power Query“ tinkinamos jungties dokumentuose.<br />



## Category
Binary
