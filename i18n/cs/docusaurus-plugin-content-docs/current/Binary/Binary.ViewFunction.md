---
title: Binary.ViewFunction
---

# Binary.ViewFunction


## Description

Vytvoří funkci, kterou může zachytit obslužná rutina definovaná v zobrazení (prostřednictvím Binary.View).


## Syntax

```powerquery
Binary.ViewFunction(
    function as function
) as function
```


## Details

Vytvoří funkci zobrazení založenou na <code>function</code>, která se dá zpracovat v zobrazení vytvořeném pomocí <code>Binary.View</code>.<br />Obslužnou rutinu <code>OnInvoke</code> <code>Binary.View</code> lze použít k definování obslužné rutiny funkce zobrazení.<br />Obdobně jako tomu je u obslužných rutin pro předdefinované operace, pokud není zadána obslužná rutina <code>OnInvoke</code> nebo pokud nezpracovává funkci zobrazení nebo pokud obslužná rutina vyvolá chybu, použije se nad zobrazením <code>function</code>.<br />Řiďte se publikovanou dokumentaci k vlastnímu konektoru Power Query, ve které najdete podrobnější popis <code>Binary.View</code> a vlastních funkcí zobrazení.<br />



## Category
Binary
