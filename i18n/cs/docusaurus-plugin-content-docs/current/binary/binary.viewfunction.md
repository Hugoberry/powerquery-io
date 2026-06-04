---
title: Binary.ViewFunction
---

# Binary.ViewFunction


Vytvoří funkci, kterou může zachytit obslužná rutina definovaná v zobrazení (prostřednictvím Binary.View).


## Syntax

```powerquery
Binary.ViewFunction(
    function as function
) as function
```


## Remarks

Vytvoří funkci zobrazení založenou na `function`, která se dá zpracovat v zobrazení vytvořeném pomocí `Binary.View`.

Obslužnou rutinu `OnInvoke` `Binary.View` lze použít k definování obslužné rutiny funkce zobrazení.

Obdobně jako tomu je u obslužných rutin pro předdefinované operace, pokud není zadána obslužná rutina `OnInvoke` nebo pokud nezpracovává funkci zobrazení nebo pokud obslužná rutina vyvolá chybu, použije se nad zobrazením `function`.

Řiďte se publikovanou dokumentaci k vlastnímu konektoru Power Query, ve které najdete podrobnější popis `Binary.View` a vlastních funkcí zobrazení.



## Category
Binary
