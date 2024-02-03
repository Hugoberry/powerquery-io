---
title: Table.ViewFunction
---

# Table.ViewFunction


## Description

Sukuriama funkcija, kurią gali perimti rodinyje nurodyta apdorojimo programa (per Table.View).


## Syntax

```powerquery
Table.ViewFunction(
    function as function
) as function
```


## Details

Pagal <code>function</code> sukuriama rodinio funkcija, kurią galima apdoroti <code>Table.View</code> sukurtame rodinyje.<br /><code>Table.View</code> <code>OnInvoke</code> apdorojimo programą galima naudoti kaip rodinio funkcijos apdorojimo programą.<br />Kaip ir naudojant integruotų operacijų apdorojimo programas, jei<code>OnInvoke</code> apdorojimo programa nėra nurodyta, jei ji neapdoroja rodinio funkcijos arba jei kyla apdorojimo programos klaida, rodiniui taikoma <code>function</code>.<br />Išsamesnį <code>Table.View</code> ir pasirinktinių rodinio funkcijų aprašą žiūrėkite publikuotuose „Power Query“ tinkinamos jungties dokumentuose.<br />



## Category
Table.Table construction
