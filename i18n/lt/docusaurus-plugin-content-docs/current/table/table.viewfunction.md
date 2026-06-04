---
title: Table.ViewFunction
---

# Table.ViewFunction


Sukuriama funkcija, kurią gali perimti rodinyje nurodyta apdorojimo programa (per Table.View).


## Syntax

```powerquery
Table.ViewFunction(
    function as function
) as function
```


## Remarks

Pagal `function` sukuriama rodinio funkcija, kurią galima apdoroti `Table.View` sukurtame rodinyje.

`Table.View` `OnInvoke` apdorojimo programą galima naudoti kaip rodinio funkcijos apdorojimo programą.

Kaip ir naudojant integruotų operacijų apdorojimo programas, jei`OnInvoke` apdorojimo programa nėra nurodyta, jei ji neapdoroja rodinio funkcijos arba jei kyla apdorojimo programos klaida, rodiniui taikoma `function`.

Išsamesnį `Table.View` ir pasirinktinių rodinio funkcijų aprašą žiūrėkite publikuotuose „Power Query“ tinkinamos jungties dokumentuose.



## Category
Table.Table construction
