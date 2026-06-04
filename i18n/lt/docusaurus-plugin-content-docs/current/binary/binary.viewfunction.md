---
title: Binary.ViewFunction
---

# Binary.ViewFunction


Sukuriama funkcija, kurią gali perimti rodinyje apibrėžta apdorojimo programa (per Binary.View).


## Syntax

```powerquery
Binary.ViewFunction(
    function as function
) as function
```


## Remarks

Pagal `function` sukuriama rodinio funkcija, kurią galima apdoroti `Binary.View` sukurtame rodinyje.

`Binary.View` `OnInvoke` apdorojimo programą galima naudoti kaip rodinio funkcijos apdorojimo programą.

Kaip ir naudojant integruotų operacijų apdorojimo programas, jei`OnInvoke` apdorojimo programa nėra nurodyta, jei ji neapdoroja rodinio funkcijos arba jei kyla apdorojimo programos klaida, rodiniui taikoma `function`.

Išsamesnį `Binary.View` ir pasirinktinių rodinio funkcijų aprašą rasite paskelbtuose „Power Query“ tinkinamos jungties dokumentuose.



## Category
Binary
